import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class Reload extends Component {

render() {

  const { fetchQuote, updateColor, randomColor } = this.props;
  
  return(
    <button className="reload" id="new-quote" onClick={updateColor}>
      <FontAwesomeIcon icon={faRedoAlt} onClick={fetchQuote} size="2x" className="reload-icon" style={{background: randomColor}}/>
    </button>
  )

}
  
}

Reload.propTypes = {
  fetchQuote: PropTypes.func.isRequired
}

export default Reload;