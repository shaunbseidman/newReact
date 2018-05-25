import React, { Component } from 'react';
import Projects from './Components/Projects'
import ProjectItem from './Components/ProjectItem'
import AddProject from './Components/AddProject'

import './App.css';

class App extends Component {
  constructor(){
  super()
    this.state={
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category:'Web Design'
      },
      {
        title: 'Social',
        category:'Mobile Dev'
      },
      {
        title: 'E-Commerce',
        category:'Web Dev'
      },
    ]})
  }

  render() {
    return (
      <div className="App">
        <AddProject />

        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
