import React, { Component } from 'react'

/**
 * DebugBox component
 */
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

DebugBox.defaultProps = {
  data: {}
}

export default DebugBox
