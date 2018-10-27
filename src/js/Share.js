import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'

class Share extends Component {

	render() {

		const { quote, author, randomColor } = this.props;

		return (

			<div className="share">

				<a href="https://www.tumblr.com/share" data-posttype="quote" data-content={quote} data-caption={author} target="_blank" rel="noopener noreferrer"  aria-label="Share quote on Tumblr">
					<FontAwesomeIcon icon={faTumblrSquare} size="3x" style={{ color: randomColor }} className="tumblr" />
				</a>

				<a href={`https://twitter.com/intent/tweet?text=${quote}%20by%20${author}&hashtags=quote`} className="tweet" id="tweet-quote" aria-label="Share quote on Twitter">
					<FontAwesomeIcon icon={faTwitterSquare} className="twitter" onClick={this.tweet} size="3x" style={{ color: randomColor }} />
				</a>

			</div>

		)
	}

}

Share.propTypes = {
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}

export default Share;