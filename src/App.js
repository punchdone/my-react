import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state  = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value'
	}

	nameChangedHandler = (event) => {
		this.setState( {
			persons: [
				{ name: 'Max', age: 28 },
				{ name: event.target.value, age: 29 },
				{ name: 'Stephanie', age: 26 }
			]
		} )
	}

	switchNameHandler = () => {
		// console.log("Was clicked!");
		// this.state.persons[0].name = "Scotter Dogger";
		this.setState({
			persons: [
				{ name: 'Scotter Dogger', age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 }
			]
		})
	}


	render() {
		return (
		    <div className="App">
		      <h1>Hi, I am a React App</h1>
		      <p>This is really working</p>
<<<<<<< HEAD
		      <button onClick={this.switchNameHandler}>Switch Name</button>
		      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
		      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies include: Racing</Person>
=======
		      <button>Switch Name</button>
		      <Person 
		      	name={this.state.persons[0].name} 
		      	age={this.state.persons[0].age} />
		      <Person 
		      	name={this.state.persons[1].name} 
		      	age={this.state.persons[1].age}
		      	changed={this.nameChangedHandler}>Hobbies include: Racing</Person>
>>>>>>> be1442e67e717842853e30e0a77e1b1b94694ae8
		      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
		    </div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App'));
	}
}

export default App;
