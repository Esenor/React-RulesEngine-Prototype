import React, { Component } from 'react'
import applicationDisplay from '../../logic/display/applicationDisplay'
import { getFormErrors } from '../../logic/common/formHelper'

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
        <article className="App">
          <form>
            {applicationDisplay.get(this).formDOMized(this.props.formRecipe) }
            <button onClick={this.finishForm}>Send form async (500ms)</button>
          </form>
        </article>
        <article><pre>{JSON.stringify(this.props.result, null, 2)}</pre></article>
      </React.Fragment>
    )
  }
}

export default Application
