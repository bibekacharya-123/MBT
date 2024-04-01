import React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import Icons from "./Icons";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Lang: undefined;
  Ourteams: undefined;
  Contact: undefined;
  Downloads: undefined;
  
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const LoginRegister = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.all}>
      <ScrollView>
        <View>
          <StatusBar backgroundColor="#690c23" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.headerText}>Others</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.card1}>
              <Text style={styles.club}>
मेरो धरती
</Text>
              <Text style={{ color: '#FFFFFF' }}>To continue Log in with your RSP account.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1 } onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card2}>
              <View style={styles.services}>
              <Icons name="globe" />
                <TouchableOpacity onPress={() => navigation.navigate('Lang')}>
                
                <Text style={[styles.text, styles.servicename]}> Language</Text>
                </TouchableOpacity>
              </View>
             
              <View style={styles.services}>
                <Icons name="human-male" />
                <TouchableOpacity onPress={() => navigation.navigate('Ourteams')} >
                <Text style={[styles.text, styles.servicename]}>Our Member</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.services}>
                <Icons name="telephone" />
               <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
               <Text style={[styles.text, styles.servicename]}>  Contact</Text>
               </TouchableOpacity>
              </View>
              <View style={styles.services}>
                <Icons name="file-download" />
                <TouchableOpacity onPress={() => navigation.navigate('Downloads')}>
                <Text style={[styles.text, styles.servicename]}>  Downloads</Text>
                </TouchableOpacity>
                
              </View>
              <View style={styles.services}>
                <Icons name="exclamationcircle" />
                <TouchableOpacity onPress={() => navigation.navigate('Lang')}>
                <Text style={[styles.text, styles.servicename]}> About Us</Text>
                </TouchableOpacity>
              
              </View>

              <View style={styles.services}>
                <Icons name="images" />

                <TouchableOpacity onPress={() => navigation.navigate('Lang')}>
                <Text style={[styles.text, styles.servicename]}> Gallery</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 16,
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    height:790
    
  },
  header: {
    backgroundColor: '#690c23',
    padding: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    fontSize: 24,
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
    alignItems: 'center',
    height: 'auto',
  },
  club: {
    fontSize: 24,
    padding: 16,
    paddingBottom: 6,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 16,
  },
  button1: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderRadius: 16,
    margin: 8,
  },
  text: {
    color: '#690c23',
  },
  all: {
    backgroundColor: "#690c23",
    flex: 1,
  },
  card2: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Android elevation
    marginTop: 10,
  },
  services: {
    flexDirection: 'row',
    alignItems: "center",
  },
  servicename: {
    
    padding: 6,
    fontSize: 16,
    justifyContent: 'center',
  },
});

export default LoginRegister;
