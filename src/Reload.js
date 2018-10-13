import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class Reload extends Component {

render() {

  const { fetchQuote } = this.props;
  
  return(
    <button className="reload" id="new-quote">
      <FontAwesomeIcon icon={faRedoAlt} onClick={fetchQuote} size="2x" className="reload-icon" />
    </button>
  )

}
  
}

Reload.propTypes = {
  fetchQuote: PropTypes.func.isRequired
}

export default Reload;