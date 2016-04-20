import React, {
  Component,
  PropTypes,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const styles = {
  navigationBar: {
    height: 60,
    backgroundColor: '#3F51B5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32
  },
  backButtonText: {
    color: '#fff'
  }
}

export default class NavigationBar extends Component {
  goBack() {
    this.props.navigator.pop()
  }
  render() {
    return (
      <View>
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={this.goBack.bind(this)}>
            <Text style={styles.backButtonText}>返回</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

NavigationBar.propTypes = {
  navigator: PropTypes.object.isRequired
}
