import { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title';
import Colors from '../constants/colors';

export default function StartGameScreen({ onPicked }) {
    const [number, setNumber] = useState('');

    const inputtedHandler = (inputedNumber) => {
        setNumber(inputedNumber)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(number);

        if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
            Alert.alert('Invalid number', "Input must be a number between 1 and 99.", [{ text: 'Okay', style: 'default', onPress: resetHandler }])
            return;
        } else {
            onPicked(chosenNumber)
        }

    }
    const resetHandler = () => {
        setNumber('')
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
                <View style={styles.container}>
                    <Title title="Number Guessing Game" />
                    <Card>
                        <View style={styles.inputView}>
                            <InstructionText>Enter a Number Here</InstructionText>
                            <TextInput
                                style={styles.numberInput}
                                maxLength={2}
                                keyboardType="number-pad"
                                value={number}
                                onChangeText={inputtedHandler}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <View style={styles.btnItem}>
                                <PrimaryButton btn_title="Reset" onPressFunction={resetHandler} />
                            </View>
                            <View style={styles.btnItem}>
                                <PrimaryButton onPressFunction={confirmInputHandler} btn_title="Confirm" />
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 18,
    },

    inputView: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    numberInput: {
        height: 50,
        width: 75,
        fontSize: 40,
        color: Colors.secondary100,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondary100,
        textAlign: 'center',
        marginVertical: 8,
    },

    btnView: {
        flexDirection: 'row',
    },

    btnItem: {
        flex: 1,
        marginHorizontal: 10
    }
});