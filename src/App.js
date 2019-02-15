import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Eduardo', age: 27 },
      { name: 'Juan', age: 30 }
    ],
    showPeople: false
  }

  togglePeopleHandler = () => {
    this.setState(prevState => {
      return {
        showPeople: !prevState.showPeople
      }
    });
  };

  nameChangeHandler = (e) => {
    const newName = e.target.value;

    if (newName) {
      this.setState(() => {
        return {
          people: [
            { name: newName, age: 30 },
            { name: 'Juan', age: 21 } 
          ]
        }
      })
    }
  };
  
  logMessage = (dataFromChild) => {
    console.log(dataFromChild);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button className="App-button" onClick={this.togglePeopleHandler}>Click me</button>
        {this.state.showPeople && <div>
          <Person 
            name={this.state.people[0].name} 
            age={this.state.people[0].age}
            logMessage={() => this.logMessage('Argument from child component')} 
          />
          <Person 
            name={this.state.people[1].name} 
            age={this.state.people[1].age}
            logMessage={this.logMessage.bind(this, 'Argument from second child')}
            nameChangeHandler={this.nameChangeHandler}
          />
        </div>}
      </div>
    );
  }
}

export default App;
