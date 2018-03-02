import { ACTIONS_TYPES } from '../index'

/**
 *
 * @param {*} message
 */
export function updateSignUpForm (fieldId, fieldValue) {
  return {
    type: ACTIONS_TYPES.FORM_SIGNUP_UPDATE,
    payload: {
      field: { [fieldId]: fieldValue }
    }
  }
}

/**
 *
 */
export function initializeSignUpForm () {
  return {
    type: ACTIONS_TYPES.FORM_SIGNUP_INITIALIZE,
    payload: null
  }
}

/**
 *
 */
export function resultSignUpForm (result) {
  return {
    type: ACTIONS_TYPES.FORM_SIGNUP_RESULT,
    payload: {
      result: result
    }
  }
}
