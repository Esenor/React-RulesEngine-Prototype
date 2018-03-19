import { combineReducers } from 'redux'
import formSignUpReducer from './formSignUp.reducer'
import modalSignUpReducer from './modalSignUp.reducer'
import statusSignUpReducer from './statusSignUp.reducer'
/**
 *
 */
export default combineReducers({
  signUpForm: formSignUpReducer,
  signUpStatus: statusSignUpReducer,
  signUpModal: modalSignUpReducer
})
