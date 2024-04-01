
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class BecomeMemberScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Job Types</Text>
      <Text style={styles.jobType}>Helper</Text>
      <Text style={styles.jobType}>Agricultural Expert</Text>
      <Text style={styles.jobType}>Operator</Text>
      <Text style={styles.jobType}>Marketing Manager</Text>
  
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  jobType: {
    fontSize: 18,
    marginBottom: 10,
  },
})