import React, { Component } from 'react'

class Actor extends Component {
  constructor (props) {
    super(props)
    this.state = {absent: false, showScenes: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.updateList = this.updateList.bind(this)
    this.toggleScenes = this.toggleScenes.bind(this)
  }

  toggleScenes () {
    this.setState(prevState => ({
      showScenes: !prevState.showScenes
    }))
  }

  handleToggle () {
    this.setState(prevState => ({
      absent: !prevState.absent
    }))
    this.updateList()
  }

  updateList () {
    const {scenes} = this.props.data
    if (this.state.absent) {
      this.props.handleAdd(scenes)
    }
    if (!this.state.absent) {
      this.props.handleRemove(scenes)
    }
  }
  render () {
    const style = {
      marginBottom: '15px',
      padLeft: {
        paddingLeft: '5px'
      }
    }
    const {name, scenes} = this.props.data
    return (
      <div style={style}>
        {this.state.absent &&
          <button type='button' className='btn btn-sm btn-warning' onClick={this.handleToggle}>Absent</button>}
        {!this.state.absent && <button type='button' className='btn btn-sm btn-success' onClick={this.handleToggle}>Present</button>}
        <strong style={style.padLeft}>{name}</strong> is
          {this.state.absent &&
            ' absent and that is sad'}
          {!this.state.absent &&
            ' present and ready to rock'}
        <span style={style.padLeft}>
          {!this.state.absent && <button type='button' className='btn btn-sm btn-outline-info' onClick={this.toggleScenes}>View Scenes</button>}
          {this.state.absent && <button type='button' className='btn btn-sm btn-danger' onClick={this.toggleScenes}>View Scenes</button>}</span>
        <div className='sceneList'>{this.state.showScenes && scenes.map((scene, i) => (<li key={i}>{scene}</li>))}</div>
      </div>
    )
  }
}

export default Actor
