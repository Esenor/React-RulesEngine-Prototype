import { ACTIONS_TYPES } from '../index'

/**
 *
 * @param {*} message
 */
export function setMessageInfo (message = '') {
  return {
    type: ACTIONS_TYPES.MESSAGE_INFO_UPDATE,
    payload: {
      message: message
    }
  }
}
