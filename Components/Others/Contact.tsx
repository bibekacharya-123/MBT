import React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Icons from "./Icons";
import Mat from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Contact() {
    return (
        <SafeAreaView style={styles.all}>
            <ScrollView>
                <View>
                    <StatusBar backgroundColor="#690c23" barStyle="light-content" />
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Mat name='arrow-left-bold-box' size={30} color="#ffff" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>  Contact</Text>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.card1}>
                            <Text style={styles.club}>
मेरो धरती
</Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>Reach Our Customer Service.</Text>
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.icons}>
                                <Icons name="telephone" />
                                <Text style={styles.textIcon}>Call Us</Text>
                            </View>
                            <View style={styles.icons}>
                                <Icons name="email-open" />
                                <Text style={styles.textIcon}>Email Us</Text>
                            </View>
                            <View style={styles.icons}>
                                <Icons name="chatbox" />
                                <Text style={styles.textIcon}>Chat</Text>
                            </View>
                        </View>
                        <View style={styles.h2}>
                            <Text style={styles.h2text}>Quick Contact</Text>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.title}>Name<Text style={styles.star}>*</Text></Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput style={styles.placeholder} placeholder="Enter Full Name Here"></TextInput>
                            </View>
                            <View>
                                <Text style={styles.title}>Phone Number<Text style={styles.star}>*</Text></Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput style={styles.placeholder} placeholder="Enter Phone Number"></TextInput>
                            </View>

                            <View>
                                <Text style={styles.title}>Message<Text style={styles.star}>*</Text></Text>
                            </View>


                            <View style={styles.box}>
                                <TextInput style={styles.placeholder} placeholder="Enter Your Message"></TextInput>
                            </View>

                           <View style={styles.submit}>
                           <TouchableOpacity>
                           <View style={styles.button}>
                                    <Text style={styles.buttontext}>Submit</Text>
                                </View>
                           </TouchableOpacity>
                           </View>
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
        padding: 16,
        borderTopEndRadius: 16,
        borderTopLeftRadius: 16,

    },
    header: {
        backgroundColor: '#690c23',
        padding: 20,
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white'
    },
    card1: {
        backgroundColor: '#690c23',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        height: 180,
    },
    club: {
        fontSize: 28,
        paddingTop: 48,
        paddingBottom: 6,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    all: {
        backgroundColor: "#690c23"
    },
    buttons: {

        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    icons: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Android elevation
        height: 120,
        width: 106,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textIcon: {
        color: "#690c23",
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'roboto'
    },
    h2: {
        backgroundColor: '#EEEEEE',
        padding: 20,
        alignItems: 'center',
        marginTop: 5
    },
    h2text: {
        fontSize: 24,
        color: "#690c23",
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        color: '#000000',
        marginTop: 10
    },
    star: {
        color: '#690c23'
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        margin: 4,
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    box: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        margin: 4,
        alignItems: 'flex-start',
        height: 120

    },
    placeholder: {
        fontSize: 16
    },
    bg: {
        color: '#FFFFFF'
    },
    button: {
        backgroundColor: '#690c23',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        margin: 4,
        width: 90,

        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'roboto'
    },
    submit: {
        alignItems  : 'center',
        padding: 10,
    }
})