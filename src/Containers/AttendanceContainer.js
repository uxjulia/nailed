import React from 'react'
import ScenesList from '../Components/Scene'
import ActorList from '../Components/ActorList'
import { gql, graphql } from 'react-apollo'

const actorsWithScenesQuery = gql`
  query ActorsWithScenes {
    allActors {
      id
      firstName
      lastName
      scenes {
        id
        name
      }
    },
    allScenes {
      id
      name
      difficulty
      actors {
        id
        firstName
        lastName
      }
    }
  }
`

const TransportLayer = ({ ...props, data: {loading, error, allActors, allScenes}}) => {
  if (loading) { return (<p>Loading...</p>)}
  if (error) { return <p>{error.message}</p> }
  return (
    <div>
      <div>
        <h1>Actors Present</h1>
        <ActorList {...props} data={allActors} />
      </div>
      <br />
      <div>
        <h1>Scenes Ready</h1>
        <ScenesList {...props} data={allScenes} />
      </div>
    </div>
  )
}

const TransportLayerWithData = graphql(actorsWithScenesQuery)(TransportLayer)
export default TransportLayerWithData
