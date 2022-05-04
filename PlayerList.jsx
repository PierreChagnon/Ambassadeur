import React, { useContext, useEffect, useState } from 'react';
import { Keyboard, View } from "react-native"

import LinearGradientBackground from './LinearGradientBackground.jsx';
import ListContainer from './ListContainer.jsx';
import BottomButton from './components/BottomButton.jsx';
import WordInput from './components/WordInput.jsx';
import Title from './components/Title.jsx';

import { StateContext } from './provider/StateProvider.jsx';

import shuffleArray from "./services/shuffleArray"
import styles from './styles.js';

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
        if (state.playerList.length <= 20)
            state.setPlayerList([...state.playerList, ""])
    }

    const handleInput = (value, i) => {
        const name = value;
        const list = [...state.playerList]
        list[i] = name
        state.setPlayerList(list)
    }

    const onBottomButtonClick = () => {

        //delete blanck input from player list and check if there is still at least 4 inputs.
        const list = [...state.playerList] //list est une copie du state sur laquelle on fera les opérations

        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            if (element === "") {
                list.splice(i, 1)
            }
        }

        if (list.length < 4) {
            //Do nothing
        } else {
            //update state
            //console.log(list)
            state.setPlayerList(list)

            //Shuffle list
            const shuffledList = shuffleArray(list);

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
            <View style={styles.header}>
                <Title>
                    LISTE DES JOUEURS
                </Title>
            </View>
            <View style={styles.body}>
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
            </View>
            <View style={styles.footer}>
                <BottomButton next={onBottomButtonClick} >
                    FORMER LES EQUIPES
                </BottomButton>
            </View>
        </LinearGradientBackground>
    )
}