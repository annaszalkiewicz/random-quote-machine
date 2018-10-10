import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'


class Share extends Component {

	constructor(props) {
		super(props);
	}
	

	render() {

		const { quote, author } = this.props;

		return (

			<div className="share"> a

				<button className="facebook">
					<a href="https://www.tumblr.com/share"  data-posttype="quote" data-content={quote} data-caption={author} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTumblrSquare} />
					</a>
				</button>
				<button className="tweet">
					<a href={`https://twitter.com/intent/tweet?text=${quote}%20by%20${author}&hashtags=quote`}>
						<FontAwesomeIcon icon={faTwitterSquare} className="twitter" onClick={this.tweet} />
					</a>
				</button>

			</div>

		)
	}

}

export default Share;