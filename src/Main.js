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

		const {quote } = this.state;

		return (
			<main className="main">
				<div className="container" id="quote-box">
					<p className="quote" id="text">{quote}</p>
				</div>
			</main>
		)
	}
}

export default Main;