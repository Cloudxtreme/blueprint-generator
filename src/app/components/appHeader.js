import React, { Component } from 'react';

class AppHeader extends Component {
	render() {
		return (
			<header id='header'>
				<img src='img/vamp_logo.svg' width='134px' height='32px' className='logo' />
				<h1>A/B Blueprint generator</h1>
	  	</header>);
	}
};

export default AppHeader