import React, { useContext } from "react";
import { Text, View } from "react-native";

import LinearGradientBackground from "../LinearGradientBackground";
import BottomButton from "../components/BottomButton"

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {
    const state = useContext(StateContext)

    const handleReplay = () => {
        navigation.navigate("Teams");

        //Reset states
        state.setNumberOfWords(10);
        state.setDifficulty(1);
    }

    const handleQuit = () => {
        navigation.navigate("GameMasterHandler")

        //Reset states
        state.setGameMaster(null);
        state.setPlayerList(["", "", "", "", ""]);
        state.setUpTeamName("");
        state.setDownTeamName("");
        state.setWordsList(["", "", "", "", ""]);
        state.setNumberOfWords(10);
        state.setDifficulty(1);
    }

    return (
        <LinearGradientBackground>
            <View style={styles.gameover_top_container}>
                <Text style={styles.game_UI_text}>
                    L'équipe {state.winner} a gagné !
                </Text>
            </View>
            <View style={styles.gameover_bot_container}>
                <BottomButton next={handleReplay} width={150} height={100}>
                    Rejouer
                </BottomButton>
                <BottomButton next={handleQuit} width={150} height={100}>
                    Quitter
                </BottomButton>
            </View>
        </LinearGradientBackground>
    )
}