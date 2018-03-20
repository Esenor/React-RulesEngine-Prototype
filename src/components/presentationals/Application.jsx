import React, { Component } from 'react'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import PreSignUp from './PreSignUp'

/**
 * Application component
 */
class Application extends Component {
  constructor (props) {
    super(props)
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.state = {
      formEnable: false
    }
  }

  openForm () {
    this.setState({
      formEnable: true
    })
  }

  closeForm () {
    this.setState({
      formEnable: false
    })
  }

  render () {
    return (
      <React.Fragment>
        {(this.state.formEnable) ? (
          <SignUpFormContainer onReturn={this.closeForm} />
        ) : (
          <PreSignUp onClick={this.openForm} />
        )}
      </React.Fragment>
    )
  }
}

export default Application
