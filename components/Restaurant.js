import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'
import {createData} from '../db'

class CurrentStatus extends React.Component {
  componentDidMount () {
    createData()
  }
  render () {
    return (
      <View style={styles.container}>x
        <Text>Your number: 10</Text>
        <Text>Current number: 8</Text>
      </View>
    )
  }
}
export default CurrentStatus
