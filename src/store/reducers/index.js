import { cloneDeep } from 'lodash'
import initialState from '../initialState.json'
import { ACTIONS_TYPES } from '../'
import { userSignupForm } from '../../domain/forms/userSignup.form'
import { formAdapterDomainToDisplay } from '../../logic/common/formAdapter'
import { getFormValues } from '../../logic/common/formHelper'

/**
 *
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.FORM_SIGNUP_INITIALIZE:
      return initializeSignUpForm(state, action)
    case ACTIONS_TYPES.FORM_SIGNUP_UPDATE:
      return updateSignUpForm(state, action)
    case ACTIONS_TYPES.FORM_SIGNUP_PENDING:
      return pendingSignUpForm(state, action)
    case ACTIONS_TYPES.FORM_SIGNUP_RESULT:
      return resultSignUpForm(state, action)
    case ACTIONS_TYPES.MODAL_CHANGE:
      return modalChangeStatus(state, action)
    default:
      return state
  }
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function pendingSignUpForm (state, action) {
  const newState = cloneDeep(state)
  return Object.assign({}, newState, {
    pending: action.payload.progress
  })
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function resultSignUpForm (state, action) {
  const newState = cloneDeep(state)
  return Object.assign({}, newState, {
    result: action.payload.result
  })
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function initializeSignUpForm (state, action) {
  const newState = cloneDeep(state)
  let initialDisplayForm = formAdapterDomainToDisplay(userSignupForm.getState(action.payload.prefilledValues).getDataObject())
  // Get initial form values
  let userParamsForm = getFormValues(initialDisplayForm)
  //
  return Object.assign({}, newState, {
    formRecipe: initialDisplayForm,
    formValues: userParamsForm,
    formRecipeHistory: [initialDisplayForm],
    formValuesHistory: [userParamsForm]
  })
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function updateSignUpForm (state, action) {
  // Update the state with the event field value
  let newState = cloneDeep(state)
  let formValues = Object.assign({}, newState.formValues, action.payload.field)
  // Get new display form state
  let displayForm = formAdapterDomainToDisplay(userSignupForm.getState(formValues).getDataObject())
  // Get cleaned form values
  let cleanedFormValues = getFormValues(displayForm)
  // update history
  let formRecipeHistory = newState.formRecipeHistory
  formRecipeHistory.push(displayForm)
  let formValuesHistory = newState.formValuesHistory
  formValuesHistory.push(cleanedFormValues)
  // Update state with new form state and cleaned form values
  //
  return Object.assign({}, newState, {
    formRecipe: displayForm,
    formValues: cleanedFormValues,
    formRecipeHistory: formRecipeHistory,
    formValuesHistory: formValuesHistory
  })
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function modalChangeStatus (state, action) {
  let newState = cloneDeep(state)
  let newModalState = Object.assign({}, newState.display.modal, {
    [action.payload.name]: action.payload.status
  })
  return Object.assign({}, newState, { display: { modal: newModalState } })
}
