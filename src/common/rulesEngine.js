const { cloneDeep } = require('lodash')

/**
 * Rules engine closure
 * @param {[function]} rules
 * @param {object} dataObject
 * @param {object} params
 */
module.exports.process = (rules = [], dataObject = {}, params = {}) => {
  /**
   * Validate the "rules" structure
   * @param {[function]} rules
   */
  const rulesStructureValidator = (rules) => {
    if (Array.isArray(rules)) {
      rules.forEach((rule) => {
        if (typeof rule !== 'function') {
          throw new Error('Rule must be a function')
        }
      })
    } else {
      throw new Error('Rules must be an array of function')
    }
  }

  /**
   * Validate the "dataObject" structure
   * @param {object} dataObject
   */
  const dataObjectStructureValidator = (dataObject) => {
    if (typeof dataObject !== 'object') {
      throw new Error('dataObject must be a object')
    }
  }

  /**
   * Validate the rules engine process
   */
  try {
    rulesStructureValidator(rules)
    dataObjectStructureValidator(dataObject)
  } catch (error) {
    throw error
  }

  /**
   * Return a closure with isolated data
   */
  return {
    /**
     * Return the form processed in an isolated object
     * @return {object}
     */
    getDataObject: () => {
      return rules.reduce((isolatedDataObject, rule) => {
        return rule(isolatedDataObject, cloneDeep(params))
      }, cloneDeep(dataObject))
    },
    /**
     * Return the form params in an isolated object
     * @return {object}
     */
    getParams: () => {
      return cloneDeep(params)
    }
  }
}
