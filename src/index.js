import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './css/index.css'
import Application from './components/presentationals/Application'
import reducer from './store/reducers/reducer'

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <Application/>
  </Provider>, document.getElementById('root')
)
