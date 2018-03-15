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
export function pendingSignUpForm (progress = 0) {
  return {
    type: ACTIONS_TYPES.FORM_SIGNUP_PENDING,
    payload: {
      progress: progress
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

/**
 *
 */
export function modalChangeStatus (name, status = false) {
  return {
    type: ACTIONS_TYPES.MODAL_CHANGE,
    payload: {
      name: name,
      status: status
    }
  }
}
