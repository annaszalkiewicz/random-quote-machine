import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class Reload extends Component {

render() {

  const { fetchQuote, updateColor, randomColor } = this.props;
  
  return(
      <FontAwesomeIcon icon={faRedoAlt} onClick={() => { fetchQuote(); updateColor() }} onKeyPress={() => { fetchQuote(); updateColor() }} size="2x" className="reload-icon" style={{background: randomColor}} id="new-quote" role="button" aria-label="Click to get new quote" tabIndex="0"/>
  )

}
  
}

Reload.propTypes = {
  fetchQuote: PropTypes.func.isRequired
}

export default Reload;