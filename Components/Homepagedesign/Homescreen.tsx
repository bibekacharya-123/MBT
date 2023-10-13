import { SafeAreaView, ScrollView, Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import FlatCards from './FlatCards'
import Octicons from 'react-native-vector-icons/Octicons'
import Yourpoint from './Yourpoint'

import Gift from './Gift'
import Becomeamember from './BecomeMember'
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type RootStackParamList = {
  Home: undefined;
  Notification:undefined;
  profile: undefined;
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const Homescreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    return (
      <View style={styles.cont}>
        <SafeAreaView >
          <ScrollView>
            <View>

              <View style={styles.Headd}>
              <Text style={styles.Club}>Club MRR</Text>
                <View style={styles.iconss}>
                  <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <View style={{ marginRight:20 }} >
                      <Octicons name="bell-fill" size={25} color="#ffff" />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                    <View>
                      <MaterialCommunityIcons name='account-circle' size={30} color='#ffff' />
                    </View>
                  </TouchableOpacity>
                </View>


              </View>
              <View style={styles.contt}>
                <View style={styles.modalview}>
                  <FlatCards />

                </View>

                <Yourpoint />

                <Gift />
                <Becomeamember />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

      </View>
    )
  }


const styles = StyleSheet.create({
  Background: {
    backgroundColor: "#690c23"
  },
  Club: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#FFFFFF",
    padding: 4,
    margin: 4
  
  },
  Headd: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#690c23",

  },
  modalview: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'red',
    shadowColor: '#fff3'
  },
  cont: {
    marginBottom: 60,
    
    
  },
  iconss: {
    padding: 8,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  contt:{
    borderTopEndRadius:16,
    borderTopLeftRadius:16,
  }
});

export default Homescreen;