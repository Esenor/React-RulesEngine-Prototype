import React, { Component } from 'react'
import { getDOMizedForm, updateForm, finishForm, closeErrorModal, closeSuccessModal, getSubmitButtonStatusParams } from '../logic/signUpFormLogic'
import { getFormErrors } from '../../common/displayFormHelper'
import InputButton from '../atomics/InputButton'
import Modal from '../atomics/Modal'

/**
 * SignUpForm component
 */
class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.updateForm = updateForm.bind(this)
    this.finishForm = finishForm.bind(this)
    this.getDOMizedForm = getDOMizedForm.bind(this)
    this.closeSuccessModal = closeSuccessModal.bind(this)
    this.closeErrorModal = closeErrorModal.bind(this)
    this.props.initializeSignUpForm()
  }

  render () {
    let submitButtonParams = getSubmitButtonStatusParams(this.props.pending)
    return (
      <React.Fragment>
        <article className={this.props.className}>
          <form>
            {this.getDOMizedForm(this.props.formRecipe)}
            <InputButton className={submitButtonParams.className} onClick={this.finishForm}>{submitButtonParams.label}</InputButton>
          </form>
          <InputButton className="button-alt" onClick={this.props.onReturn}>Return to presignup</InputButton>
        </article>
        <Modal key="Success" title="Success" data={this.props.result} display={this.props.modal.success} onClick={this.closeSuccessModal} />
        <Modal key="Errors" title="Errors" data={getFormErrors(this.props.formRecipe)} display={this.props.modal.error} onClick={this.closeErrorModal} />
      </React.Fragment>
    )
  }
}

export default SignUpForm
