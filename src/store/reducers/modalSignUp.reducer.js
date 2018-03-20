import { cloneDeep } from 'lodash'
import modalSignUpState from '../states/modalSignUp.state'
import { ACTIONS_TYPES } from '../actionTypes'

/**
 * Return the reducer function
 */
export default function (state = modalSignUpState.getInitialState(), action) {
  switch (action.type) {
    case ACTIONS_TYPES.MODAL_CHANGE:
      return modalChangeStatus(state, action)
    default:
      return state
  }
}

/**
 * Change the state of a modal in state
 * @param {object} state
 * @param {object} action
 */
function modalChangeStatus (state, action) {
  let newState = cloneDeep(state)
  return Object.assign({}, newState, {
    [action.payload.name]: action.payload.status
  })
}
