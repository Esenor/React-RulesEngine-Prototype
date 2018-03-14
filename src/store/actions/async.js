import { resultSignUpForm, pendingSignUpForm } from './sync'

/**
 *
 * @param {*} formResult
 */
export function setFormResultAsync (formResult) {
  return async function (dispatch) {
    dispatch(pendingSignUpForm())
    setTimeout(() => {
      dispatch(resultSignUpForm(formResult))
    }, 500)
  }
}
