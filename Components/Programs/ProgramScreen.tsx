import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ProgramScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Agricultural Land</Text>
      <Text style={styles.jobType}>Land Farm Buying</Text>
      <Text style={styles.jobType}>Land Form Selling</Text>
      <Text style={styles.jobType}>Taking Land Farm For Lease</Text>
      <Text style={styles.jobType}>Giving Land Farm For Lease</Text>
  
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