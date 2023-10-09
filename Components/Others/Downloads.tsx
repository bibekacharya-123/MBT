import React from "react";
import { View,Text,StatusBar,StyleSheet, SafeAreaView, ScrollView ,TouchableOpacity} from "react-native";
import Icons from "./Icons";
import Mat from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Downloads() {
  return (
    <SafeAreaView style={styles.all}>
        <ScrollView>
        <View>
            <StatusBar backgroundColor="#690c23" barStyle="light-content" />
            <View style={styles.header}>
            <Mat name='arrow-left-bold-box' size={40} color="#ffff" />
                
                <Text style={styles.headerText}>Downloads</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
                <View style={styles.card2}>
                    <Icons name="file-pdf-o"/>
                    <View style={styles.middle}>
                        <Text style={styles.text}>Company Profile</Text>
                        <Text>Downloads count:1001</Text>
                    </View>
                    <Icons name="file-download2"/>
                </View>
            </View>

            
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE', 
        padding:16,
        borderTopEndRadius:16,
        borderTopLeftRadius:16,

      },
    header: {
        backgroundColor: '#690c23',
        padding: 16,
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color:'#FFFFFF'
    },
    all:{
        backgroundColor:"#690c23"
    },
    card2:{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Android elevation
        marginTop:10,
        flexDirection:'row',
    },

    text:{
        color:"#690c23",
        fontSize:20,
        fontWeight:'bold'
    },
    middle:{
        marginHorizontal:70
    }
})