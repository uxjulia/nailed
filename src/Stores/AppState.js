import { observable, computed, action} from 'mobx'
import Sugar from 'sugar'

const AppState = observable({
  activeScenes: [],
  presentPlayers: [],
  
  get totalPresent() {
    return this.presentPlayers.length
  },
  handleRemove: action (function(sceneList) {
    let scenes = Sugar.Array.create(this.activeScenes)
    this.activeScenes = sceneList.map((item) => Sugar.Array.remove(scenes, item))
  }),

  handleAdd: action (function(sceneList) {
    const scenes = this.activeScenes
    sceneList.map((item) => scenes.push(item))
    this.activeScenes = Sugar.Array.unique(scenes)
  })
})

export default AppState
