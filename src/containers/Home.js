import React, {
  Component,
  View,
  Navigator,
  Text,
  ListView,
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
        <View>
          <NavigationBar navigator={navigator} />
          <ListView enableEmptySections={true} dataSource={ds.cloneWithRows(users)} renderRow={user => <Card><Text>{user}</Text></Card>} />
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
