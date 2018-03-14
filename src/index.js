import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './css/index.css'
import ApplicationContainer from './components/containers/ApplicationContainer'
import reducer from './store/reducers'

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><ApplicationContainer /></Provider>, document.getElementById('root'))
