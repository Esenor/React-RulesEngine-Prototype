import { cloneDeep } from 'lodash'
import statusSignUpState from '../states/statusSignUp.state'
import { ACTIONS_TYPES } from '../actionTypes'

/**
 * Return the reducer function
 */
export default function (state = statusSignUpState.getInitialState(), action) {
  switch (action.type) {
    case ACTIONS_TYPES.FORM_SIGNUP_PENDING:
      return pendingSignUpForm(state, action)
    case ACTIONS_TYPES.FORM_SIGNUP_RESULT:
      return resultSignUpForm(state, action)
    default:
      return state
  }
}

/**
 * Update the pending state in the state
 * @param {object} state
 * @param {object} action
 */
function pendingSignUpForm (state, action) {
  const newState = cloneDeep(state)
  return Object.assign({}, newState, {
    pending: action.payload.progress
  })
}

/**
 * Add the result of the display form in the state
 * @param {object} state
 * @param {object} action
 */
function resultSignUpForm (state, action) {
  const newState = cloneDeep(state)
  return Object.assign({}, newState, {
    result: action.payload.result
  })
}
