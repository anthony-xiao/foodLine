import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'
import {createData, migrateData} from '../db'

class CurrentStatus extends React.Component {
  componentDidMount () {
    migrateData()
    createData()
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Your number: 10</Text>
        <Text>Current number: 8</Text>
      </View>
    )
  }
}
export default CurrentStatus
