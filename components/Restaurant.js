import React from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from '../styles'
import {getCurrentQueueNumber} from '../actions/restaurant/currentQueueNum'
import {getTotalInQueueNumber} from '../actions/restaurant/totalInQueue'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentNum: 0,
      totalNum: 0
    }
  }
  componentDidMount () {
    this.props.dispatch(getCurrentQueueNumber(1))
    this.props.dispatch(getTotalInQueueNumber(1))
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Current Number: {this.props.currentQueueNum}</Text>
        <Text>Total in Queue: {this.props.totalInQueue}</Text>
        <TouchableOpacity>
          <Text>Next Number</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentQueueNum: state.currentQueueNum,
    totalInQueue: state.totalInQueue
  }
}

export default connect(mapStateToProps)(Restaurant)
