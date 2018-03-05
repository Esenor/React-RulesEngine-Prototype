import React from 'react'
import { formAdapterDisplayCategory } from '../common/formHelper'
import { byWeight } from '../common/common'
import humanizedFormMesage from '../business/humanize/messages'
import lodash from 'lodash'

export default {
  get (that) {
    return {
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
            return (<li className="error" key={indice}>{lodash.get(humanizedFormMesage, error, error)}</li>)
          })
          return (<ul>{errorsDOMized}</ul>)
        } else {
          return null
        }
      },
      /**
       *
       */
      categoryDOMized: (categoryFields, categoryTitle) => {
        if (categoryFields.length > 0) {
          return (
            <section>
              <h1>{categoryTitle}</h1>
              {this.get(that).fieldsDOMized(categoryFields.sort(byWeight))}
            </section>
          )
        } else {
          return null
        }
      },
      /**
       *
       */
      formDOMized: (displayFormState = []) => {
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
            {this.get(that).categoryDOMized(accountFormCategory.sort(byWeight), lodash.get(humanizedFormMesage, 'FORM.SIGN_UP.CATEGORY.TITLE.ACCOUNT', 'FORM.SIGN_UP.CATEGORY.TITLE.ACCOUNT'))}
            {this.get(that).categoryDOMized(personalFormCategory.sort(byWeight), lodash.get(humanizedFormMesage, 'FORM.SIGN_UP.CATEGORY.TITLE.PERSONAL', 'FORM.SIGN_UP.CATEGORY.TITLE.PERSONAL'))}
            {this.get(that).categoryDOMized(contactFormCategory.sort(byWeight), lodash.get(humanizedFormMesage, 'FORM.SIGN_UP.CATEGORY.TITLE.CONTACT', 'FORM.SIGN_UP.CATEGORY.TITLE.CONTACT'))}
          </React.Fragment>
        )
      },
      /**
       *
       */
      fieldsDOMized: (sortedFields) => {
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
