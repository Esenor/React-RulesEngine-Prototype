import React, { Component } from 'react'
import { formDOMized, updateForm, finishForm, closeErrorModal, closeSuccessModal, getSubmitButtonStatusParams } from '../logic/ApplicationLogic'
import { getFormErrors } from '../../logic/common/formHelper'
import InputButton from '../atomics/InputButton'
import Modal from '../atomics/Modal'

class Application extends Component {
  constructor (props) {
    super(props)
    this.updateForm = updateForm.bind(this)
    this.finishForm = finishForm.bind(this)
    this.formDOMized = formDOMized.bind(this)
    this.closeSuccessModal = closeSuccessModal.bind(this)
    this.closeErrorModal = closeErrorModal.bind(this)
    this.props.initializeSignUpForm()
  }

  render () {
    let submitButtonParams = getSubmitButtonStatusParams(this.props.pending)
    return (
      <React.Fragment>
        <form>
          {this.formDOMized(this.props.formRecipe) }
          <InputButton className={submitButtonParams.className} onClick={this.finishForm}>{submitButtonParams.label}</InputButton>
        </form>
        <Modal key="Success" title="Success" data={this.props.result} display={this.props.modal.success} onClick={this.closeSuccessModal}/>
        <Modal key="Errors" title="Errors" data={getFormErrors(this.props.formRecipe)} display={this.props.modal.error} onClick={this.closeErrorModal}/>
      </React.Fragment>
    )
  }
}

export default Application
