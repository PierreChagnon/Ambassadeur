import React, { useState, useContext } from 'react';
import { View } from 'react-native'


import BottomButton from '../components/BottomButton.jsx';
import NumberOfWordsButton from '../components/NumberOfWordsButton.jsx';
import LinearGradientBackground from '../LinearGradientBackground.jsx';
import Title from "../components/Title"

import pickRandomWords from '../services/pickRandomWords.js';

import { StateContext } from "../provider/StateProvider"
import styles from '../styles.js';


export default function ({ navigation }) {
    const state = useContext(StateContext)

    const [activeNumber, setActiveNumber] = useState(0);

    const handleActiveNumber = (i, value) => {
        if (activeNumber != i) {
            setActiveNumber(i);
        }
        state.setNumberOfWords(value)
    }

    const handleBottomButtonClick = () => {
        const list = pickRandomWords(state.numberOfWords)
        state.setWordsList(list)

        navigation.navigate('StartScreen')
    }

    return (
        <LinearGradientBackground>
            <View style={styles.header}>
                <Title>
                    NOMBRE DE MOTS
                </Title>
            </View>
            <View style={styles.body}>
                <View style={{display:"flex",height: "80%", flexWrap: "wrap", flexDirection: "row", justifyContent:"space-around", alignContent:"space-around" }}>
                    {[10, 15, 20, 25].map((number, i) => {
                        return (
                            <NumberOfWordsButton value={number} key={i} index={i} active={activeNumber} handleActive={handleActiveNumber}>
                                {number}
                            </NumberOfWordsButton>
                        )
                    })}
                </View>
            </View>
            <View style={styles.footer}>
                <BottomButton next={handleBottomButtonClick}>
                    COMMENCER
                </BottomButton >
            </View>
        </LinearGradientBackground>
    )
}