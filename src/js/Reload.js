import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class Reload extends Component {

render() {

  const { fetchQuote, randomColor, updateColor, fetchImages } = this.props;
  
  return(
    <button className="reload" aria-label="Click to get new quote" onClick={() => { fetchQuote(); fetchImages(); updateColor() }} onKeyPress={() => { fetchQuote(); fetchImages(); updateColor() }}>
      <FontAwesomeIcon icon={faRedoAlt}  size="2x" className="reload-icon" style={{background: randomColor}} id="new-quote" />
    </button>   
  )

}
  
}

Reload.propTypes = {
  fetchQuote: PropTypes.func.isRequired
}

export default Reload;