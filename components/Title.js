import React from 'react'
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

export default function Title({title}) {
    return (
        <Text style={styles.title}>{title}</Text>
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
        padding: 12
    }
});