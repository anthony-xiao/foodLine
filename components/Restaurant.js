import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'
import {createData} from '../db/util'
import {latestQueue} from '../db/restaurant'

class Restaurant extends React.Component {
  componentDidMount () {
    createData()
  }
  render () {
    console.log(latestQueue(1))
    return (
      <View style={styles.container}>
        <Text>Current Number: 1</Text>
        <Text>Total in Queue: 8</Text>
      </View>
    )
  }
}
export default Restaurant
