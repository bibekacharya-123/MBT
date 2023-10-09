import { Image, Text, StyleSheet, View, TouchableOpacity, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class becomeamember extends Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
       

          <View style={styles.card1}>
            
           <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
           <Text style={styles.club}>Become a member</Text>
           </View>
            <Text style={{ color: '#FFFFFF',fontSize:30 }}>Membership Application Form</Text>
            <View style={styles.buttons}>
              <TouchableOpacity >
              <View style={styles.btn}>
                <Text style={styles.text}>Join us</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
          
          <View style={styles.card1}>
           <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
           <Text style={styles.club}>Become a member</Text>
           </View>
            <Text style={{ color: '#FFFFFF',fontSize:30 }}>Membership Application Form</Text>
            <View style={styles.buttons}>
              <TouchableOpacity >
              <View style={styles.btn}>
                <Text style={styles.text}>Join us</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
          

      </ScrollView>
      </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
 
  
  gee: {
    flex: 1,
    height: 160,
    width: 340,
    margin: 10,
    borderRadius: 10,
    marginLeft: 20

  },
  cardbackground: {
    backgroundColor: '#ffff'
  },

  card1: {
    backgroundColor: '#690c23',
    
    borderRadius: 10,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    
    height: 200,
    
    alignContent: 'center',
    margin:10

  },

  club: {
    fontSize: 20,
    fontWeight: 'bold',
    
    
    paddingBottom: 6,
    color: '#FFFFFF',
    justifyContent:'flex-start'  },
  buttons: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 16,
  },
  text: {
    color: '#690c23',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
    
    
    
  },
  btn:{
    height: 40,
    width: 90,
    backgroundColor:'#ffffff',
    borderRadius:15,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 245,
  
  },
  backimg:{

  }
})