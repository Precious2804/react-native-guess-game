import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title'
import Colors from '../constants/colors';

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Title title="Correct Guess! Congratulations" />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.imageStyle} />
      </View>
      <View style={styles.gameMessage}>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text> </Text>
      </View>
      <View>
        <PrimaryButton btn_title="Start New Game" onPressFunction={onStartNewGame} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleView: {
    marginBottom: 30,
    alignItems: 'stretch'
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.primary600,
    overflow: 'hidden',
    marginBottom: 20
  },

  imageStyle: {
    width: "100%",
    height: "100%"
  },

  gameMessage:{
    marginBottom: 25
  },

  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center'
  },

  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
    fontSize: 28
  },
});