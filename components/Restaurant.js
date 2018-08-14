import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'
import {latestQueue} from '../db/restaurant'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentNum: 0,
      totalNum: 0
    }
  }
  componentDidMount () {
    latestQueue(1)
      .then(num => {
        this.setState({
          currentNum: num
        })
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Current Number: {this.state.currentNum}</Text>
        <Text>Total in Queue: {this.state.totalNum}</Text>
      </View>
    )
  }
}
export default Restaurant
