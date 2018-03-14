import React, { Component } from 'react'
import applicationDisplay from '../../logic/display/applicationDisplay'
import { getFormErrors } from '../../logic/common/formHelper'
import InputButton from '../atomics/InputButton'
import DebugBox from '../atomics/DebugBox'

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
      window.alert(JSON.stringify(formErrors, null, 2))
    } else {
      this.props.setResultAsync(this.props.formValues)
    }
    console.log(this.props)
  }

  render () {
    //
    return (
      <React.Fragment>
        <div className="container">
          <form>
            {applicationDisplay.get(this).formDOMized(this.props.formRecipe) }
            <InputButton onClick={this.finishForm}>{(this.props.pending) ? 'Pending ...' : 'Send form async (500ms)'}</InputButton>
          </form>
          <DebugBox data={this.props.result} />
        </div>
      </React.Fragment>
    )
  }
}

export default Application
