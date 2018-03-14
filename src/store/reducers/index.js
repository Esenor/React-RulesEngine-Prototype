import { cloneDeep } from 'lodash'
import initialState from '../initialState.json'
import { ACTIONS_TYPES } from '../'
import { userSignupForm } from '../../logic/business/forms/userSignup.form'
import { formAdapterLogicToDisplay } from '../../logic/common/formAdapter'
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
    default:
      return state
  }
}

function pendingSignUpForm (state, action) {
  const newState = cloneDeep(state)
  return Object.assign({}, newState, {
    pending: true
  })
}

function resultSignUpForm (state, action) {
  const newState = cloneDeep(state)
  return Object.assign({}, newState, {
    result: action.payload.result,
    pending: false
  })
}

function initializeSignUpForm (state, action) {
  const newState = cloneDeep(state)
  let initialDisplayForm = formAdapterLogicToDisplay(userSignupForm.getState(action.payload.prefilledValues).getDataObject())
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

function updateSignUpForm (state, action) {
  // Update the state with the event field value
  let newState = cloneDeep(state)
  let formValues = Object.assign({}, newState.formValues, action.payload.field)
  // Get new display form state
  let displayForm = formAdapterLogicToDisplay(userSignupForm.getState(formValues).getDataObject())
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
