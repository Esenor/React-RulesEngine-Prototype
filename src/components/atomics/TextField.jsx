import React, { Component } from 'react'

class TextField extends Component {
  render () {
    return (
      <React.Fragment>
        <input
          type="text"
          id={this.props.id}
          name={this.props.id}
          key={this.props.id}
          className={(this.props.isOnError) ? 'error_field' : null}
          defaultValue={this.props.defaultValue}
          onChange={this.props.onChange}
        />
      </React.Fragment>
    )
  }
}

TextField.defaultProps = {
  id: null,
  isOnError: false,
  defaultValue: '',
  onChange: null
}

export default TextField
