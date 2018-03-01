const rulesEngine = require('../../common/rulesEngine')
const formRecipe = require('./userSignUp.recipe')
const formRules = require('./userSignUp.rules')

/**
 * Return the form closure
 * @param {object} params
 * @returns {object}
 */
export const userSignupForm = {
  getState: (params = {}) => {
    let rules = [
      formRules.assignParamsToRecipe,
      formRules.validateFieldWithThisValidator,
      formRules.selectFieldDefaultValueIsOneOfValues,
      formRules.validateEmailAndEmailValidateFieldAreEqual,
      formRules.assignFieldPerCustomerType,
      formRules.onlyFrenchCanBeProfessional,
      formRules.removeDisabledField
    ]
    return rulesEngine.process(rules, formRecipe.get(), params)
  }
}
