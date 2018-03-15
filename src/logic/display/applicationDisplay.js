import React from 'react'
import lodash from 'lodash'
import { formAdapterDisplayCategory, humanizedFieldError } from '../common/formHelper'
import { byWeight } from '../common/common'
import humanizedFormMesage from '../business/humanize/messages'
import CategoryTitle from '../../components/atomics/CategoryTitle'
import TextField from '../../components/atomics/TextField'
import SelectField from '../../components/atomics/SelectField'
import ErrorInfo from '../../components/atomics/ErrorInfo'

export default {
  get (that) {
    return {
      /**
       *
       */
      categoryDOMized: (categoryFields, categoryTitle) => {
        if (categoryFields.length > 0) {
          return (
            <section>
              <CategoryTitle>{categoryTitle}</CategoryTitle>
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
                  <TextField id={field.id} isOnError={(field.errors.length > 0)} defaultValue={field.defaultValue} onChange={that.updateForm} />
                  {(field.errors.length > 0) ? (<ErrorInfo messages={humanizedFieldError(field.errors)}/>) : null}
                </div>
              )
            case 'select':
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <SelectField id={field.id} isOnError={(field.errors.length > 0)} defaultValue={field.defaultValue} values={field.values.sort(byWeight)} onChange={that.updateForm} />
                  {(field.errors.length > 0) ? (<ErrorInfo messages={humanizedFieldError(field.errors)}/>) : null}
                </div >
              )
            default:
              return (
                <div key={ `wrapper_${field.id}` }>
                  <p>{field.label}</p>
                  <TextField id={field.id} isOnError={(field.errors.length > 0)} defaultValue={field.defaultValue} onChange={that.updateForm} />
                  {(field.errors.length > 0) ? (<ErrorInfo messages={humanizedFieldError(field.errors)}/>) : null}
                </div>
              )
          }
        })
      }
    }
  }
}
