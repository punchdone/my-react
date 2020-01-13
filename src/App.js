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
		otherState: 'some other value',
		showPersons: false
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

	// switchNameHandler = () => {
	// 	// console.log("Was clicked!");
	// 	// this.state.persons[0].name = "Scotter Dogger";
	// 	this.setState({
	// 		persons: [
	// 			{ name: 'Scotter Dogger', age: 28 },
	// 			{ name: 'Manu', age: 29 },
	// 			{ name: 'Stephanie', age: 27 }
	// 		]
	// 	})
	// }

	togglePersonsHandler = () => {

	}


	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}
		return (
		    <div className="App">
		      <h1>Hi, I am a React App</h1>
		      <p>This is really working</p>
		      <button
		      	onClick={this.togglePersonsHandler()}
		      	style={style}>
		      		Switch Name
		      </button>
		      {this.state.showPersons <div >
			      <Person
			      	name={this.state.persons[0].name}
			      	age={this.state.persons[0].age} />
			      <Person
			      	name={this.state.persons[1].name}
			      	age={this.state.persons[1].age}
			      	changed={this.nameChangedHandler}>Hobbies include: Racing</Person>
			      <Person
			      	name={this.state.persons[2].name}
			      	age={this.state.persons[2].age} />
			     </div>}
		    </div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App'));
	}
}

export default App;
