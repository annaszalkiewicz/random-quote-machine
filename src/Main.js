import React, { Component } from 'react';
import Reload from './Reload';
import Share from './Share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			quote: "",
			author: ""
		}
		this.fetchQuote = this.fetchQuote.bind(this);
	}

	componentDidMount = () => {

		this.fetchQuote();

	}

	fetchQuote = () => {

		fetch('https://talaikis.com/api/quotes/random/')
		.then(response => response.json())
		.then((data) => {
			this.setState({ quote: data.quote, author: data.author });
		})
		.catch(e => console.log('Error')
		);

	}

	render() {

		const {quote, author} = this.state;

		return (
			<main className="main">
				<div className="container" id="quote-box">
					<FontAwesomeIcon icon={faQuoteLeft} />
					<p className="quote" id="text">{quote}</p>
					<p className="author" id="author">{author}</p>
					<div className="bottom">
						<Share quote={quote} author={author} />
						<Reload
							fetchQuote = {this.fetchQuote}
						/>
					</div>
				</div>
			</main>
		)
	}
}

export default Main;