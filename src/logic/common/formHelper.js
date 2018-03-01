/**
 *
 * @param {*} displayFormState
 */
export function getFormValues (displayFormState) {
  return displayFormState.reduce((accumulator, fieldDisplay) => {
    accumulator[fieldDisplay.id] = fieldDisplay.defaultValue
    return accumulator
  }, {})
}
/**
 *
 * @param {*} displayFormState
 */
export function getFormErrors (displayFormState) {
  return displayFormState.reduce((accumulator, field) => {
    if (field.errors.length > 0) {
      accumulator.push({
        [field.id]: field.errors
      })
    }
    return accumulator
  }, [])
}
