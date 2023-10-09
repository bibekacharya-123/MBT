// import { View, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react';
// import Octicons from 'react-native-vector-icons/Octicons'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { StackNavigationProp } from '@react-navigation/stack';

// type RootStackParamList = {
//   Home: undefined;
//   Notification:undefined;
//   profile: undefined;
// };

// type HomeScreenProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'Home'>;
// };

// export default function Icons({ navigation }: HomeScreenProps) {
//   return (
//     <View style={styles.iconss}>
//       <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
//         <View style={{ marginRight: 7 }} >
//           <Octicons name="bell-fill" size={30} color="#ffff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('profile')}>
//         <View>
//           <MaterialCommunityIcons name='account-circle' size={35} color='#ffff' />
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   iconss: {
//     padding: 8,
//     margin: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'

//   }

// })