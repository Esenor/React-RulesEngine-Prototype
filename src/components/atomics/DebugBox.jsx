import React, { Component } from 'react'

class DebugBox extends Component {
  render () {
    return (
      <React.Fragment>
        <pre>
          {JSON.stringify(this.props.data, 0, 2)}
        </pre>
      </React.Fragment>
    )
  }
}

export default DebugBox
