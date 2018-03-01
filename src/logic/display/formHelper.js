import React from 'react'
import { formAdapterDisplayCategory } from '../common/formAdapter'
import { byWeight } from '../common/common'

export default {
  get (that) {
    return {
      /**
       *
       */
      selectOptionDOMized: (field) => {
        return field.values.map((value) => {
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
        return (
          <React.Fragment>
            <section>
              <h1>Account</h1>
              {this.get(that).formCategoryDOMized(formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_ACCOUNT).sort(byWeight)) }
            </section>
            <section>
              <h1>Contact</h1>
              {this.get(that).formCategoryDOMized(formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_CONTACT).sort(byWeight)) }
            </section>
            <section>
              <h1>Personal</h1>
              {this.get(that).formCategoryDOMized(formAdapterDisplayCategory(displayFormState, METADATA_CATEGORY_PERSONAL).sort(byWeight)) }
            </section>
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
                  <input type="text" id={field.id} name={field.id} key={field.id} defaultValue={field.defaultValue} onChange={that.updateForm} />
                  {this.get(that).errorDOMized(field)}
                </div>
              )
            case 'select':
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <select id={field.id} name={field.id} key={field.id} defaultValue={field.defaultValue} onChange={that.updateForm}>
                    {this.get(that).selectOptionDOMized(field)}
                  </select>
                  {this.get(that).errorDOMized(field)}
                </div >
              )
            default:
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <input type="text" id={field.id} name={field.id} key={field.id} defaultValue={field.defaultValue} onChange={that.updateForm} />
                  {this.get(that).errorDOMized(field)}
                </div>
              )
          }
        })
      }
    }
  }
}
