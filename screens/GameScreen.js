import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

export default function GameScreen({ userNumber, onGameOver }) {
    const generateRandomBetween = (min, max, exclude) => {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }

    let minBoundary = 1;
    let maxBoundary = 100;

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie!", "You know this is wrong...", [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [
            newRndNumber,
            ...prevGuessRounds
        ])
    }

    const guessRoundListlength = guessRounds.length;

    return (
        <View style={styles.gameContainer}>
            <View style={styles.titleView}>
                <Title title="Opponent's Guess" />
            </View>
            <NumberContainer numValue={currentGuess} />
            <Card>
                <View style={styles.gameBody}>
                    <InstructionText>Higher or Lower?</InstructionText>
                    <View style={styles.btnView}>
                        <View style={styles.btnItem}>
                            <PrimaryButton btn_title={<Ionicons name="md-remove" size={24} color="white" />} onPressFunction={nextGuessHandler.bind(this, 'lower')} />
                        </View>
                        <View style={styles.btnItem}>
                            <PrimaryButton btn_title={<Ionicons name="md-add" size={24} color="white" />} onPressFunction={nextGuessHandler.bind(this, 'greater')} />
                        </View>
                    </View>
                </View>
            </Card>

            <View style={styles.logStyle}>
                <View style={styles.titleView}>
                    <Title title="Log Rounds" />
                </View>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => {
                        return (
                            <>
                                <View style={styles.logItem}>
                                    <Text style={styles.rndNumber}>#{guessRoundListlength - itemData.index}</Text>
                                    <Text style={styles.currentGuess}><Text style={{ fontSize: 18, fontFamily: 'open-sans' }}>Opponent's Guess is: </Text>{itemData.item}</Text>
                                </View>
                            </>
                        )
                    }}
                    keyExtractor={(index) => {
                        return index;
                    }} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 18,
    },

    titleView: {
        marginBottom: 8
    },

    gameBody: {
        alignItems: 'center',
    },

    btnView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnItem: {
        marginHorizontal: 10,
        width: 120
    },

    logStyle: {
        flex: 1,
        flexGrow: 1,
        marginTop: 25,
    },

    logTitle: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'open-sans-bold',
        color: Colors.primary600,
    },

    logItem: {
        borderWidth: 0.7,
        borderColor: Colors.primary500,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 8,
        backgroundColor: Colors.secondary100,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

    rndNumber: {
        color: Colors.primary500,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },

    currentGuess: {
        color: Colors.primary500,
        fontSize: 25,
        fontFamily: 'open-sans-bold'
    },
});