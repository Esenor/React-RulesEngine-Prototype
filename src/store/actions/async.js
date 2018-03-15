import { resultSignUpForm, pendingSignUpForm, updateSignUpForm } from './sync'

/**
 *
 * @param {*} formResult
 */
export function setFormResultAsync (formResult) {
  return async function (dispatch) {
    for (let i = 0; i <= 3; i++) {
      setTimeout(() => {
        dispatch(pendingSignUpForm(i))
      }, 700 * i)
      if (i === 3) {
        dispatch(resultSignUpForm(formResult))
      }
    }
  }
}

/**
 *
 * @param {*} fieldId
 * @param {*} fieldValue
 */
export function validateFormAsync (fieldId, fieldValue) {
  return async function (dispatch) {
    dispatch(pendingSignUpForm(0))
    setTimeout(() => {
      dispatch(pendingSignUpForm(2))
    }, 700)
    setTimeout(() => {
      dispatch(pendingSignUpForm(3))
      dispatch(updateSignUpForm(fieldId, fieldValue))
    }, 1400)
  }
}
