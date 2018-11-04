import React, { Component } from 'react';

class Referral extends Component {

  render() {

    const { link, author } = this.props;
    const href = `${link}?utm_source=your_quote_for_today&utm_medium=referral`
    return(
      <div className="referral">
        <p>Photo by <a href={href} target="_blank" rel="noopener noreferrer">{author}</a> on <a href="https://unsplash.com/?utm_source=your_quote_for_today&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
      </div>
    )
  }
}

export default Referral;