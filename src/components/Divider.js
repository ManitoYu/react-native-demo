import React, {
  Component,
  PropTypes,
  View
} from 'react-native'

export default class Divider extends Component {
  render() {
    return (
      <View style={{ marginTop: 16, marginBottom: 16 }}>
        <View style={{ backgroundColor: '#eee', height: 1 }}></View>
        <View style={{ backgroundColor: '#f6f6f6', height: 1 }}></View>
      </View>
    )
  }
}
