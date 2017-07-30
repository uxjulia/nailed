import 'bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'
import AttendanceContainer from './Containers/AttendanceContainer'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import AppState from './Stores/AppState'

const appState = AppState

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj5pk389ha1hk0160sm5rtf25'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <AttendanceContainer appState={appState}/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
