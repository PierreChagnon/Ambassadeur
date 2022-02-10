import React, { useContext, useEffect, useState } from 'react';
import { Keyboard } from "react-native"

import LinearGradientBackground from './LinearGradientBackground.js';
import ListContainer from './ListContainer.js';
import BottomButton from './components/BottomButton.js';
import WordInput from './components/WordInput.js';
import DragBack from './components/DragBack.js';

import { StateContext } from './provider/StateProvider.js';

import shuffleArray from "./services/shuffleArray"

export default function ({ navigation }) {

    const state = useContext(StateContext)
    const [disableErase, setDisableErase] = useState(false)

    useEffect(() => {
        if (state.playerList.length < 5) {
            setDisableErase(true)
        } else {
            setDisableErase(false)
        }
    }, [state.playerList])


    const handleAddClick = () => {
        state.setPlayerList([...state.playerList, ""])
    }

    const handleInput = (value, i) => {
        const name = value;
        const list = [...state.playerList]
        list[i] = name
        state.setPlayerList(list)
    }

    const onBottomButtonClick = () => {
        //check if there is blanck input before continuing
        if (state.playerList.includes("")) {
            //On ne continue pas
        } else {
            const shuffledList = shuffleArray(state.playerList);

            //Cut the array in two parts
            const half = Math.ceil(shuffledList.length / 2);
            const firstHalf = shuffledList.slice(0, half)
            const secondHalf = shuffledList.slice(half)

            state.setUpTeam(firstHalf)
            state.setDownTeam(secondHalf)

            navigation.navigate('Teams');
        }
    }

    const handleErase = (index) => {
        Keyboard.dismiss();

        const list = [...state.playerList];
        list.splice(index, 1);
        state.setPlayerList(list);
    }

    return (
        <LinearGradientBackground>
            <DragBack />
            <ListContainer handleAddClick={handleAddClick}>
                {state.playerList.map((x, i) => {
                    return <WordInput
                        disableErase={disableErase}
                        index={i}
                        value={x}
                        key={i}
                        onChangeText={(value) => handleInput(value, i)}
                        placeholder={"nom du joueur"}
                        handleErase={handleErase} />
                })}
            </ListContainer>
            <BottomButton next={onBottomButtonClick} >
                FORMER LES EQUIPES
            </BottomButton>
        </LinearGradientBackground>
    )
}