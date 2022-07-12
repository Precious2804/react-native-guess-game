import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors';

export default function PrimaryButton({onPressFunction, btn_title}) {
    return (
        <View style={styles.btnOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.btnInnerContainer, pressed]
                        : styles.btnInnerContainer}
                onPress={onPressFunction}
                android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.btnText}>{btn_title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },

    btnInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 10,
        paddingHorizontal: 16,
        elevation: 2,
    },

    btnText: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    },
});
