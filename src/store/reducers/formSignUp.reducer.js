import { cloneDeep } from 'lodash'
import formSignUpState from '../states/formSignUp.state.json'
import { ACTIONS_TYPES } from '../actionTypes'
import { userSignupForm } from '../../domain/forms/userSignup.form'
import { formAdapterDomainToDisplay } from '../../common/domainFormAdapter'
import { getFormValues } from '../../common/displayFormHelper'

/**
 *
 */
export default function (state = formSignUpState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.FORM_SIGNUP_INITIALIZE:
      return initializeSignUpForm(state, action)
    case ACTIONS_TYPES.FORM_SIGNUP_UPDATE:
      return updateSignUpForm(state, action)
    default:
      return state
  }
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
