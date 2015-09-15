import React, { Component } from 'react';
import AppHeader from './appHeader.js';
import GeneratorForm from './generatorForm.js';
import GeneratedBlueprint from './generatedBlueprint.js';

class Main extends Component {
	render() {
		console.log('main');
		return (
			<div className="container">
				<AppHeader />
				<GeneratorForm />
				<GeneratedBlueprint />
	  	</div>);
	}
};

export default Main