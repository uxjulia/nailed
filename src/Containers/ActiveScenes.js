import React from 'react'

const ActiveScenes = ({scenes}) => {
  const uiRender = []
  scenes.map((scene, i) => uiRender.push(<li key={i}> {scene}</li>))
  return (
    <div>
      {uiRender}
    </div>
  )
}

export default ActiveScenes
