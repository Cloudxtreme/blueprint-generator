import React, { Component } from 'react';
import AppHeader from './appHeader.js';
import GeneratorForm from './generatorForm.js';
import GeneratedBlueprint from './generatedBlueprint.js';

class Main extends Component {

	constructor(props) {
    super(props);
		this.state = {
			errorMessage: null,
			inputValues: {}
		}
	}

	generateBlueprint(inputValues){
		this.setState({ errorMessage: null });
		this.validateInput(inputValues, () => {
			if(!this.state.errorMessage)
				this.setState({ inputValues: inputValues });
		});
	}
	validateInput(inputValues, callback){
		for (let variable in inputValues) {
			if(inputValues[variable] == '')
				this.setState({ errorMessage: 'You forgot to fill in all the fields!' });
		}
		callback();
	}

	render() {
		console.log(this.state.inputValues);
		return (
			<div className="container">
				<AppHeader />
				<GeneratorForm generateBlueprint={this.generateBlueprint.bind(this)} />
				<GeneratedBlueprint inputValues={this.state.inputValues} errors={this.state.errorMessage} />
	  	</div>);
	}
};

export default Main