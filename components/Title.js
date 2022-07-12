import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

export default function Title({ title }) {
    return (
        <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        color: '#FFFFFF',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        padding: 12,
    },

    titleView: {
        marginTop: 30,
        marginBottom: 20,
        maxWidth: '90%',
        width: 400
    },
});