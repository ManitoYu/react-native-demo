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
import List from './List'
import {
  Card,
  NavigationBar
}from '../components'

import { getUsers } from '../actions'

class Home extends Component {
  componentDidMount() {
    const { getUsers } = this.props
    getUsers()
  }
  render() {
    const { navigator, users } = this.props

    let navigationView = (
      <View>
        <Text onPress={() => navigator.push({ name: 'List', component: List })}>List</Text>
      </View>
    )

    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
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
