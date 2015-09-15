import React, { Component } from 'react';
import AppHeader from './appHeader.js';
import GeneratorForm from './generatorForm.js';

class Main extends Component {
	render() {
		console.log('main');
		return (
			<div className="container">
				<AppHeader />
				<GeneratorForm />
	  	</div>);
	}
};

export default Main