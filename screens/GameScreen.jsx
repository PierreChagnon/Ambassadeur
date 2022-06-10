import React, { useContext, useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from "react-native"

import GameScreenUI from "../components/GameScreenUI";
import GameModal from "../components/GameModal";
import ErrorModal from '../components/ErrorModal.jsx';
import WordModal from "../components/WordModal";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {
    const state = useContext(StateContext)

    const [reverse, setReverse] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [currentWord, setCurrentWord] = useState() //Le mot actuel que l'on passe au modal (la bonne réponse de la liste)
    const [currentTeam, setCurrentTeam] = useState() //Le nom de la team qui clic sur mot trouvé (pour le modal)
    const [yellowCount, setYellowCount] = useState(state.numberOfWords)
    const [blueCount, setBlueCount] = useState(state.numberOfWords)
    const [list, setList] = useState(state.wordsList)
    const [errorModalVisible, setErrorModalVisible] = useState(false)
    const [wordModalVisible, setWordModalVisible] = useState(false)
    const [nextWordToDisplay, setNextWordToDisplay] = useState()
    const [modalReverse, setModalReverse] = useState(false)

    useEffect(() => {
        if (!state.gameMaster) {
            setReverse(true)
        }
    }, [])

    useEffect(() => {
        const temp = [...state.wordsList]
        for (let i = 0; i < temp.length; i++) {
            const element = temp[i];
            if (element === "") {
                temp.splice(i, 1)
            }
        }
        setList(temp)
        setYellowCount(temp.length)
        setBlueCount(temp.length)
        state.setNumberOfWords(temp.length)
    }, [])

    const handlePickedWord = (word, team) => {
        if (team === "jaune") {
            if (word === currentWord) {
                setYellowCount(yellowCount - 1)
                if (yellowCount === 1) {
                    state.setWinner("jaune")
                    navigation.navigate("GameOverScreen")
                } else {
                    //word found
                    setNextWordToDisplay(list[yellowCount - 2])
                    setWordModalVisible(true)
                }
            } else {
                //ErrorModal should display
                setErrorModalVisible(true)
            }
        } else if (team === "bleue") {
            if (word === currentWord) {
                setBlueCount(blueCount - 1)
                if (blueCount === 1) {
                    state.setWinner("bleue")
                    navigation.navigate("GameOverScreen")
                } else {
                    //word found
                    setNextWordToDisplay(list[blueCount - 2])
                    setWordModalVisible(true)
                }
            } else {
                //ErrorModal should display
                setErrorModalVisible(true)
            }
        }
        handleCloseModal();
    }

    const handleButtonClick = (team, currentWord) => {
        if (state.gameMaster) {
            if (team === "jaune") {

                setYellowCount(yellowCount - 1)
                if (yellowCount === 1) {
                    state.setWinner("jaune")
                    navigation.navigate("GameOverScreen")

                }
            } else if (team === "bleue") {

                setBlueCount(blueCount - 1)
                if (blueCount === 1) {
                    state.setWinner("bleue")
                    navigation.navigate("GameOverScreen")
                }

            }
        } else {
            if (team === "jaune") {
                setModalReverse(true)
            } else {
                setModalReverse(false)
            }
            setCurrentWord(currentWord)
            setModalVisible(true)
            setCurrentTeam(team)
        }
    }

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    const handleCloseErrorModal = () => {
        setErrorModalVisible(false)
    }

    return (
        <LinearGradient
            colors={['#F2BB08', '#127299']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.5, 0.5]}
            style={styles.container}>
            <GameScreenUI list={list} handleButtonClick={handleButtonClick} count={yellowCount} reverse={reverse} numberOfWords={state.numberOfWords} teamName={"jaune"} navigation={navigation} />
            <GameScreenUI list={list} handleButtonClick={handleButtonClick} count={blueCount} numberOfWords={state.numberOfWords} teamName={"bleue"} navigation={navigation} />
            {modalVisible && <GameModal reverse={modalReverse} list={list} visible={modalVisible} handleCloseModal={handleCloseModal} handlePickedWord={handlePickedWord} currentWord={currentWord} currentTeam={currentTeam} />}
            {errorModalVisible && <ErrorModal reverse={modalReverse} visible={errorModalVisible} handleCloseModal={handleCloseErrorModal}>Ceci n’était pas le bon mot. Retournez auprès de votre équipe et demandez à l’ambassadeur précédent de reprendre son mime.</ErrorModal>}
            {wordModalVisible && <WordModal reverse={modalReverse} buttonText={"Fermer"} visible={wordModalVisible} handleCloseModal={() => setWordModalVisible(false)} >
                <Text allowFontScaling={false} style={{ textAlign: "center", fontSize: 36 }}>
                    {nextWordToDisplay}
                </Text>
            </WordModal>}
        </LinearGradient>
    )
}