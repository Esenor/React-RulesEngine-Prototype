import { combineReducers } from 'redux'
import formSignUpReducer from './formSignUp.reducer'
import modalSignUpReducer from './modalSignUp.reducer'
import statusSignUpReducer from './statusSignUp.reducer'
/**
 * Return the main reducer
 */
export default combineReducers({
  signUpForm: formSignUpReducer,
  signUpStatus: statusSignUpReducer,
  signUpModal: modalSignUpReducer
})
