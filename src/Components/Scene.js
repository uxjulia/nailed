// @flow
import React from 'react'

// A scene has a title, difficulty rating, and a list of actors
type SceneType = {
  title: String,
  rating: String,
  actors: Array<String>
}

const Scene = (scene: SceneType) => {
  return (
    <div>
      <p>{scene.title}</p>
      <span>{scene.rating}</span>
      <hr />
      { scene.actors.map(actor => ({ actor })) }
    </div>
  )
}

export default Scene
