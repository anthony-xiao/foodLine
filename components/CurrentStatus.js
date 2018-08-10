import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'

const CurrentStatus = () => {
  return (
    <View style={styles.container}>
      <Text>Your number: 10</Text>
      <Text>Current number: 8</Text>
    </View>
  )
}

export default CurrentStatus
