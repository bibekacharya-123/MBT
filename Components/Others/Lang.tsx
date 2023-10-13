import { Text, StyleSheet, View,StatusBar ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomSwitch from './CustomSwitch'
import MAt from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Lang extends Component {
  render() {
    return (
      <SafeAreaView style={styles.all}>
      <View>
          <StatusBar backgroundColor="#690c23" barStyle="light-content" />
          <View style={styles.header}>
           <TouchableOpacity>
           <MAt name='arrow-left-bold-box' size={30} color="#ffff" />
           </TouchableOpacity>
              <Text style={styles.headerText}>  Language</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.cont}>
              <View style={styles.engg}>
                <Text style={{fontSize:20, fontFamily:'roboto',color:'#690c23'}}>   English</Text>
                <CustomSwitch />
              </View>
              <View style={styles.engg}>
                <Text style={{fontSize:20,fontFamily:'roboto',color: '#690c23'}}>   Nepali</Text>
                <CustomSwitch/>
              </View>

            </View>
          </View>
      </View>
  </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  all:{
    backgroundColor:"#690c23"
  },
  header:{
    backgroundColor: '#690c23',
      padding: 20,
      flexDirection: 'row'
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color:'#ffff',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE', 
    padding:16,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    height:780
  },
  cont:{
    height: 110,
    width: 360,
    backgroundColor: '#ffff',
    borderRadius:15,
    justifyContent:'space-between',
    
  },
  engg:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
    marginRight: 15
  }
})