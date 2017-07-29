import React, {Component} from 'react'
import AttendanceContainer from './Containers/AttendanceContainer'

const actors = [
  {id: 1, name: 'Cersei Lannister', scenes: ['Shame', 'Red Wedding']},
  {id: 2, name: 'Daenarys Targaryan', scenes: ['Mother of Dragons', 'The Narrow Sea']},
  {id: 3, name: 'Arya Stark', scenes: ['The Mountain', 'The North Remembers']},
  {id: 4, name: 'Robb Stark', scenes: ['Red Wedding', 'Early Grave']},
  {id: 5, name: 'Jon Snow', scenes: ['White Walkers', 'The Wall']}
]

const scenes = [
  'Red Wedding',
  'White Walkers',
  'Shame',
  'Mother of Dragons',
  'The North Remembers',
  'The Mountain',
  'The Wall',
  'Early Grave',
  'The Narrow Sea'
]

const data = {
  actors: actors,
  scenes: scenes
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AttendanceContainer data={data} />
      </div>
    )
  }
}

export default App
