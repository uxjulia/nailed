import React, { Component } from 'react'
import Sugar from 'sugar'
import ActiveScenes from './ActiveScenes'
import ActorList from '../Components/ActorList'

class AttendanceContainer extends Component {
  constructor(props){
    super(props)
    this.state = {data: null, scenes: null}
    this.handleRemove = this.handleRemove.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  
  componentWillMount(){
    const {actors, scenes} = this.props.data
    this.setState({actors: actors, scenes: scenes})
  }
  
  handleRemove(sceneList){
    let scenes = Sugar.Array.create(this.state.scenes)
    sceneList.map((item) => Sugar.Array.remove(scenes, item))
    this.setState({scenes: scenes})
  }
  
  handleAdd(sceneList){
    const scenes = this.state.scenes
    sceneList.map((item) => scenes.push(item))
    const nScenes = Sugar.Array.unique(scenes)
    this.setState({scenes: nScenes})
  }
  
  render(){
    const actors = this.state.actors
    const scenes = this.state.scenes
    const handleRemove = this.handleRemove
    const handleAdd = this.handleAdd
    return(
      <div>
        <div>
          <h1>Actors Present</h1>
          <ActorList handleAdd={handleAdd} handleRemove={handleRemove} data={actors} />
        </div>
        <br />
        <div>
          <h1>Scenes Ready</h1>
          <ActiveScenes scenes={scenes} />
        </div>
      </div>
    )
  }
}

export default AttendanceContainer
