import React from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from '../styles'
import {getCurrentQueueNumber} from '../actions/restaurant/currentQueueNum'
import {getTotalInQueueNumber} from '../actions/restaurant/totalInQueue'
import {addRestaurantCustomerQueue} from '../db/restaurant'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentNum: 0,
      totalNum: 0,
      restaurantId: 1
    }
    this.addCustomer = this.addCustomer.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getCurrentQueueNumber(this.state.restaurantId))
    this.props.dispatch(getTotalInQueueNumber(this.state.restaurantId))
  }

  addCustomer () {
    const newCustomer = {
      queue_id: 6,
      customer_id: 1
    }
    addRestaurantCustomerQueue(this.state.restaurantId, newCustomer)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Current Number: {this.props.currentQueueNum}</Text>
        <Text>Total in Queue: {this.props.totalInQueue}</Text>
        <TouchableOpacity>
          <Text>Seated</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Missed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addCustomer}>
          <Text>Add Customer</Text>
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
