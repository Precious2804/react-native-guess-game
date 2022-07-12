import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function Title({ title }) {
    const { width, height } = useWindowDimensions();

    const marginTopDist = height < 380 ? 10 : 40;
    return (
        <View style={[styles.titleView, { marginTop: marginTopDist }]}>
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
        marginBottom: 10,
        maxWidth: '85%',
        width: 400
    },
});