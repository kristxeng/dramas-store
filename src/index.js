import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import rootReducer from './reducer/reducer'
import App from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware(),
    logger
  )
)
// console.log(store.getState());

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)