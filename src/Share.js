import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


class Share extends Component {

	render() {

		const { quote, author } = this.props;

		return(

			<div className="tweet">
				
					<a href={`https://twitter.com/intent/tweet?text=${quote}%20by%20${author}&hashtags=quote`}>
					<FontAwesomeIcon icon={faTwitterSquare} className="twitter" onClick={this.tweet} />
					</a>

			</div>

		)
	}

}

export default Share;