import { observable, reaction, computed } from 'mobx'
import uniqid from 'uniqid'

class SceneStore {
  actorStore
  transportLayer
  @observable scenes = []
  @observable isLoading = true;

  constructor (transportLayer, actorStore) {
    this.actorStore = actorStore // Store that can resolve authors for us
    this.transportLayer = transportLayer // Thing that can make server requests for us
    this.transportLayer.onReceiveSceneUpdate(updatedScene => this.updateSceneFromServer(updatedScene))
    this.loadScenes()
  }

  updateSceneFromServer (json) {
    let scene = this.scenes.find(scene => scene.id === json.id)
    if (!scene) {
      scene = new Scene(this, json.id)
      this.scenes.push(scene)
    }
    if (json.isDeleted) {
      this.removescene(scene)
    } else {
      scene.updateFromJson(json)
    }
  }
}

export class Scene {
  id = null
  @observable active = true
  /**
   * reference to an Actors array (from the actorStore)
   */
  @observable actors = []
  store = null
  /**
   * Indicates whether changes in this object
   * should be submitted to the server
   */
  autoSave = true
  /**
   * Disposer for the side effect that automatically
   * stores this Scene, see @dispose.
   */
  saveHandler = null

  constructor (store, id = uniqid()) {
    this.store = store
    this.id = id

    this.saveHandler = reaction(
      // observe everything that is used in the JSON:
      () => this.asJson,
      // if autoSave is on, send json to server
      (json) => {
        if (this.autoSave) {
          this.store.transportLayer.saveScene(json)
        }
      }
    )
  }
  /**
   * Remove this scene from the client and server
   */
  delete () {
    this.store.transportLayer.deleteScene(this.id)
    this.store.removeScene(this)
  }

  @computed get asJson () {
    return {
      id: this.id,
      completed: this.completed,
      name: this.name,
      actors: this.actors ? this.author.id : null
    }
  }
  /**
   * Update this scene with information from the server
   */
  updateFromJson (json) {
        // make sure our changes aren't send back to the server
    this.autoSave = false
    this.difficulty = json.difficulty
    this.actors = this.store.actors.resolveAuthor(json.authorId)
    this.autoSave = true
  }

  dispose () {
        // clean up the observer
    this.saveHandler()
  }
}

export default SceneStore
