import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.aboutText}>This app is built with React Native JS. {"\n"} The app is meant to showcase my ability to use forms/form validation, basic React Native, and the components needed to make an app.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 30,
        textAlign: 'center',
        borderWidth: 5,
        // paddingTop: 10,
        // paddingBottom: 10,
        padding: 10,
        borderRadius: 10,
        marginTop: 50,
    }
})