import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/colors';

export default function Card({ children }) {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        // maxWidth: "95%",
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});