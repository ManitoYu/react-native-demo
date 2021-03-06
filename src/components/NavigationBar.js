import React, {
  Component,
  PropTypes,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import emitter from '../utils/emitter'

const Icon = require('react-native-vector-icons/MaterialIcons')

const styles = {
  navigationBar: {
    height: 60,
    backgroundColor: '#3F51B5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navText: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 32
  },
  navButton: {

  }
}

export default class NavigationBar extends Component {
  openMenu() {
    emitter.emit('OPEN_DRAWER')
  }
  goBack() {
    emitter.emit('CLOSE_DRAWER')
    this.props.navigator.pop()
  }
  render() {
    return (
      <View>
        <View style={styles.navigationBar}>
          {
            this.props.navigator.getCurrentRoutes().length == 1
              ?
                <TouchableOpacity onPress={this.openMenu.bind(this)} style={styles.navButton}>
                  <Icon name="menu" size={28} color="#fff" />
                </TouchableOpacity>
              :
                <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.navButton}>
                  <Icon name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
          }

          <Text style={styles.navText}>InBox</Text>
          <View style={{ position: 'absolute', right: 16, top: 16 }}>
            <Icon name="search" size={28} color="#fff" />
          </View>
        </View>
      </View>
    )
  }
}

NavigationBar.propTypes = {
  navigator: PropTypes.object.isRequired
}
