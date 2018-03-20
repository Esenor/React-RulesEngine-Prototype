import { resultSignUpForm, pendingSignUpForm, modalChangeStatus } from './sync'

/**
 * Fake API call to send the form input values
 * @param {object} formResult
 */
export function setFormResultAsync (formResult) {
  return async function (dispatch) {
    dispatch(resultSignUpForm(null))
    for (let i = 0; i <= 3; i++) {
      setTimeout(() => {
        dispatch(pendingSignUpForm(i))
        if (i === 3) {
          dispatch(resultSignUpForm(formResult))
          dispatch(modalChangeStatus('success', true))
        }
      }, 700 * i)
    }
  }
}
