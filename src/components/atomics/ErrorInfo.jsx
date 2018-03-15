import React, { Component } from 'react'

class ErrorInfo extends Component {
  render () {
    return (
      <React.Fragment>
        <ul>
          {this.props.messages.map((message, indice) => {
            return (<li key={indice}>{message}</li>)
          })}
        </ul>
      </React.Fragment>
    )
  }
}

ErrorInfo.defaultProps = {
  messages: []
}

export default ErrorInfo
