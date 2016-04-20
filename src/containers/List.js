import { connect } from 'react-redux'
import { getUsers, addUser} from '../actions'

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'

import NavigationBar from '../components/NavigationBar'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1
  },
  card: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'solid',
    margin: 10,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#F6F7F8',
    padding: 10
  },
  body: {
    padding: 10
  },
  item: {
    color: '#333',
    textAlign: 'center'
  },
  itemWrapper: {
    height: 30,
    flex: 1,
    justifyContent: 'center'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  render() {
    const { users, addUser, navigator } = this.props
    const { user } = this.state

    return (
      <View style={styles.container}>
        <NavigationBar navigator={navigator} />
        <View style={styles.card}>
          <View style={styles.header}>
            <TextInput
              value={user}
              onChangeText={user => this.setState({ user })}
              onSubmitEditing={() => { if (! user) return; addUser(user); this.setState({ user: '' }) }} />
          </View>
          <View style={styles.body}>
          {
            users.length
            ? users.map((user, idx) => <View key={idx} style={styles.itemWrapper}><Text style={styles.item}>{user}</Text></View>)
            : <Text style={styles.item}>暂时没有相关信息</Text>
          }
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state

  return {
    users
  }
}

export default connect(mapStateToProps, { getUsers, addUser })(App)
