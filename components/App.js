import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import Restaurant from './Restaurant'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

const App = () => {
  return (
    <Provider store={store}>
      <Restaurant />
    </Provider>
  )
}

export default App
