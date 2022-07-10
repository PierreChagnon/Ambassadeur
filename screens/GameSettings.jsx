import React, { useState, useContext } from 'react';
import { View, SafeAreaView } from 'react-native'


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
    const [activeDifficulty, setActiveDifficulty] = useState(0)

    const handleActiveNumber = (i, value) => {
        if (activeNumber != i) {
            setActiveNumber(i);
        }
        state.setNumberOfWords(value)
    }

    const handleActiveDifficulty = (i, value) => {
        if (activeDifficulty != i) {
            setActiveDifficulty(i);
        }
        state.setDifficulty(i + 1) // +1 pour matcher avec les difficultés qu'on a définies ("facile" correspond a i = 0, +1 pour correspondre à la diffilcuté 1 de la liste)
    }
    
    const handleBottomButtonClick = () => {
        const list = pickRandomWords(state.numberOfWords)
        state.setWordsList(list)

        navigation.navigate('StartScreen')
    }

    return (
        <LinearGradientBackground>
            <SafeAreaView style={{ display: "flex", flex: 6 }}>
                <View style={{ alignItems: "center", display: "flex", flex: 1, justifyContent: "space-around" }}>
                    <Title>
                        DIFFICULTÉ
                    </Title>
                    <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignContent: "space-around" }}>
                        {["FACILE", "MOYEN", "DIFFICILE", "IMPOSSIBLE"].map((diff, i) => {
                            return (
                                <NumberOfWordsButton value={diff} key={i} index={i} active={activeDifficulty} handleActive={handleActiveDifficulty} width={150}>
                                    {diff}
                                </NumberOfWordsButton>
                            )
                        })}
                    </View>
                </View>
                <View style={{ alignItems: "center", display: "flex", flex: 1, justifyContent: "space-around" }}>
                    <Title>
                        NOMBRE DE MOTS
                    </Title>
                    <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignContent: "space-around" }}>
                        {[10, 15, 20, 25].map((number, i) => {
                            return (
                                <View key={i} style={{ alignItems: "center", width: "50%" }}>
                                    <NumberOfWordsButton value={number} key={i} index={i} active={activeNumber} handleActive={handleActiveNumber}>
                                        {number}
                                    </NumberOfWordsButton>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.footer}>
                <BottomButton next={handleBottomButtonClick}>
                    COMMENCER
                </BottomButton >
            </View>
        </LinearGradientBackground>
    )
}