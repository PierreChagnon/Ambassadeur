import React, { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native"

import BottomButton from "../components/BottomButton";
import WordInput from "../components/WordInput";
import LinearGradientBackground from "../LinearGradientBackground";
import ListContainer from "../ListContainer";
import DragBack from '../components/DragBack';

import { StateContext } from "../provider/StateProvider";

export default function ({ navigation }) {

    const state = useContext(StateContext)
    const [disableErase, setDisableErase] = useState(false)

    useEffect(() => {
        if (state.wordsList.length < 5) {
            setDisableErase(true)
        } else {
            setDisableErase(false)
        }
    }, [state.wordsList])

    const handleWordInput = (value, i) => {
        const word = value;
        const list = [...state.wordsList]
        list[i] = word
        state.setWordsList(list)
    }

    const handleErase = (index) => {
        Keyboard.dismiss();

        const list = [...state.wordsList];
        list.splice(index, 1);
        state.setWordsList(list);
    }

    const handleAddClick = () => {
        state.setWordsList([...state.wordsList, ""])
    }

    const onBottomButtonClick = () => {
        if (state.wordsList.includes("")) {

        } else {
            state.setNumberOfWords(state.wordsList.length)

            navigation.navigate('GameScreen');
        }

    }

    return (
        <LinearGradientBackground>
            <DragBack />
            <ListContainer handleAddClick={handleAddClick}>
                {state.wordsList.map((word, i) => {
                    return (
                        <WordInput
                            disableErase={disableErase}
                            index={i}
                            value={word}
                            key={i}
                            onChangeText={(value) => handleWordInput(value, i)}
                            placeholder={"mot ou expression"}
                            handleErase={handleErase} />
                    )
                })}
            </ListContainer>
            <BottomButton next={onBottomButtonClick}>
                COMMENCER LA PARTIE
            </BottomButton>
        </LinearGradientBackground>
    )
}