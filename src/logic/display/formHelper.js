import React from 'react'
import { formAdapterDisplayCategory } from '../common/formAdapter'
import { byWeight } from '../common/common'

export default {
  get (that) {
    return {
      getFormValues: (displayFormState) => {
        return displayFormState.reduce((accumulator, fieldDisplay) => {
          accumulator[fieldDisplay.id] = fieldDisplay.defaultValue
          return accumulator
        }, {})
      },
      getFormErrors: (displayFormState) => {
        return displayFormState.reduce((accumulator, field) => {
          if (field.errors.length > 0) {
            accumulator.push({[field.id]: field.errors})
          }
          return accumulator
        }, [])
      },
      /**
       *
       */
      selectOptionDOMized: (field) => {
        return field.values.sort(byWeight).map((value) => {
          return (<option key={value.id} value={value.id} >{value.label}</option>)
        })
      },
      /**
       *
       */
      errorDOMized: (field) => {
        if (field.errors.length > 0) {
          let errorsDOMized = field.errors.map((error, indice) => {
            return (<li className="error" key={indice}>{error}</li>)
          })
          return (<ul>{errorsDOMized}</ul>)
        } else {
          return null
        }
      },
      /**
       *
       */
      formDOMized: (displayFormState) => {
        //
        const METADATA_CATEGORY_ACCOUNT = 'account'
        const METADATA_CATEGORY_CONTACT = 'contact'
        const METADATA_CATEGORY_PERSONAL = 'personal'
        //
        const accountFormCategory = formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_ACCOUNT)
        const contactFormCategory = formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_CONTACT)
        const personalFormCategory = formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_PERSONAL)
        //
        return (
          <React.Fragment>
            { (accountFormCategory.length > 0)
              ? (
                <section>
                  <h1>Account</h1>
                  {this.get(that).formCategoryDOMized(accountFormCategory.sort(byWeight)) }
                </section>
              )
              : ''}
            { (contactFormCategory.length > 0)
              ? (
                <section>
                  <h1>Contact</h1>
                  {this.get(that).formCategoryDOMized(contactFormCategory.sort(byWeight)) }
                </section>
              )
              : ''}
            { (personalFormCategory.length > 0)
              ? (
                <section>
                  <h1>Personal</h1>
                  {this.get(that).formCategoryDOMized(personalFormCategory.sort(byWeight)) }
                </section>
              )
              : ''}
          </React.Fragment>
        )
      },
      /**
       *
       */
      formCategoryDOMized: (sortedFields) => {
        return sortedFields.map((field) => {
          //
          switch (field.type) {
            case 'text':
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <input type="text" id={field.id} name={field.id} key={field.id} className={(field.errors.length > 0) ? 'error_field' : null} defaultValue={field.defaultValue} onChange={that.updateForm} />
                  {this.get(that).errorDOMized(field)}
                </div>
              )
            case 'select':
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <select id={field.id} name={field.id} key={field.id} className={(field.errors.length > 0) ? 'error_field' : null} defaultValue={field.defaultValue} onChange={that.updateForm}>
                    {this.get(that).selectOptionDOMized(field)}
                  </select>
                  {this.get(that).errorDOMized(field)}
                </div >
              )
            default:
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <input type="text" id={field.id} name={field.id} key={field.id} className={(field.errors.length > 0) ? 'error_field' : null} defaultValue={field.defaultValue} onChange={that.updateForm} />
                  {this.get(that).errorDOMized(field)}
                </div>
              )
          }
        })
      }
    }
  }
}
