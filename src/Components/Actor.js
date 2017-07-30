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
    const { scenes } = this.props.data
    const { appState } = this.props
    if (this.state.absent) {
      appState.handleAdd(scenes)
    }
    if (!this.state.absent) {
      appState.handleRemove(scenes)
    }
  }
  render () {
    const style = {
      marginBottom: '15px',
      padLeft: {
        paddingLeft: '5px'
      }
    }
    const {firstName, lastName, scenes} = this.props.data
    return (
      <tr>
        <td>
          {this.state.absent && <button type='button' className='btn btn-sm btn-warning' onClick={this.handleToggle}>Absent</button>}
          {!this.state.absent && <button type='button' className='btn btn-sm btn-success' onClick={this.handleToggle}>Present</button>}
        </td>
        <td>
          <strong style={style.padLeft}>{firstName} {lastName}</strong> is
            {this.state.absent && ' absent and that is sad'}
            {!this.state.absent && ' present and ready to rock'}
            {this.state.showScenes && scenes.map((scene) => (<li style={style.padLeft} key={scene.id}>{scene.name}</li>))}
        </td>
        <td>
          {!this.state.absent && <button type='button' className='btn btn-sm btn-outline-info' onClick={this.toggleScenes}>View {scenes.length} Scene{scenes.length > 1 && 's'}</button>}
          {this.state.absent && <button type='button' className='btn btn-sm btn-danger' onClick={this.toggleScenes}>View {scenes.length} Scene{scenes.length > 1 && 's'}</button>}
        </td>
      </tr>
    )
  }
}

export default Actor
