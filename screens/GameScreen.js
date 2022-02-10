import React, { useContext } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import GameScreenUI from "../components/GameScreenUI";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {

    const state = useContext(StateContext)

    return (
        <LinearGradient
            colors={['#211f24', '#F7F0F5']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.5, 0.5]}
            style={styles.container}>
            <GameScreenUI numberOfWords={state.numberOfWords} team="up" teamName={state.upTeamName} navigation={navigation} />
            <GameScreenUI numberOfWords={state.numberOfWords} team="down" teamName={state.downTeamName} navigation={navigation} />
        </LinearGradient>
    )
}