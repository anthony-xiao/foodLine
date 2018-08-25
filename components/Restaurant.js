import React from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from '../styles'
import {getCurrentQueueNumber} from '../actions/restaurant/currentQueueNum'
import {getTotalInQueueNumber} from '../actions/restaurant/totalInQueue'
import {addCustomer} from '../actions/restaurant/addCustomer'
import {updateCustomer} from '../actions/restaurant/updateCustomerQueueStatus'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentNum: 0,
      totalNum: 0,
      restaurantId: 1
    }
    this.addNewCustomer = this.addNewCustomer.bind(this)
    this.seatCustomer = this.seatCustomer.bind(this)
    this.missedCustomer = this.missedCustomer.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getCurrentQueueNumber(this.state.restaurantId))
    this.props.dispatch(getTotalInQueueNumber(this.state.restaurantId))
  }

  componentDidUpdate (prevProps) {
    if (this.props.totalInQueue !== prevProps.totalInQueue) {
      this.setState({
        totalNum: this.props.totalInQueue
      })
    }
    if (this.props.currentQueueNum !== prevProps.currentQueueNum) {
      this.setState({
        currentNum: this.props.currentQueueNum
      })
    }
  }

  addNewCustomer () {
    const newCustomer = {
      queue_id: 6,
      customer_id: 1
    }
    this.props.dispatch(addCustomer(this.state.restaurantId, newCustomer))
  }

  seatCustomer () {
    this.props.dispatch(updateCustomer(this.state.restaurantId, this.state.currentNum, 'seated'))
  }

  missedCustomer () {
    this.props.dispatch(updateCustomer(this.state.restaurantId, this.state.currentNum, 'missed'))
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Current Number: {this.state.currentNum}</Text>
        <Text>Total in Queue: {this.state.totalNum}</Text>
        <TouchableOpacity onPress={this.seatCustomer}>
          <Text>Seated</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.missedCustomer}>
          <Text>Missed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addNewCustomer}>
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
