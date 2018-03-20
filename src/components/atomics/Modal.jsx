import React, { Component } from 'react'
import DebugBox from './DebugBox'
import InputButton from './InputButton'

/**
 * Modal component
 */
class Modal extends Component {
  render () {
    return (
      <React.Fragment>
        {(this.props.display) ? (
          <div className="modal">
            <div className="modal-content">
              <header>{this.props.title}</header>
              <DebugBox data={this.props.data}/>
              <div className="modal-footer">
                <InputButton onClick={this.props.onClick} className="modal-button">Close</InputButton>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}

Modal.defaultProps = {
  data: {},
  display: true
}

export default Modal
