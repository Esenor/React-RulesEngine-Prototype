import React, { Component } from 'react'
import { userSignupForm } from '../../logic/business/forms/userSignup.form'

class Application extends Component {
  constructor (props) {
    super(props)
    this.updateForm = this.updateForm.bind(this)
    this.state = {}
  }

  updateForm (event) {
    event.preventDefault()
    let nextState = (this.state.formFields) ? this.state.formFields : {}
    this.setState({
      formFields: Object.assign(nextState, { [event.target.id]: event.target.value })
    })
  }

  render () {
    let params = this.state.formFields
    //
    let userSignupState = userSignupForm.getState(params).getDataObject()
    //
    return (
      <div className="App">
        <form>
          { formDOMized(userSignupState, this) }
        </form>
      </div>
    )
  }
}

export default Application

function formDOMized (formState, that = null) {
  //
  let sortedFieldsId = Object.keys(formState.fields).sort((itemA, itemB) => {
    return formState.fields[itemA].weight - formState.fields[itemB].weight
  })
  //
  let fieldsDOMized = sortedFieldsId.map((fieldId) => {
    let field = formHelper.getField(formState, fieldId)
    let errors = (field.errors.length > 0) ? (<small className="error">{field.errors.join(', ')}</small>) : null
    switch (field.type) {
      case 'text':
        return (
          <div>
            <p>{field.label}</p>
            <input type="text" id={fieldId} name={fieldId} key={fieldId} defaultValue={field.defaultValue} onChange={that.updateForm}/>
            { errors }
          </div>
        )
      case 'select':
        return (
          <div>
            <p>{field.label}</p>
            <select id={fieldId} name={fieldId} key={fieldId} defaultValue={field.defaultValue} onChange={that.updateForm}>
              {formHelper.getSelectDOMized(field)}
            </select>
            { errors }
          </div >
        )
      default:
        return (
          <div>
            <p>{field.label}</p>
            <input type="text" id={fieldId} name={fieldId} key={fieldId} defaultValue={field.defaultValue} onChange={that.updateForm}/>
            { errors }
          </div>
        )
    }
  })
  //
  return fieldsDOMized
}

const formHelper = {
  getField: (formState, fieldId) => {
    return formState.fields[fieldId]
  },
  getSelectDOMized: (field) => {
    return field.values.map((value) => {
      return (<option key={value.id} value={value.id} >{value.label}</option>)
    })
  }
}
