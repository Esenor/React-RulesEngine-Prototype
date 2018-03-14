import React, { Component } from 'react'

class InputButton extends Component {
  render () {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>{this.props.children}</button>
      </React.Fragment>
    )
  }
}

export default InputButton
