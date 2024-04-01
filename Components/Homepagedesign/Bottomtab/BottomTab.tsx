import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Homescreen from '../Homescreen';
import NoticeScreen from '../../Notice/NoticeScreen';
import BecomeMemberScreen from '../../Becomeamember/BecomeMemberScreen';
import ProgramScreen from '../../Programs/ProgramScreen';
import OthersScreen from '../../Others/OthersScreen';
import Ionicc from 'react-native-vector-icons/Ionicons';
import Frontasome from 'react-native-vector-icons/FontAwesome';

import Fontawosome5 from 'react-native-vector-icons/FontAwesome5';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
type RootStackParamList = {
  Homescreen: undefined;
  NoticeScreen: undefined;
  BecomeMemberScreen: undefined;
  ProgramScreen: undefined;
  OthersScreen: undefined;
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Homescreen'>;
};

type NoticeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'NoticeScreen'>;
};

type BecomeMemberScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'BecomeMemberScreen'>;
};

type ProgramScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProgramScreen'>;
};

type OthersScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'OthersScreen'>;
};

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }: HomeScreenProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          backgroundColor: '#ffff',
          borderRadius: 10,
          height: 58,
          paddingBottom: insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={({ navigation }: HomeScreenProps) => ({
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
              <Ionicc name="home-sharp" color={color} size={size}   style={styles.icon}/>
            </TouchableOpacity>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Notice"
        component={NoticeScreen}
        options={({ navigation }: NoticeScreenProps) => ({
          tabBarIcon: ({ color, size }) => (
            <Frontasome name="file-text" color={color} size={size}  style={styles.icon}/>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Become a Member" 
        component={BecomeMemberScreen}
        options={({ navigation }: BecomeMemberScreenProps) => ({
          tabBarIcon: ({ color, size }) => (
            <Account name="account-circle" color={color} size={65}  style={styles.iconn} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Program"
        component={ProgramScreen}
        options={({ navigation }: ProgramScreenProps) => ({
          tabBarIcon: ({ color, size }) => (
            <Fontawosome5 name="toolbox" color={color} size={size}  style={styles.icon}/>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Others"
        component={OthersScreen}
        options={({ navigation }: OthersScreenProps) => ({
          tabBarIcon: ({ color, size }) => (
            <Entypo name="grid" color={color} size={40}  style={styles.icon} />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
const styles = StyleSheet.create({
  icon:{
    color:'#690c23'
  },
  iconn:{
    color:'#690c23',
    width: 70,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffff', 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    fontSize:65
     
  }

});
