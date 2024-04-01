import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View style={styles.BGG}>
      <Text style={styles.trendingoffers}>
माटोमा सुन फल्दछ </Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.card, styles.card1]}>

            <ImageBackground source={require('../Ourteams/Oimage/1.jpg')} style={styles.Imagee} >
              <View>
                <Text style={{ fontSize: 30, color: '#ffff', fontWeight: 'bold', }}>
                श्रम व्यवस्थापन
                </Text>
                <Text style={{ fontSize: 20, color: '#ffff',fontFamily:'roboto' }}>
                यहाँ छोटकरीमा नेपालमा कृषिमा श…
                </Text>
                <Text style={{ fontSize: 15, color: '#ffff',fontFamily:'roboto' }}>
                  Read More
                </Text>
              </View>
            </ImageBackground>

          </View>
         <View style={[styles.card, styles.card1]}>

            <ImageBackground source={require('../Ourteams/Oimage/2.jpg')} style={styles.Imagee} >
              <View>
                <Text style={{ fontSize: 30, color: '#ffff', fontWeight: 'bold', }}>
                Investment (कृषिमा लगानी)
                </Text>
                <Text style={{ fontSize: 20, color: '#ffff',fontFamily:'roboto' }}>
                Before investing in the agricu…
                </Text>
                <Text style={{ fontSize: 15, color: '#ffff',fontFamily:'roboto' }}>
                  Read More
                </Text>
              </View>
            </ImageBackground>

          </View>
          
          <View style={[styles.card, styles.card1]}>

            <ImageBackground source={require('../Ourteams/Oimage/4.jpg')} style={styles.Imagee} >
              <View>
                <Text style={{ fontSize: 30, color: '#ffff', fontWeight: 'bold', }}>
                Sustainable Agriculture
                </Text>
                <Text style={{ fontSize: 20, color: '#ffff',fontFamily:'roboto' }}>
                Sustainable agriculture refers…
                </Text>
                <Text style={{ fontSize: 15, color: '#ffff',fontFamily:'roboto' }}>
                  Read More
                </Text>
              </View>
            </ImageBackground>

          </View>
          <View style={[styles.card, styles.card1]}>

<ImageBackground source={require('../Ourteams/Oimage/6.jpg')} style={styles.Imagee} >
  <View>
    <Text style={{ fontSize: 30, color: '#ffff', fontWeight: 'bold', }}>
    कृषि प्रविधि
    </Text>
    <Text style={{ fontSize: 20, color: '#ffff',fontFamily:'roboto' }}>
    आधुनिक कृषिमा प्रविधिको प्रयोग…
    </Text>
    <Text style={{ fontSize: 15, color: '#ffff',fontFamily:'roboto' }}>
      Read More
    </Text>
  </View>
</ImageBackground>

</View>

          
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  BGG: {
    backgroundColor: '#ffff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15

  },
  card: {
    width: 320,
    height: 150,
    borderRadius: 15,

    margin: 8
  },
  card1: {
    backgroundColor: '#690c23',


  },
  card2: {
    backgroundColor: '#690c23',


  },
  card3: {
    backgroundColor: '#690c23',




  },
  trendingoffers: {
    fontFamily: 'roboto',
    height: 30,
    width: 256,
    left: 10,
    fontSize: 25,
    font: 'bold',
    color: '#690c23'

  },
  Imagee: {
    flex: 1,
    height: 150,
    width: 320,
    borderRadius: 15,


  }
})