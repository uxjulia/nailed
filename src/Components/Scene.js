import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

// A scene has a title, difficulty rating, and a list of actors
const style = {
  marginBottom: '15px'
}

class Scene extends Component {
  constructor(props) {
    super(props)
    this.state = { showPlayers: false }
    this.togglePlayers = this.togglePlayers.bind(this)
  }
  
  togglePlayers = action('toggle', (() => {
    this.setState(prevState => ({
      showPlayers: !prevState.showPlayers
    }))
  }))
  
  render () {
    const { name, actors } = this.props.data
    const showPlayers = this.state.showPlayers
    const listOfPlayers = (<ol>{ actors.map(actor => (<li key={actor.id}>{actor.firstName} {actor.lastName}</li>)) }</ol>)
    return (
      <div style={style}>
        <strong><button className='btn btn-link' onClick={this.togglePlayers}>{name} <span className='badge badge-pill badge-primary'>{actors.length}</span></button></strong>
        { showPlayers && <div>{listOfPlayers}</div> }
      </div>
    )}
}

const ScenesList = ({data}) => {
  return (
    <ul>
      { data.map( scene => <Scene key={scene.id} data={scene} />) }
    </ul>
  )
}

export default ScenesList

