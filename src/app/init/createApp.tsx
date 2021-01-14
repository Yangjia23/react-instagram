import React from 'react'
import { Provider } from 'react-redux'
import Router from './router'
import { store, history } from './createStore'

const createApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  </React.StrictMode>
)

export default createApp
