import React from 'react'
import lodash from 'lodash'
import { formAdapterDisplayCategory, humanizedFieldError, getFormErrors } from '../../logic/common/formHelper'
import { byWeight } from '../../logic/common/common'
import CategoryTitle from '../atomics/CategoryTitle'
import TextField from '../atomics/TextField'
import SelectField from '../atomics/SelectField'
import ErrorInfo from '../atomics/ErrorInfo'

const METADATA_CATEGORY_ACCOUNT = 'account'
const METADATA_CATEGORY_CONTACT = 'contact'
const METADATA_CATEGORY_PERSONAL = 'personal'

/* ********************************************************************** */
/* *** Exported methods                                              **** */
/* ********************************************************************** */

/**
 *
 * @param {*} displayFormState
 */
export function getDOMizedForm (displayFormState = []) {
  //
  this.categoryDOMized = categoryDOMized.bind(this)
  //
  const accountFormCategory = formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_ACCOUNT)
  const contactFormCategory = formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_CONTACT)
  const personalFormCategory = formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_PERSONAL)
  //
  return (
    <React.Fragment>
      {this.categoryDOMized(accountFormCategory.sort(byWeight), 'ACCOUNT')}
      {this.categoryDOMized(personalFormCategory.sort(byWeight), 'PERSONAL')}
      {this.categoryDOMized(contactFormCategory.sort(byWeight), 'CONTACT')}
    </React.Fragment>
  )
}

/**
 *
 * @param {*} event
 */
export function updateForm (event) {
  this.props.updateSignUpForm(event.target.id, event.target.value)
}

/**
 *
 * @param {*} event
 */
export function finishForm (event) {
  event.preventDefault()
  let formErrors = getFormErrors(this.props.formRecipe)
  if (formErrors.length > 0) {
    this.props.modalChangeStatus('error', true)
  } else {
    this.props.modalChangeStatus('error', false)
    this.props.setResultAsync(this.props.formValues)
  }
}

/**
 *
 */
export function closeErrorModal () {
  this.props.modalChangeStatus('error', false)
}

/**
 *
 */
export function closeSuccessModal () {
  this.props.modalChangeStatus('success', false)
}

/**
 *
 * @param {*} status
 */
export function getSubmitButtonStatusParams (status) {
  switch (status) {
    case 0:
      return {
        label: '(1/3) Fetch form ...',
        className: 'buttonPending'
      }
    case 1:
      return {
        label: '(2/3) Call server ...',
        className: 'buttonPending'
      }
    case 2:
      return {
        label: '(3/3) Fetch result ...',
        className: 'buttonPending'
      }
    default:
      return {
        className: null,
        label: 'Send form async (2800ms)'
      }
  }
}

/* ********************************************************************** */
/* *** Local methods                                                 **** */
/* ********************************************************************** */

/**
 *
 * @param {*} categoryField
 * @param {*} categoryTitle
 */
function categoryDOMized (categoryFields, categoryTitle) {
  //
  this.fieldsDOMized = fieldsDOMized.bind(this)
  //
  if (categoryFields.length > 0) {
    return (
      <section>
        <CategoryTitle>{categoryTitle}</CategoryTitle>
        {this.fieldsDOMized(categoryFields.sort(byWeight))}
      </section>
    )
  } else {
    return null
  }
}

/**
 *
 * @param {*} sortedFields
 */
function fieldsDOMized (sortedFields) {
  return sortedFields.map((field) => {
    //
    switch (field.type) {
      case 'text':
        return (
          <div key={`wrapper_${field.id}`}>
            <p>{field.label}</p>
            <TextField id={field.id} isOnError={(field.errors.length > 0)} defaultValue={field.defaultValue} onChange={this.updateForm} />
            {(field.errors.length > 0) ? (<ErrorInfo messages={humanizedFieldError(field.errors)} />) : null}
          </div>
        )
      case 'select':
        return (
          <div key={`wrapper_${field.id}`}>
            <p>{field.label}</p>
            <SelectField id={field.id} isOnError={(field.errors.length > 0)} defaultValue={field.defaultValue} values={field.values.sort(byWeight)} onChange={this.updateForm} />
            {(field.errors.length > 0) ? (<ErrorInfo messages={humanizedFieldError(field.errors)} />) : null}
          </div >
        )
      default:
        return (
          <div key={`wrapper_${field.id}`}>
            <p>{field.label}</p>
            <TextField id={field.id} isOnError={(field.errors.length > 0)} defaultValue={field.defaultValue} onChange={this.updateForm} />
            {(field.errors.length > 0) ? (<ErrorInfo messages={humanizedFieldError(field.errors)} />) : null}
          </div>
        )
    }
  })
}
