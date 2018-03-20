import lodash from 'lodash'

/**
 * Return the input values of a display form
 * @param {object} displayFormState
 */
export function getFormValues (displayFormState = []) {
  return displayFormState.reduce((accumulator, fieldDisplay) => {
    accumulator[fieldDisplay.id] = fieldDisplay.defaultValue
    return accumulator
  }, {})
}

/**
 * Return the erros of a display form
 * @param {object} displayFormState
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
 * Return the error of the display form in a simple string array
 * @param {object} fieldErrors
 */
export function humanizedFieldError (fieldErrors = []) {
  let humanizedErrors = lodash.cloneDeep(fieldErrors)
  return humanizedErrors.map((error) => {
    return error
  })
}

/**
 * Return a map o the field who had the good category in the metadata
 * @param {object} displayFormState
 * @param {string} categoryType
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
