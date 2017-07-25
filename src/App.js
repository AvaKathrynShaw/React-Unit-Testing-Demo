import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

*/


import React, { Component } from 'react'
import './App.css'
import { getUser } from './api/github'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount () {
    getUser('vnglst').then(data => {
      this.setState({ user: data.entity })
    })
  }

  render () {
    const { user } = this.state
    return (
      <div className='App'>
        <ul style={{ listStyle: 'none' }}>
          {
            // Loop over the object keys and render each key
            Object.keys(user).map(key => renderLine(user, key))
          }
        </ul>
      </div>
    )
  }
}

export default App
