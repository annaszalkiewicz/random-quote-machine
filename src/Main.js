import React, { Component } from 'react';

class Main extends Component {

	constructor(props) {
		super(props);

		this.showRandom = this.showRandom.bind(this);
		this.showError = this.showError.bind(this);
	}

	componentDidMount = () => {

		fetch('https://talaikis.com/api/quotes/random/')
		.then(response => response.json())
		.then(this.showRandom())
		.catch(e => this.showError());

	}

	showRandom = () => {
		console.log('Success!');
	}

	showError = () => {
		console.log('Error');
	}

	render() {
		return (
			<main className="main">
			</main>
		)
	}
}

export default Main;