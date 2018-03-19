import { cloneDeep } from 'lodash'
import statusSignUpState from '../states/statusSignUp.state.json'
import { ACTIONS_TYPES } from '../actionTypes'

/**
 *
 */
export default function (state = statusSignUpState, action) {
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
