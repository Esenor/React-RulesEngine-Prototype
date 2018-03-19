export function formAdapterDomainToDisplay (formDomainState) {
  return Object.keys(formDomainState.fields).reduce((translatedForm, fieldId) => {
    let fieldDomain = formDomainState.fields[fieldId]
    // Adapter
    let fieldDisplay = {
      id: fieldId,
      label: fieldDomain.label,
      weight: fieldDomain.weight,
      type: fieldDomain.type,
      defaultValue: fieldDomain.defaultValue,
      values: fieldDomain.values,
      errors: fieldDomain.errors,
      metaData: fieldDomain.metaData
    }
    //
    translatedForm.push(fieldDisplay)
    //
    return translatedForm
  }, [])
}
