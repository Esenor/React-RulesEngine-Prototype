import React, { Component } from 'react'

/**
 * InputButton component
 */
class InputButton extends Component {
  render () {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick} className={this.props.className}>{this.props.children}</button>
      </React.Fragment>
    )
  }
}

InputButton.defaultProps = {
  onClick: () => {},
  className: null
}

export default InputButton
