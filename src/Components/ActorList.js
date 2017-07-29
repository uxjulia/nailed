import React from 'react'
import Actor from './Actor'

const ActorList = ({data, ...props}) => {
    const uiRender = []
    data.forEach((actor) => (uiRender.push(<Actor key={actor.id} {...props} data={actor} />)))
    return(
      <div>{uiRender}</div>
    )
  }

export default ActorList
