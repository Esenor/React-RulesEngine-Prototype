import { connect } from 'react-redux'
import Application from '../presentationals/Application'
import { updateSignUpForm, initializeSignUpForm, modalChangeStatus } from '../../store/actions/sync'
import { setFormResultAsync } from '../../store/actions/async'
// import { validateFormAsync } from '../../store/actions/async'

export default connect(
  function mapStateToProps (state) {
    return {
      formRecipe: state.formRecipe,
      formValues: state.formValues,
      formRecipeHistory: state.formRecipeHistory,
      formValuesHistory: state.formValuesHistory,
      result: state.result,
      pending: state.pending,
      modal: state.display.modal
    }
  },
  function mapDispatchToProps (dispatch) {
    return {
      updateSignUpForm: (fieldId, fieldValue) => dispatch(updateSignUpForm(fieldId, fieldValue)),
      // updateSignUpForm: (fieldId, fieldValue) => dispatch(validateFormAsync(fieldId, fieldValue)),
      initializeSignUpForm: () => dispatch(initializeSignUpForm()),
      setResultAsync: (formValues) => dispatch(setFormResultAsync(formValues)),
      modalChangeStatus: (name, status) => dispatch(modalChangeStatus(name, status))
    }
  }
)(Application)
