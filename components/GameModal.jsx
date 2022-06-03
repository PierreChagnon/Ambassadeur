import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, Pressable } from 'react-native';

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import styles from '../styles';
import makeChoices from '../services/makeChoices';

import CustomText from './CustomText';
import BottomButton from './BottomButton';


export default function ({ currentWord, handlePickedWord, currentTeam, list, reverse = false }) {

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const choices = makeChoices(list, currentWord)

    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf'),
        "Candela": require('../assets/fonts/Candela-Book.otf'),
        "Candela-Italic": require('../assets/fonts/Candela-Italic.otf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={[{ width: windowWidth, height: windowHeight }, styles.game_modal_container, reverse ? { transform: [{ rotate: "180deg" }] } : ""]}>
            <View style={styles.game_modal_view}>
                <CustomText color="#127299" lineHeight={24}>Quel était le mot à trouver ?</CustomText>
                {choices.map((word, i) => {
                    return (
                        <BottomButton key={i} width={200} next={() => handlePickedWord(word, currentTeam)}>{word}</BottomButton>
                    )
                })}
            </View>
        </View>
    )
}