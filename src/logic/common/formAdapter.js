export function formAdapterLogicToDisplay (formLogicState) {
  return Object.keys(formLogicState.fields).reduce((accumulator, fieldId) => {
    let fieldLogic = formLogicState.fields[fieldId]
    // Adapter
    let fieldDisplay = {
      id: fieldId,
      label: fieldLogic.label,
      weight: fieldLogic.weight,
      type: fieldLogic.type,
      defaultValue: fieldLogic.defaultValue,
      values: fieldLogic.values,
      errors: fieldLogic.errors,
      metaData: fieldLogic.metaData
    }
    //
    accumulator.push(fieldDisplay)
    //
    return accumulator
  }, [])
}

export function formAdapterDisplayCategory (formDisplayState, categoryType) {
  return formDisplayState.reduce((accumulator, fieldDisplay) => {
    if (fieldDisplay.metaData.category === categoryType) {
      accumulator.push(fieldDisplay)
    }
    //
    return accumulator
  }, [])
}
