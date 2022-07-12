import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors';

export default function NumberContainer({numValue}) {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberValue}>{numValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: Colors.secondary100,
        padding: 30,
        borderRadius: 8,
        marginVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: "95%",
        width: 400
    },
    numberValue: {
        color: Colors.secondary100,
        fontFamily: 'open-sans-bold',
        fontSize: 80,
    }
});
