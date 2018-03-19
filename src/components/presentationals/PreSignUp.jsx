import React, { Component } from 'react'
import InputButton from '../atomics/InputButton'

class PreSignUp extends Component {
  render () {
    return (
      <React.Fragment>
        <article className={this.props.className}>
          <header>
            <h1>Pre sign-up</h1>
          </header>
          <InputButton onClick={this.props.onClick}>Signup account</InputButton>
        </article>
      </React.Fragment>
    )
  }
}

export default PreSignUp
