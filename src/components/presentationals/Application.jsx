import React, { Component } from 'react'
import { userSignupForm } from '../../logic/business/forms/userSignup.form'
import { formAdapterLogicToDisplay } from '../../logic/common/formAdapter'
import formHelper from '../../logic/display/formHelper'
import { cloneDeep } from 'lodash'

class Application extends Component {
  constructor (props) {
    super(props)
    // Bind methods
    this.updateForm = this.updateForm.bind(this)
    this.finishForm = this.finishForm.bind(this)
    // Get initial display form
    let initialDisplayForm = formAdapterLogicToDisplay(userSignupForm.getState({}).getDataObject())
    // Get initial form values
    let userParamsForm = formHelper.get(this).getFormValues(initialDisplayForm)
    // Set initial state
    this.state = {
      formRecipe: initialDisplayForm,
      formValues: userParamsForm,
      formRecipeHistory: [initialDisplayForm],
      formValuesHistory: [userParamsForm],
      result: {}
    }
    console.log(this.state)
  }

  updateForm (event) {
    // Update the state with the event field value
    const newState = cloneDeep(this.state)
    let formValues = Object.assign({}, newState.formValues, { [event.target.id]: event.target.value })
    // Get new display form state
    let displayForm = formAdapterLogicToDisplay(userSignupForm.getState(formValues).getDataObject())
    // Get cleaned form values
    let cleanedFormValues = formHelper.get(this).getFormValues(displayForm)
    // update history
    let formRecipeHistory = newState.formRecipeHistory
    formRecipeHistory.push(displayForm)
    let formValuesHistory = newState.formValuesHistory
    formValuesHistory.push(cleanedFormValues)
    // Update state with new form state and cleaned form values
    this.setState({
      formRecipe: displayForm,
      formValues: cleanedFormValues,
      formRecipeHistory: formRecipeHistory,
      formValuesHistory: formValuesHistory,
      result: {}
    })
    console.log(newState)
  }

  finishForm (event) {
    event.preventDefault()
    this.setState({
      result: {
        values: this.state.formValues,
        errors: formHelper.get(this).getFormErrors(this.state.formRecipe)
      }
    })
  }

  render () {
    //
    return (
      <React.Fragment>
        <article className="App">
          <form>
            {formHelper.get(this).formDOMized(this.state.formRecipe) }
            <button onClick={this.finishForm}>Send form</button>
          </form>
        </article>
        <article><pre>{JSON.stringify(this.state.result, null, 2)}</pre></article>
      </React.Fragment>
    )
  }
}

export default Application
