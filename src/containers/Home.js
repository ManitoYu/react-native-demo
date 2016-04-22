import React, {
  Component,
  View,
  Navigator,
  Text,
  ListView,
  Image,
  DrawerLayoutAndroid
} from 'react-native'
import { connect } from 'react-redux'
import { getUsers } from '../actions'
import emitter from '../utils/emitter'

import Drawer from '../components/Drawer'

import {
  Card,
  NavigationBar
} from '../components'

class Home extends Component {
  componentDidMount() {
    const { getUsers } = this.props
    getUsers()

    emitter.on('OPEN_DRAWER', () => {
      this.refs.drawer.openDrawer()
    })

    emitter.on('CLOSE_DRAWER', () => {
      this.refs.drawer.closeDrawer()
    })
  }
  render() {
    const { navigator, users } = this.props

    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer navigator={navigator} />}>
        <View style={{ backgroundColor: '#EAEAEA', flex: 1 }}>
          <NavigationBar navigator={navigator} />
          <Text style={{ margin: 16, color: '#737373', fontWeight: 'bold' }}>Today</Text>
          <ListView
            enableEmptySections={true}
            dataSource={ds.cloneWithRows(users)}
            renderRow={user =>
              <View style={{ padding: 16, backgroundColor: '#fff', flex: 1, flexDirection: 'row' }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, marginRight: 16 }}
                  source={{ uri: user.avatar }} />
                <View>
                  <Text>{user.name}</Text>
                </View>
              </View>
            }
          />
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state

  return {
    users
  }
}

export default connect(mapStateToProps, { getUsers })(Home)
