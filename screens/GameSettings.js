import React, { useState, useContext } from 'react';


import BottomButton from '../components/BottomButton.js';
import GameSettingsTitle from '../components/GameSettingsTitle.js';
import NumberOfWordsButton from '../components/NumberOfWordsButton.js';
import LinearGradientBackground from '../LinearGradientBackground.js';
import DragBack from '../components/DragBack';

import pickRandomWords from '../services/pickRandomWords.js';

import { StateContext } from "../provider/StateProvider"


export default function ({ navigation }) {
    const state = useContext(StateContext)

    const [activeNumber, setActiveNumber] = useState(0);
    const [activeDifficulty, setActiveDifficulty] = useState(0);

    const handleActiveDifficulty = (i, value) => {
        if (activeDifficulty != i) {
            setActiveDifficulty(i);
        }
        state.setDifficulty(value)
    }

    const handleActiveNumber = (i, value) => {
        if (activeNumber != i) {
            setActiveNumber(i);
        }
        state.setNumberOfWords(value)
    }

    const handleBottomButtonClick = () => {
        const list = pickRandomWords(state.numberOfWords)
        state.setWordsList(list)

        navigation.navigate('GameScreen')
    }

    return (
        <LinearGradientBackground>
            <DragBack />
            <GameSettingsTitle>
                Difficulté
            </GameSettingsTitle>
            {[1, 2, 3, 4].map((number, i) => {
                return (
                    <NumberOfWordsButton value={number} key={i} index={i} active={activeDifficulty} handleActive={handleActiveDifficulty}>
                        {number}
                    </NumberOfWordsButton>
                )
            })}
            <GameSettingsTitle>
                Nombre de mots
            </GameSettingsTitle>
            {[10, 15, 20, 25].map((number, i) => {
                return (
                    <NumberOfWordsButton value={number} key={i} index={i} active={activeNumber} handleActive={handleActiveNumber}>
                        {number}
                    </NumberOfWordsButton>
                )
            })}
            <BottomButton next={handleBottomButtonClick}>
                COMMENCER !
            </BottomButton >
        </LinearGradientBackground>
    )
}