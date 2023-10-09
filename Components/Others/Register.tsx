import { Text, StyleSheet, View,StatusBar,TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { Component,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import MAt from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Register extends Component {
    render() {
        
      return (
        <SafeAreaView style={styles.all}>
        <ScrollView>
            <StatusBar backgroundColor="#690c23" barStyle="light-content" />
            <View style={styles.header}>
            <TouchableOpacity>
            <MAt name='arrow-left-bold-box' size={30} color="#ffff" />
            </TouchableOpacity>
                <Text style={styles.headerText}>  Register</Text>
            </View>
            <View style={styles.container}>
               
                <View>
                    <Text style={{color:'#690c23'}}>    Name</Text>
                    <TextInput 
                    style={styles.textinput}
                     placeholder='Enter Your Name'
                     autoCapitalize='none'
                     autoCorrect={false}/>
                </View>
                <View>
                    <Text style={{color:'#690c23'}}>    Number</Text>
                    <TextInput 
                    style={styles.textinput}
                     placeholder='Number' />
                </View>
                <View>
                    <Text style={{color:'#690c23'}}>    Password</Text>
                    <TextInput 
                    style={styles.textinput}
                     placeholder='Password'
                     secureTextEntry={true}
                     autoCapitalize='none'
                     autoCorrect={false} />
                </View>
                <View>
                    <Text style={{color:'#690c23'}}>    Confirm Password</Text>
                    <TextInput 
                    style={styles.textinput}
                     placeholder='Password'
                     secureTextEntry={true} 
                     autoCapitalize='none'
                     autoCorrect={false}/>
                </View>
                
                <TouchableOpacity style={styles.log}>
                    <Text style={{color:"#ffff",fontSize: 23,fontFamily: 'roboto'}}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.loginwith}>
                    <Text style={{color:'#690c23', fontSize:15, fontFamily: 'roboto'}}>Already Had a Account . . .?</Text>
                    <TouchableOpacity>
                    <Text style={{color:'#black', fontSize:20, fontFamily: 'roboto'}}>Login</Text>
                    </TouchableOpacity>
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
      padding:16,
      borderTopLeftRadius:16,
      borderTopRightRadius:16,
      height:780
    },
    textinput:{
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#690c23',
        borderRadius: 10,
        padding:10,
        margin: 5

    },
    log:{
        height: 50,
        width: '97%',
        backgroundColor:'#690c23',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 8,
        marginRight:20,
        paddingleft: 10,
        paddingRight: 10,
        
    },
    loginwith:{
        
        padding: 10,
        alignItems: 'center',
        
    },
    check:{
        paddingLeft:10

    },
    boxcheck:{
        flexDirection: 'row'

    }
    
   
  })