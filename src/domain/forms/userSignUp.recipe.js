/**
 * Return the recipe
 * @return {object}
 */
module.exports.get = () => {
  return {
    fields: {
      /**
       * ****************************
       * ****************************
       * Field customerType
       */
      customerType: {
        label: 'Customer type',
        enable: true,
        weight: 100,
        type: 'select',
        defaultValue: 'par',
        values: [
          {
            id: 'par',
            label: 'Particular',
            enable: true,
            weight: 100
          },
          {
            id: 'pro',
            label: 'Professional',
            enable: true,
            weight: 200
          },
          {
            id: 'news',
            label: 'Newsletter',
            enable: true,
            weight: 400
          },
          {
            id: 'phone',
            label: 'Callback',
            enable: true,
            weight: 300
          }
        ],
        errors: [],
        metaData: {
          category: 'account'
        }
      },
      /**
       * ****************************
       * ****************************
       * Field country
       */
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
      /**
       * ****************************
       * ****************************
       * Field phone
       */
      phone: {
        label: 'Phone number',
        enable: false,
        weight: 150,
        type: 'mail',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'contact',
          validator: {
            regex: /^([0-9]+)$/,
            message: 'You must have to type a "Phone number"'
          }
        }
      },
      /**
       * ****************************
       * ****************************
       * Field email
       */
      email: {
        label: 'Email',
        enable: true,
        weight: 500,
        type: 'mail',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'contact',
          validator: {
            regex: /^([w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
            message: 'You must have to type an "Email"'
          }
        }
      },
      /**
       * ****************************
       * ****************************
       * Field emailValidate
       */
      emailValidate: {
        label: 'Validate email',
        enable: true,
        weight: 550,
        type: 'mail',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'contact',
          validator: {
            regex: /^([w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
            message: 'You must have to type an "Email"'
          }
        }
      },
      /**
       * ****************************
       * ****************************
       * Field firstName
       */
      firstName: {
        label: 'Name',
        enable: true,
        weight: 200,
        type: 'text',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'personal',
          validator: {
            regex: /^[\D\s]+$/,
            message: 'You must have to type a "Name"'
          }
        }
      },
      /**
       * ****************************
       * ****************************
       * Field lastName
       */
      lastName: {
        label: 'Last Name',
        enable: true,
        weight: 300,
        type: 'text',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'personal',
          validator: {
            regex: /^[\D\s]+$/,
            message: 'You must have to type a "Last Name"'
          }
        }
      },
      /**
       * ****************************
       * ****************************
       * Field socialReason
       */
      socialReason: {
        label: 'Social Reason',
        enable: false,
        weight: 200,
        type: 'text',
        defaultValue: '',
        errors: [],
        metaData: {
          category: 'personal',
          validator: {
            regex: /^[^]+$/,
            message: 'You must have to type a "Social Reason"'
          }
        }
      }
    }
  }
}
