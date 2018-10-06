import React, { Component } from 'react';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			quote: "",
			author: ""
		}
	}

	componentDidMount = () => {

		// Fetch random quote from API. If response is successful run showRandom() function, if not - showError()

		fetch('https://talaikis.com/api/quotes/random/')
		.then(response => response.json())
		.then((data) => {
			this.setState({ quote: data.quote, author: data.author });
		})
		.catch(e => console.log('Error')
		);

	}

	render() {

		return (
			<main className="main">
			</main>
		)
	}
}

export default Main;