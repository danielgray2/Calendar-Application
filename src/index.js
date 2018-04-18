import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'
import { createStore } from 'redux'
import allReducers from './reducers/index'
import App from './components/app'

const store = createStore(allReducers);

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()