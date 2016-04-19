import { Provider } from 'react-redux'
import React, { Component } from 'react-native'
import App from './App'

import configureStore from '../store/configureStore'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
