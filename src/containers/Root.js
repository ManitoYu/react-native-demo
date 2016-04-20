import { Provider } from 'react-redux'
import React, { Component, Navigator } from 'react-native'
import Home from './Home'

import configureStore from '../store/configureStore'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ name: 'Home', component: Home }}
          configureScene={route => Navigator.SceneConfigs.VerticalDownSwipeJump}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
      </Provider>
    )
  }
}
