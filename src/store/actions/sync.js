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
