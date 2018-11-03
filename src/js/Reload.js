import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class Reload extends Component {

render() {

  const { fetchQuote, fetchImages } = this.props;
  
  return(
    <button className="reload" aria-label="Click to get new quote" onClick={() => { fetchQuote(); fetchImages() }} onKeyPress={() => { fetchQuote(); fetchImages() }}>
      <FontAwesomeIcon icon={faRedoAlt}  size="3x" className="reload-icon" id="new-quote" />
    </button>   
  )

}
  
}

Reload.propTypes = {
  fetchQuote: PropTypes.func.isRequired
}

export default Reload;