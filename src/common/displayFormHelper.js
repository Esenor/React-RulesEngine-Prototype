import lodash from 'lodash'

/**
 *
 * @param {*} displayFormState
 */
export function getFormValues (displayFormState = []) {
  return displayFormState.reduce((accumulator, fieldDisplay) => {
    accumulator[fieldDisplay.id] = fieldDisplay.defaultValue
    return accumulator
  }, {})
}

/**
 *
 * @param {*} displayFormState
 */
export function getFormErrors (displayFormState = []) {
  return displayFormState.reduce((accumulator, field) => {
    if (field.errors.length > 0) {
      accumulator.push({
        [field.id]: field.errors
      })
    }
    return accumulator
  }, [])
}

/**
 *
 * @param {*} fieldErrors
 */
export function humanizedFieldError (fieldErrors = []) {
  let humanizedErrors = lodash.cloneDeep(fieldErrors)
  return humanizedErrors.map((error) => {
    return error
  })
}

/**
 *
 * @param {*} displayFormState
 * @param {*} categoryType
 */
export function formAdapterDisplayCategory (displayFormState = [], categoryType) {
  return displayFormState.reduce((accumulator, fieldDisplay) => {
    if (fieldDisplay.metaData.category === categoryType) {
      accumulator.push(fieldDisplay)
    }
    //
    return accumulator
  }, [])
}