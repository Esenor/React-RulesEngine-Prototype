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
        errors: [],
        metaData: {
          category: 'account'
        }
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
        errors: [],
        metaData: {
          category: 'personal'
        }
      },
      email: {
        label: 'Email',
        enable: true,
        weight: 150,
        type: 'mail',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'contact'
        },
        validator: {
          regex: /^([w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
          message: 'You must have to type an "Email"'
        }
      },
      emailValidate: {
        label: 'Validate email',
        enable: true,
        weight: 160,
        type: 'mail',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'contact'
        },
        validator: {
          regex: /^([w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
          message: 'You must have to type an "Email"'
        }
      },
      firstName: {
        label: 'Name',
        enable: true,
        weight: 200,
        type: 'text',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'personal'
        },
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
        metaData: {
          category: 'personal'
        },
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
        metaData: {
          category: 'personal'
        },
        validator: {
          regex: /^[^]+$/,
          message: 'You must have to type a "Social Reason"'
        }
      }
    }
  }
}
