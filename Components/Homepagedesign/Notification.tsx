import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Matrail from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Notification() {
  return (
    
    <View style={styles.noti}>
      
      <TouchableOpacity>
      <Matrail name="arrow-left-bold-box" size={40} color="#ffff" />
      </TouchableOpacity>
      <Text style={{color: '#ffff', fontFamily: 'roborto',fontSize: 27,marginLeft: 10}}>Notification</Text>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  noti:{
    backgroundColor: '#690c23',
    width: '100%',
    height: '5%',
  
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
})