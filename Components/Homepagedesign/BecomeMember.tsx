import { Image, Text, StyleSheet, View, TouchableOpacity, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class becomeamember extends Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
       

          <View style={styles.card1}>
         <ImageBackground source={require('../Ourteams/Oimage/8.jpg')} style={styles.Imagee} >
            
           <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
           <Text style={styles.club}>पशुपालन</Text>
           </View>
            <Text style={{ color: '#FFFFFF',fontSize:30 }}>मासु उत्पादन, डेरी पदार्थ, अण्डा, माछा</Text>
            <View style={styles.buttons}>
              <TouchableOpacity >
              <View style={styles.btn}>
                <Text style={styles.text}>Read More</Text>
                </View>
              </TouchableOpacity>
              

            </View>
            </ImageBackground>
          </View>
          <View style={styles.card1}>
          <ImageBackground source={require('../Ourteams/Oimage/10.jpg')} style={styles.Imagee} >
            
            <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
            <Text style={styles.club}>कृषिभूमि</Text>
            </View>
             <Text style={{ color: '#FFFFFF',fontSize:30 }}>जमिनको अवस्थिति, मोटोको प्रकार, जमिन लेनदेन कानुन</Text>
             <View style={styles.buttons}>
               <TouchableOpacity >
               <View style={styles.btn}>
                 <Text style={styles.text}>Read More</Text>
                 </View>
               </TouchableOpacity>
 
             </View>
             </ImageBackground>
           </View>
           <View style={styles.card1}>
           <ImageBackground source={require('../Ourteams/Oimage/4.jpg')} style={styles.Imagee} >
            
           <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
           <Text style={styles.club}>Ecommerce</Text>
           </View>
            <Text style={{ color: '#FFFFFF',fontSize:30 }}>स्थानीय उत्पादन किन्न र बेच्न, प्रविधि औजार, कच्चा पदार्थ खरिद गर्न</Text>
            <View style={styles.buttons}>
              <TouchableOpacity >
              <View style={styles.btn}>
                <Text style={styles.text}>Read More</Text>
                </View>
              </TouchableOpacity>

            </View>
            </ImageBackground>
          </View>
          <View style={styles.card1}>
          <ImageBackground source={require('../Ourteams/Oimage/9.jpg')} style={styles.Imagee} >
            
            <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
            <Text style={styles.club}>श्रमशक्ति</Text>
            </View>
             <Text style={{ color: '#FFFFFF',fontSize:30 }}>कृषि सहयोगी, कृषि तथा पशु प्राविधिक, विशेषज्ञ, अपरेटर, सुपरभाईजर</Text>
             <View style={styles.buttons}>
               <TouchableOpacity >
               <View style={styles.btn}>
                 <Text style={styles.text}>Read More</Text>
                 </View>
               </TouchableOpacity>
 
             </View>
             </ImageBackground>
           </View>
            
          
          <View style={styles.card1}>
          <ImageBackground source={require('../Ourteams/Oimage/12.jpg')} style={styles.Imagee} >
           <View style={{justifyContent:'flex-start',alignContent:'flex-start'}}>
           <Text style={styles.club}>प्रविधि</Text>
           </View>
            <Text style={{ color: '#FFFFFF',fontSize:30 }}>आधुनिक कृषि औजार, पावर ट्रिलर, Bio-Pesticides, Bio-Fertilizers, सिँचाई प्रविधि, हाईड्रोपोनिक्स</Text>
            <View style={styles.buttons}>
              <TouchableOpacity >
              <View style={styles.btn}>
                <Text style={styles.text}>Read More</Text>
                </View>
              </TouchableOpacity>

            </View>
            </ImageBackground>
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
    backgroundColor: 'sky',
    
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
  Imagee: {
    flex: 1,
    height: 170,
    width: 345,
    borderRadius: 5},
  backimg:{

  }
})