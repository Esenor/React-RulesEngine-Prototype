/**
 * Return the rules
 * @return {[object]}
 */

/** ************************************************************************
 * Assign params to recipe
 */
module.exports.assignParamsToRecipe = (isolatedRecipe, isolatedParams) => {
  Object.keys(isolatedParams).forEach((key) => {
    if (typeof isolatedRecipe.fields[key] !== 'undefined') {
      if (isolatedParams[key] !== null) {
        isolatedRecipe.fields[key].defaultValue = isolatedParams[key]
      }
    }
  })
  return isolatedRecipe
}

/** ************************************************************************
 * Execute the fields validator and add the validator message if the validation failed
 */
module.exports.validateFieldWithThisValidator = (isolatedRecipe) => {
  Object.keys(isolatedRecipe.fields).forEach((key) => {
    if (typeof isolatedRecipe.fields[key].validator !== 'undefined') {
      if (!isolatedRecipe.fields[key].validator.regex.test(isolatedRecipe.fields[key].defaultValue)) {
        isolatedRecipe.fields[key].errors.push(isolatedRecipe.fields[key].validator.message)
      }
    }
  })
  return isolatedRecipe
}

module.exports.validateEmailAndEmailValidateFieldAreEqual = (isolatedRecipe) => {
  if (isolatedRecipe.fields.email.defaultValue !== isolatedRecipe.fields.emailValidate.defaultValue) {
    isolatedRecipe.fields.emailValidate.errors.push('Email need to be the same')
  }
  return isolatedRecipe
}

/** ************************************************************************
 * Select field defaultValue can only have a "values value"
 */
module.exports.selectFieldDefaultValueIsOneOfValues = (isolatedRecipe) => {
  Object.keys(isolatedRecipe.fields).forEach((key) => {
    if (isolatedRecipe.fields[key].type === 'select') {
      if (typeof isolatedRecipe.fields[key].values.find((value) => {
        return isolatedRecipe.fields[key].defaultValue === value.id
      }) === 'undefined') {
        isolatedRecipe.fields[key].errors.push('Choose an existing value')
      }
    }
  })
  return isolatedRecipe
}

/** ************************************************************************
 * Assign field per customerType
 */
module.exports.assignFieldPerCustomerType = (isolatedRecipe) => {
  switch (isolatedRecipe.fields.customerType.defaultValue) {
    case 'par':
      isolatedRecipe.fields.firstName.enable = true
      isolatedRecipe.fields.lastName.enable = true
      isolatedRecipe.fields.socialReason.enable = false
      break
    case 'pro':
      isolatedRecipe.fields.firstName.enable = false
      isolatedRecipe.fields.lastName.enable = false
      isolatedRecipe.fields.socialReason.enable = true
      break
    case 'news':
      isolatedRecipe.fields.firstName.enable = false
      isolatedRecipe.fields.lastName.enable = false
      isolatedRecipe.fields.socialReason.enable = false
      isolatedRecipe.fields.country.enable = false
      isolatedRecipe.fields.emailValidate.enable = false
      break
    case 'phone':
      isolatedRecipe.fields.firstName.enable = false
      isolatedRecipe.fields.lastName.enable = false
      isolatedRecipe.fields.socialReason.enable = false
      isolatedRecipe.fields.country.enable = false
      isolatedRecipe.fields.email.enable = false
      isolatedRecipe.fields.emailValidate.enable = false
      isolatedRecipe.fields.phone.enable = true
      break
  }
  return isolatedRecipe
}

/** ************************************************************************
 * Only French customer can be professional
 */
module.exports.onlyFrenchCanBeProfessional = (isolatedRecipe) => {
  if (isolatedRecipe.fields.country.defaultValue !== 'fr' && isolatedRecipe.fields.customerType.defaultValue === 'pro') {
    isolatedRecipe.fields.customerType.errors.push('Only a french customer can be a professional')
  }
  return isolatedRecipe
}

/** ************************************************************************
 * Remove all disabled fields
 */
module.exports.removeDisabledField = (isolatedRecipe) => {
  Object.keys(isolatedRecipe.fields).forEach((key) => {
    if (isolatedRecipe.fields[key].enable === false) {
      delete isolatedRecipe.fields[key]
    }
  })
  return isolatedRecipe
}
