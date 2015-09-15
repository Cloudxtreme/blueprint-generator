import React, { Component } from 'react';

class GeneratedBlueprint extends Component {

	//Event handlers
	handleSubmit(e) {
		e.preventDefault();
		console.log('submit!');
	}

	// Render
	render() {

		let blueprintTemplate = `name: sava:1.0
endpoints:
  sava.port: 9050/http
clusters:
  sava:
    services: # services is now a list of breeds
      -
        breed:
          name: sava:1.0.0
          deployable: magneticio/sava:1.0.0
          ports:
            port: 8080/http
        scale:
          cpu: 0.2
          memory: 256
          instances: 1
        routing:
          weight: 50  # weight in percentage
      -
        breed:
          name: sava:1.1.0 # a new version of our service
          deployable: magneticio/sava:1.1.0
          ports:
            port: 8080/http
        scale:
          cpu: 0.2
          memory: 256
          instances: 1
        routing:
          weight: 50`;

		return (
			<textarea rows='30'>
				{blueprintTemplate}
	  	</textarea>);
	}
};

export default GeneratedBlueprint