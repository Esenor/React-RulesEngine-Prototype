import { cloneDeep } from 'lodash'
import modalSignUpState from '../states/modalSignUp.state.json'
import { ACTIONS_TYPES } from '../actionTypes'

/**
 *
 */
export default function (state = modalSignUpState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.MODAL_CHANGE:
      return modalChangeStatus(state, action)
    default:
      return state
  }
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function modalChangeStatus (state, action) {
  let newState = cloneDeep(state)
  return Object.assign({}, newState, {
    [action.payload.name]: action.payload.status
  })
}
