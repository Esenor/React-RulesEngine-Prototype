import { ACTIONS_TYPES } from '../actionTypes'

/**
 * Return a updateSignUpForm action
 * @param {string} fieldId
 * @param {mixed} fieldValue
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
 * Return a initializeSignUpForm action
 */
export function initializeSignUpForm () {
  return {
    type: ACTIONS_TYPES.FORM_SIGNUP_INITIALIZE,
    payload: {
      prefilledValues: {
        customerType: 'par',
        country: 'fr',
        email: 'loremipsum@gmail.com',
        emailValidate: 'loremipsum@gmail.com',
        firstName: 'a first name',
        lastName: 'a last name'
      }
    }
  }
}

/**
 * Return a pendingSignUpForm action
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
 * Return a resultSignUpForm action
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
 * return a modalChangeStatus action
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
