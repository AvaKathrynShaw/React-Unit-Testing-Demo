
import React, { Component } from 'react'
import './App.css'
import List from './List'
import { getUser } from './api/github'


//MOCK TESTING ------------
/*
const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

export default class App extends Component {
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
*/


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.state.items.push(this.state.term);
    this.setState({ term: '', items: this.state.items });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        {<List items={this.state.items} />}
        {/* <List items={this.state.term} /> */}
      </div>
    );
  }
}
