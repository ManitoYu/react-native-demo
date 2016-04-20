import React, {
  Component,
  PropTypes,
  View
} from 'react-native'

const styles = {
  card: {
    backgroundColor: '#ccc',
    marginBottom: 5
  },
  cardHeader: {
    height: 40
  }
}

export default class Card extends Component {
  render() {
    const { children } = this.props
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}></View>
        <View style={styles.cardBody}></View>
      </View>
    )
  }
}

Card.propTypes = {
  children: PropTypes.node
}
