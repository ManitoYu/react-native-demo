import React, {
  Component,
  PropTypes,
  View,
  Text,
  Image
} from 'react-native'

import {
  Divider
} from '../components'

const Icon = require('react-native-vector-icons/MaterialIcons')

import List from '../containers/List'

const styles = {
  drawerHeader: {
    backgroundColor: '#2196F3',
    marginBottom: 8,
    padding: 16
  },
  drawerBody: {

  },
  navItem: {
   flex: 1,
   flexDirection: 'row',
   padding: 16,
   alignItems: 'center'
 },
  drawerFooter: {

  }
}

export default class Drawer extends Component {
  render() {
    const { navigator } = this.props

    return (
      <View>
        <View style={styles.drawerHeader}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{ uri: 'http://yucong.oss-cn-shanghai.aliyuncs.com/yinmu.png?Expires=1461310833&OSSAccessKeyId=kziCCZuOkMBVYp8L&Signature=HJj7PeLOsUxDLBB/msudVhfgIVY%3D'}} />
        </View>
        <View style={styles.drawerBody}>
          <View style={styles.navItem}>
            <View style={{ marginRight: 32 }}><Icon name="format-list-bulleted" size={24} color="#0091EA" /></View>
            <Text onPress={() => navigator.push({ name: 'List', component: List })}>首页</Text>
          </View>
          <View style={styles.navItem}>
            <View style={{ marginRight: 32 }}><Icon name="explore" size={24} color="#00C853" /></View>
            <Text onPress={() => navigator.push({ name: 'List', component: List })}>发现</Text>
          </View>
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
