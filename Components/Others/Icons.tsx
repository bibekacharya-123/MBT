import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'; 
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

type IconsProps = {
  name: string;
};
const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'globe':
      return <Entypo name="globe" size={24} color="#690c23" />;

    case('human-male'):
      return <MaterialCommunityIcons name="human-male" size={26} color="#690c23" />;

      case('telephone'):
      return <Foundation name="telephone" size={30} color="#690c23" />;

      case('file-download'):
      return <FontAwesome5 name="file-download" size={24} color="#690c23" />;

      case('exclamationcircle'):
      return <AntDesign name="exclamationcircle" size={24} color="#690c23" />;

      case 'images':
      return <Entypo name="images" size={24} color="#690c23" />;

      case('email-open'):
      return <MaterialCommunityIcons name="email-open" size={30} color="#690c23" />;

      case('chatbox'):
      return <Ionicons name="chatbox" size={30} color="#690c23" />;

    default:
      return null;
    }
  };
  
  export default Icons;
  
