import React, { Component } from 'react'
import util from 'util'

class DebugBox extends Component {
  render () {
    return (
      <React.Fragment>
        <pre>
          {util.inspect(this.props.data, false, null)}
        </pre>
      </React.Fragment>
    )
  }
}

export default DebugBox
