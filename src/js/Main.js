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
		// this.changeColor = this.changeColor.bind(this);
	}

	componentDidMount = () => {

		this.fetchQuote();
		// this.changeColor();

	}

	// changeColor = () => {

	// 	const colors = ['#9e2021', '#155F60', '#6C943E', '#1E7F3F'];
	// 	const randomColor = Math.floor(Math.random * colors.length);
	// 	const body = document.getElementsByTagName('body');

	// 		body.background(randomColor)

	// }

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
		const { updateColor, randomColor, fetchImages } = this.props;
		

		return (
			<main className="main">
				<div className="container" id="quote-box" style={{color: randomColor}}>
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
						<Reload
							fetchQuote = {this.fetchQuote}
							updateColor = {updateColor}
							randomColor = {randomColor}
							fetchImages = {fetchImages}
						/>
					</div>
				</div>
			</main>
		)
	}
}

export default Main;