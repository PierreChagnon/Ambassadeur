import React, { useContext, useEffect, useState } from "react";
import { Keyboard, View } from "react-native"

import BottomButton from "../components/BottomButton";
import WordInput from "../components/WordInput";
import LinearGradientBackground from "../LinearGradientBackground";
import ListContainer from "../ListContainer";
import Title from "../components/Title"
import FloatingButton from "../components/FloatingButton";

import pickOneWord from "../services/pickOneWord";

import { StateContext } from "../provider/StateProvider";
import styles from "../styles";

export default function ({ navigation }) {

    const state = useContext(StateContext)
    const [disableErase, setDisableErase] = useState(false)

    useEffect(() => {
        if (state.wordsList.length <= 1) {
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

    const handldeShuffle = (index) => {
        Keyboard.dismiss();

        const list = [...state.wordsList];
        list[index] = pickOneWord() //Cette fonction retourne un mot au hasard dans la liste entière
        state.setWordsList(list);
    }

    const handleAddClick = () => {
        state.setWordsList([...state.wordsList, ""])
    }

    const onBottomButtonClick = () => {
        if (state.wordsList.includes("")) {
            const list = [...state.wordsList]
            const temp = list
            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                if (element === "") {
                    temp.splice(i, 1)
                }
            }
           
            if (temp.length > 0) {
                temp.reverse()
                state.setWordsList(temp)
                state.setNumberOfWords(temp.length)
                navigation.navigate('StartScreen');
            }
        } else {
            const temp = state.wordsList
            const reversed = temp.reverse()
            state.setWordsList(reversed)
            state.setNumberOfWords(state.wordsList.length)
            navigation.navigate('StartScreen');
        }

    }

    return (
        <LinearGradientBackground>
            <View style={styles.header}>
                <Title>
                    LISTE DE MOTS
                </Title>
            </View>
            <View style={styles.body}>
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
                                handleErase={handleErase}
                                handleShuffle={handldeShuffle}
                                displayShuffle />
                        )
                    })}
                </ListContainer>
                <View style={styles.floating_button_container}>
                    <FloatingButton handleAddClick={handleAddClick} />
                </View>
            </View>
            <View style={styles.footer}>
                <BottomButton next={onBottomButtonClick}>
                    COMMENCER LA PARTIE
                </BottomButton>
            </View>
        </LinearGradientBackground>
    )
}