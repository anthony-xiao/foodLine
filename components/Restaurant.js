import React from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import styles from '../styles'
import {getCurrentQueueNumber} from '../actions/restaurant/currentQueueNum'
import {totalQueue} from '../db/restaurant'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentNum: 0,
      totalNum: 0
    }
  }
  componentDidMount () {
    totalQueue(1)
    this.props.dispatch(getCurrentQueueNumber(1))
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Current Number: {this.props.currentQueueNum}</Text>
        <Text>Total in Queue: {this.state.totalNum}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentQueueNum: state.currentQueueNum
  }
}

export default connect(mapStateToProps)(Restaurant)
