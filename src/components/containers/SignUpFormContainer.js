import { connect } from 'react-redux'
import SignUpForm from '../presentationals/SignUpForm'
import { updateSignUpForm, initializeSignUpForm, modalChangeStatus } from '../../store/actions/sync'
import { setFormResultAsync } from '../../store/actions/async'

/**
 * Container connector
 */
export default connect(
  /**
   * State mapper
   */
  function mapStateToProps (state) {
    return {
      formRecipe: state.signUpForm.formRecipe,
      formValues: state.signUpForm.formValues,
      formRecipeHistory: state.signUpForm.formRecipeHistory,
      formValuesHistory: state.signUpForm.formValuesHistory,
      result: state.signUpStatus.result,
      pending: state.signUpStatus.pending,
      modal: state.signUpModal
    }
  },
  /**
   * Action dispatcher
   */
  function mapDispatchToProps (dispatch) {
    return {
      updateSignUpForm: (fieldId, fieldValue) => dispatch(updateSignUpForm(fieldId, fieldValue)),
      initializeSignUpForm: () => dispatch(initializeSignUpForm()),
      setResultAsync: (formValues) => dispatch(setFormResultAsync(formValues)),
      modalChangeStatus: (name, status) => dispatch(modalChangeStatus(name, status))
    }
  }
)(SignUpForm)
