import React, { useContext, useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import GameScreenUI from "../components/GameScreenUI";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {

    const [reverse, setReverse] = useState()

    const state = useContext(StateContext)

    useEffect(() => {
        if (!state.gameMaster) {
            setReverse(true)
        }
    })
    

    return (
        <LinearGradient
            colors={['#F2BB08', '#127299']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.5, 0.5]}
            style={styles.container}>
            <GameScreenUI reverse={reverse} numberOfWords={state.numberOfWords} teamName={"jaune"} navigation={navigation} />
            <GameScreenUI numberOfWords={state.numberOfWords} teamName={"bleue"} navigation={navigation} />
        </LinearGradient>
    )
}