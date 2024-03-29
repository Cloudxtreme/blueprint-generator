import React, { Component } from 'react';
import GeneratorActions from '../actions/generatorActions.js';

class GeneratorForm extends Component {

	constructor(props) {
    super(props);
		this.state = {
			experimentName: '',
			publicEndpoint: '',
			controlName: '',
			controlDeployable: '',
			controlPort: '',
			variantName: '',
			variantDeployable: '',
			variantPort: '',
			distribution: '50'
		}
	}

	//Event handlers
	handleSubmit(e) {
		e.preventDefault();
		GeneratorActions.generate(this.state);
	}
	handleRangeAdjust(e){
		console.log(e.currentTarget.value);
		console.log(this.state);
		this.setState({ distribution: e.currentTarget.value });
	}
	handleInputChange(property, e){
		this.setState({
			[property]: e.currentTarget.value
		})
	}

	// Render
	render() {
		return (
			<form>
				
				<p>Echo Park jean shorts health goth, four dollar toast letterpress street art Vice bitters twee. Cardigan chia fashion axe squid, listicle scenester organic sustainable meditation kogi tousled tofu. Carles keytar gentrify McSweeney's, migas drinking vinegar post-ironic chambray keffiyeh swag High Life tofu skateboard hoodie ethical. Twee banh mi mustache slow-carb beard mlkshk. Authentic twee disrupt, slow-carb skateboard iPhone bespoke sartorial Echo Park squid retro lomo Vice literally. Brunch quinoa Pinterest keffiyeh, four loko lomo Odd Future Godard normcore trust fund selvage actually. Before they sold out sartorial ennui, vegan Thundercats artisan stumptown flannel.</p>
				<br/>

				<div className='column full-size section'>
					<div className='column third-size double'>
						<label htmlFor='blueprintname'>Experiment name</label>
						<input id='blueprintname' type='text' placeholder='front-end-AB:1.0' onChange={this.handleInputChange.bind(this, 'experimentName')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
					<div className='column third-size double'>
						<label htmlFor='endpoint-port'>Public endpoint port</label>
						<input id='endpoint-port' type='text' placeholder='9050/http' onChange={this.handleInputChange.bind(this, 'publicEndpoint')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
				</div>

				<div className='column full-size section'>
					<h2>A: Control</h2>
					<div className='column third-size double'>
						<label htmlFor='control-name'>Name</label>
						<input id='control-name' type='text' placeholder='front-end:1.0' onChange={this.handleInputChange.bind(this, 'controlName')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast art</small></aside>
					</div>
					<div className='column third-size double'>
						<label htmlFor='control-name'>Deployable</label>
						<input id='control-deployable' type='text' placeholder='docker://magneticio/sava:1.0.0' onChange={this.handleInputChange.bind(this, 'controlDeployable')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
					<div className='column third-size double'>
						<label htmlFor='control-port'>Private port</label>
						<input id='control-port' type='text' placeholder='9050/http' onChange={this.handleInputChange.bind(this, 'controlPort')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
				</div>

				<div className='column full-size section'>
					<h2>B: Variant</h2>
					<div className='column third-size double'>
						<label htmlFor='variant-name'>Name</label>
						<input id='variant-name' type='text' placeholder='front-end:1.1' onChange={this.handleInputChange.bind(this, 'variantName')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
					<div className='column third-size double'>
						<label htmlFor='variant-name'>Deployable</label>
						<input id='variant-deployable' type='text' placeholder='docker://magneticio/sava:1.1.0' onChange={this.handleInputChange.bind(this, 'variantDeployable')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
					<div className='column third-size double'>
						<label htmlFor='variant-port'>Private port</label>
						<input id='variant-port' type='text' placeholder='9050/http' onChange={this.handleInputChange.bind(this, 'variantPort')} />
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
					</div>
				</div>

				<div className='column full-size section'>
					<div className='column third-size double'>
						<label htmlFor='blueprintname'>Distribution</label>
						<strong className='slider-label'>A</strong>
						<input type="range" min="0" max="100" step="1" 
	            className='range-slider'
	            defaultValue={this.state.distribution}
	            onChange={this.handleRangeAdjust} />
	          <strong className='slider-label'>B</strong>
					</div>
					<div className='column third-size'>
						<aside><small>Echo Park jean shorts health goth, four dollar toast letterpress street art</small></aside>
						<br/>
					</div>
				</div>

				<button type='submit' className='button button-pink submit-button' onClick={this.handleSubmit.bind(this)}>Generate!</button>

	  	</form>);
	}
};

export default GeneratorForm