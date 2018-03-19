import React, { Component } from 'react'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import PreSignUp from './PreSignUp'

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
        <PreSignUp className={(this.state.formEnable) ? 'hide' : null} onClick={this.openForm} />
        <SignUpFormContainer className={(this.state.formEnable) ? null : 'hide'} onReturn={this.closeForm} />
      </React.Fragment>
    )
  }
}

export default Application
