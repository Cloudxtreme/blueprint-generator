import React, { Component } from 'react';

class GeneratorForm extends Component {
	render() {
		return (
			<form>
				<p>Echo Park jean shorts health goth, four dollar toast letterpress street art Vice bitters twee. Cardigan chia fashion axe squid, listicle scenester organic sustainable meditation kogi tousled tofu. Carles keytar gentrify McSweeney's, migas drinking vinegar post-ironic chambray keffiyeh swag High Life tofu skateboard hoodie ethical. Twee banh mi mustache slow-carb beard mlkshk. Authentic twee disrupt, slow-carb skateboard iPhone bespoke sartorial Echo Park squid retro lomo Vice literally. Brunch quinoa Pinterest keffiyeh, four loko lomo Odd Future Godard normcore trust fund selvage actually. Before they sold out sartorial ennui, vegan Thundercats artisan stumptown flannel.</p>
				<br/>
				<div className='form-row'>
					<label htmlFor='breedname-1'>Breed 1</label>
					<input id='breedname-1' type='text' placeholder='Name' />
					<input id='breeddeployable-1' type='text' placeholder='Deployable' />
				</div>
				<div className='form-row'>
					<label htmlFor='breedname-2'>Breed 2</label>
					<input id='breedname-2' type='text' placeholder='Name' />
					<input id='breeddeployable-2' type='text' placeholder='Deployable' />
				</div>
	  	</form>);
	}
};

export default GeneratorForm