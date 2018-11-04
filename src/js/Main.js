import React, { Component } from 'react';
import Reload from './Reload';
import Share from './Share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			quote: "",
			author: "",
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

		const { quote, author } = this.state;
		const { randomColor, error } = this.props;

		return (

			<main className="main">

				{error &&
					<div className="error">Sorry, there was a problem with getting new quote. Please, try again later.</div>
				}

				{navigator.onLine &&
					<div className="container" id="quote-box">
						<div className="quote-container">
							<FontAwesomeIcon icon={faQuoteLeft} className="quote-left" />
							<span className="quote" id="text" aria-label={quote} tabIndex="0">{quote}</span>
							<FontAwesomeIcon icon={faQuoteRight} className="quote-right" />
						</div>

						<p className="author" id="author">{author}</p>
						<div className="bottom">
							<Share
								quote={quote}
								author={author}
								randomColor={randomColor}
							/>
							<Reload />
						</div>
					</div>
				}


			</main>
		)
	}
}

export default Main;