import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

class Reload extends Component {

render() {
  
  return(
    <button className="reload" aria-label="Click to get new quote" onClick={() => { window.location.reload() }} onKeyPress={() => { window.location.reload() }}>
      <FontAwesomeIcon icon={faRedoAlt}  size="2x" className="reload-icon" id="new-quote" />
    </button>   
  )

}
  
}

export default Reload;