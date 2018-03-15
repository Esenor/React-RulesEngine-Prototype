import React, { Component } from 'react'
import applicationDisplay from '../../logic/display/applicationDisplay'
import { getFormErrors } from '../../logic/common/formHelper'
import InputButton from '../atomics/InputButton'
import Modal from '../atomics/Modal'

class Application extends Component {
  constructor (props) {
    super(props)
    // Bind methods
    this.updateForm = this.updateForm.bind(this)
    this.finishForm = this.finishForm.bind(this)
    this.props.initializeSignUpForm()
    console.log(this.props)
  }

  updateForm (event) {
    this.props.updateSignUpForm(event.target.id, event.target.value)
    console.log(this.props)
  }

  finishForm (event) {
    event.preventDefault()
    let formErrors = getFormErrors(this.props.formRecipe)
    if (formErrors.length > 0) {
      this.props.modalChangeStatus('error', true)
    } else {
      this.props.modalChangeStatus('error', false)
      this.props.setResultAsync(this.props.formValues)
    }
    console.log(this.props)
  }

  render () {
    //
    let buttonClasseName = null
    let buttonLabelText = 'Send form async (2800ms)'
    //
    switch (this.props.pending) {
      case 0:
        buttonLabelText = '(1/3) Fetch form ...'
        buttonClasseName = 'buttonPending'
        break
      case 1:
        buttonLabelText = '(2/3) Call server ...'
        buttonClasseName = 'buttonPending'
        break
      case 2:
        buttonLabelText = '(3/3) Fetch result ...'
        buttonClasseName = 'buttonPending'
        break
    }
    //
    let closeErrorModal = () => { this.props.modalChangeStatus('error', false) }
    let closeSuccessModal = () => { this.props.modalChangeStatus('success', false) }
    //
    return (
      <React.Fragment>
        <form>
          {applicationDisplay.get(this).formDOMized(this.props.formRecipe) }
          <InputButton className={buttonClasseName} onClick={this.finishForm}>{buttonLabelText}</InputButton>
        </form>
        <Modal key="Success" title="Success" data={this.props.result} display={this.props.modal.success} onClick={closeSuccessModal}/>
        <Modal key="Errors" title="Errors" data={getFormErrors(this.props.formRecipe)} display={this.props.modal.error} onClick={closeErrorModal}/>
      </React.Fragment>
    )
  }
}

export default Application
