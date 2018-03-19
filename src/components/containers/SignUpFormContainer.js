import { connect } from 'react-redux'
import SignUpForm from '../presentationals/SignUpForm'
import { updateSignUpForm, initializeSignUpForm, modalChangeStatus } from '../../store/actions/sync'
import { setFormResultAsync } from '../../store/actions/async'
// import { validateFormAsync } from '../../store/actions/async'

export default connect(
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
  function mapDispatchToProps (dispatch) {
    return {
      updateSignUpForm: (fieldId, fieldValue) => dispatch(updateSignUpForm(fieldId, fieldValue)),
      // updateSignUpForm: (fieldId, fieldValue) => dispatch(validateFormAsync(fieldId, fieldValue)),
      initializeSignUpForm: () => dispatch(initializeSignUpForm()),
      setResultAsync: (formValues) => dispatch(setFormResultAsync(formValues)),
      modalChangeStatus: (name, status) => dispatch(modalChangeStatus(name, status))
    }
  }
)(SignUpForm)
