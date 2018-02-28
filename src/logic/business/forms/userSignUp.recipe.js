/**
 * Return the recipe
 * @return {object}
 */
module.exports.get = () => {
  return {
    fields: {
      customerType: {
        label: 'Customer type',
        enable: true,
        weight: 100,
        type: 'select',
        defaultValue: 'par',
        values: [
          {
            id: 'par',
            label: 'particular',
            enable: true,
            weight: 100
          },
          {
            id: 'pro',
            label: 'Professional',
            enable: true,
            weight: 200
          }
        ],
        errors: []
      },
      country: {
        label: 'Country',
        enable: true,
        weight: 1000,
        type: 'select',
        defaultValue: 'fr',
        values: [
          {
            id: 'fr',
            label: 'France',
            enable: true,
            weight: 100
          },
          {
            id: 'uk',
            label: 'United Kingdom',
            enable: true,
            weight: 200
          }
        ],
        errors: []
      },
      firstName: {
        label: 'Name',
        enable: true,
        weight: 200,
        type: 'text',
        defaultValue: '',
        errors: [],
        validator: {
          regex: /^[\D\s]+$/,
          message: 'You must have to type a "Name"'
        }
      },
      lastName: {
        label: 'Last Name',
        enable: true,
        weight: 300,
        type: 'text',
        defaultValue: '',
        errors: [],
        validator: {
          regex: /^[\D\s]+$/,
          message: 'You must have to type a "Last Name"'
        }
      },
      socialReason: {
        label: 'Social Reason',
        enable: false,
        weight: 200,
        type: 'text',
        defaultValue: '',
        errors: [],
        validator: {
          regex: /^[^]+$/,
          message: 'You must have to type a "Social Reason"'
        }
      }
    }
  }
}
