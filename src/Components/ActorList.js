import React from 'react'
import Actor from './Actor'

const ActorList = ({data, ...props}) => {
    return(
      <table className='table table-sm table-bordered table-responsive'>
        <tbody>
        { data.map(actor => (<Actor key={actor.id} {...props} data={actor} />)) }
        </tbody>
      </table>
    )
  }

export default ActorList

