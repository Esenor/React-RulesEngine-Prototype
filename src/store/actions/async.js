import { setMessageInfo } from './sync'

/**
 *
 */
export function getRandomQuote () {
  return async function (dispatch) {
    setTimeout(() => {
      dispatch(setMessageInfo('Ready to use!'))
    }, 1500)
  }
}
