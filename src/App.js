import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Eduardo', age: 27 },
      { name: 'Juan', age: 30 }
    ]
  }

  switchNameHandler = () => {
    console.log('Before', this.state.people);
    this.setState(() => {
      return {
        people: [
          { name: 'Luis', age: 30 },
          { name: 'Juan', age: 21 } 
        ]
      };
    })

    console.log(this.state.people);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Click me plx</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
      </div>
    );
  }
}

export default App;
