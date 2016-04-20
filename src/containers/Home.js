import React, {
  Component,
  View,
  Navigator,
  Text,
  DrawerLayoutAndroid
} from 'react-native'
import { connect } from 'react-redux'
import List from './List'

class Home extends Component {
  render() {
    const { navigator } = this.props
    return (
      <View>
        <Text onPress={() => navigator.push({ name: 'List', component: List })}>List</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps)(Home)
