import { resultSignUpForm } from './sync'

/**
 *
 * @param {*} formResult
 */
export function setFormResultAsync (formResult) {
  return async function (dispatch) {
    setTimeout(() => {
      dispatch(resultSignUpForm(formResult))
    }, 500)
  }
}
