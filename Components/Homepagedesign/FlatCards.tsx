import { Image, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View style={styles.BGG}>
      <Text style={styles.trendingoffers}>Trending offers</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.card,styles.card1]}>
            
            <Image source={require('../Ourteams/Oimage/background.jpg')} style={styles.Imagee} />
            
         </View>
         <View style={[styles.card,styles.card2]}>
         <Image source={require('../Ourteams/Oimage/background.jpg')} style={styles.Imagee} />
            
         </View>
         <View style={[styles.card,styles.card3]}>
         <Image source={require('../Ourteams/Oimage/background.jpg')} style={styles.Imagee} />
            
         </View>
        </View>
       
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  BGG:{
    backgroundColor:'#ffff',
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15

  },
  card:{
    width: 320,
    height: 150,
    borderRadius: 15,
    
    margin: 8
  },
  card1:{
    backgroundColor: '#690c23',
    

  },
  card2:{
    backgroundColor: '#690c23',
  

  },
  card3:{
    backgroundColor: '#690c23',
    
    
    

  },
  trendingoffers: {
    fontFamily:'roboto',
    height: 26,
    width:256,
    left: 10,
    fontSize: 20,
    font: 'bold',
    color: '#690c23'

  },
  Imagee:{
    flex: 1,
    height: 150,
    width: 320,
    borderRadius: 15,
    
    
  }
})