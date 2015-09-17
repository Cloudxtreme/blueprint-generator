import React, { Component } from 'react';
import GeneratorStore from '../stores/generatorStore';

class GeneratedBlueprint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blueprintTemplate: ''
    }
  }
  componentWillMount() {
    GeneratorStore.addChangeListener(this._onChange.bind(this));
  }
  componentWillUnmount() {
    GeneratorStore.removeChangeListener(this._onChange.bind(this));
  }

  handleChange(e) {
    this.setState({ blueprintTemplate: e.currentTarget.value });
  }

	// Render
	render() {

		return (
			<textarea rows='30' value={this.state.blueprintTemplate} onChange={this.handleChange.bind(this)}>
	  	</textarea>);
	}

  _onChange(){
    console.log(GeneratorStore.getBlueprint());
    this.setState({ blueprintTemplate: GeneratorStore.getBlueprint() });
  }
};

export default GeneratedBlueprint