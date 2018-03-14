import { ACTIONS_TYPES } from '../index'
import { PREFILLED_VALUES_SIGN_UP } from '../../logic/business/humanize/defaultConfiguration'

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
    payload: {
      prefilledValues: PREFILLED_VALUES_SIGN_UP
    }
  }
}

/**
 *
 */
export function pendingSignUpForm () {
  return {
    type: ACTIONS_TYPES.FORM_SIGNUP_PENDING,
    payload: {
      result: null
    }
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
