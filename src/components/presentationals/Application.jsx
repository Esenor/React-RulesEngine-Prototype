import React, { Component } from 'react'
import { userSignupForm } from '../../logic/business/forms/userSignup.form'
import { formAdapterLogicToDisplay } from '../../logic/common/formAdapter'
import formHelper from '../../logic/display/formHelper'

class Application extends Component {
  constructor (props) {
    super(props)
    this.updateForm = this.updateForm.bind(this)
    this.finishForm = this.finishForm.bind(this)

    let initialDisplayForm = formAdapterLogicToDisplay(userSignupForm.getState({}).getDataObject())
    let userParamsForm = initialDisplayForm.reduce((accumulator, fieldDisplay) => {
      accumulator[fieldDisplay.id] = fieldDisplay.defaultValue
      return accumulator
    }, {})

    this.state = {
      formRecipe: initialDisplayForm,
      formValues: userParamsForm
    }
  }

  updateForm (event) {
    let state = (this.state.formValues) ? this.state.formValues : {}
    let formValues = Object.assign(state, { [event.target.id]: event.target.value })

    let displayForm = formAdapterLogicToDisplay(userSignupForm.getState(formValues).getDataObject())

    let cleanedFormValues = displayForm.reduce((accumulator, fieldDisplay) => {
      accumulator[fieldDisplay.id] = fieldDisplay.defaultValue
      return accumulator
    }, {})

    this.setState({
      formRecipe: displayForm,
      formValues: cleanedFormValues
    })
  }

  finishForm (event) {
    event.preventDefault()
    window.alert(JSON.stringify(this.state.formValues, null, 2))
  }

  render () {
    //
    return (
      <div className="App">
        <form>
          {formHelper.get(this).formDOMized(this.state.formRecipe) }
          <button onClick={this.finishForm}>Send</button>
        </form>
      </div>
    )
  }
}

export default Application
