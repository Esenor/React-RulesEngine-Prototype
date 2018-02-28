import initialState from '../initialState.json'
import { ACTIONS_TYPES } from '../'

/**
 *
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.MESSAGE_INFO_UPDATE:
      return updateMessageInfo(state, action)
    default:
      return state
  }
}

/**
 *
 * @param {*} state
 * @param {*} difference
 */
function updateState (state, difference) {
  return Object.assign({}, state, difference)
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function updateMessageInfo (state, action) {
  let difference = {
    message: {
      info: action.payload.message
    }
  }

  let nexState = updateState(state, difference)

  return nexState
}
