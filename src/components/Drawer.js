import React, {
  Component,
  PropTypes,
  View,
  Text
} from 'react-native'

import {
  Divider
} from '../components'

import List from '../containers/List'

const styles = {
  drawerHeader: {
    height: 120,
    backgroundColor: '#2196F3',
    marginBottom: 8
  },
  drawerBody: {
    padding: 16
  },
  drawerFooter: {

  }
}

export default class Drawer extends Component {
  render() {
    const { navigator } = this.props

    return (
      <View>
        <View style={styles.drawerHeader}></View>
        <View style={styles.drawerBody}>
          <Text onPress={() => navigator.push({ name: 'List', component: List })}>List</Text>
        </View>
        <Divider />
        <View style={styles.drawFooter}></View>
      </View>
    )
  }
}

Drawer.propTypes = {
  navigator: PropTypes.object.isRequired
}
