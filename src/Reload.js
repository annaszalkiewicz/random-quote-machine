import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

class Reload extends Component {

render() {
  
  return(
    <div className="reload">
      <FontAwesomeIcon icon={faRedoAlt} />
    </div>
  )

}
  
}

export default Reload;