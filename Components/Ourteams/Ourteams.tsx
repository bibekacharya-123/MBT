import { Image,Text, StyleSheet, View,StatusBar,ScrollView,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Mat from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Ourteams extends Component {
  render() {
    return (
      <SafeAreaView style={styles.all}>
      <ScrollView>
          <StatusBar backgroundColor="#690c23" barStyle="light-content" />
          <View style={styles.header}>
            <TouchableOpacity>
            <Mat name='arrow-left-bold-box' size={30} color="#ffff" />
            </TouchableOpacity>
              <Text style={styles.headerText}>  OurTeams</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.page} >
                <View style={styles.imagee}>
                    <Image source={require('./Oimage/011.jpg')} 
                    style={styles.img}
                    
                    />
                     <View style={styles.Testpositon}>
                    <Text style={{fontFamily: 'roboto', fontSize: 20,fontWeight: 'bold'}}> Name</Text>
                    <Text style={{fontFamily: 'roboto', fontSize: 15, color:'#690c23'}}>    Position</Text>
                </View>
                </View>
              </View>
              <View style={styles.page} >
                <View style={styles.imagee}>
                    <Image source={require('./Oimage/011.jpg')}
                    style={styles.img}
                    
                    />
                     <View style={styles.Testpositon}>
                    <Text style={{fontFamily: 'roboto', fontSize: 20,fontWeight: 'bold'}}> Name</Text>
                    <Text style={{fontFamily: 'roboto', fontSize: 15, color:'#690c23'}}>    Position</Text>
                </View>
                </View>
               </View>
               <View style={styles.page} >
                <View style={styles.imagee}>
                    <Image source={require('./Oimage/011.jpg')}
                    style={styles.img}
                    
                    />
                     <View style={styles.Testpositon}>
                    <Text style={{fontFamily: 'roboto', fontSize: 20,fontWeight: 'bold'}}> Name</Text>
                    <Text style={{fontFamily: 'roboto', fontSize: 15, color:'#690c23'}}>    Position</Text>
                </View>
                </View>
               </View>
               <View style={styles.page} >
                <View style={styles.imagee}>
                    <Image source={require('./Oimage/011.jpg')}
                    style={styles.img}
                    
                    />
                     <View style={styles.Testpositon}>
                    <Text style={{fontFamily: 'roboto', fontSize: 20,fontWeight: 'bold'}}> Name</Text>
                    <Text style={{fontFamily: 'roboto', fontSize: 15, color:'#690c23'}}>    Position</Text>
                </View>
                </View>
              </View>

            
          </View>
      </ScrollView>
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
    color:'#ffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE', 
    padding:5,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    height:780,
    margin: 5,
    
    
  },
  img:{
    height: 130,
    width: 140,
    borderRadius:15,
    
  },
  imagee:{
  flexDirection: 'row'

  },
  Testpositon:{
    alignItems: 'center',
    justifyContent: 'center',
     
  },
  page:{
    margin: 8,
  }
  
})