import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";

import BottomButton from "../components/BottomButton"
import CustomText from "../components/CustomText";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {
    const state = useContext(StateContext)
    const [quitState, setQuitState] = useState()


    useEffect(() => {
        if (quitState) {
            navigation.navigate("GameMasterHandler")
            return handleQuit();
        } else if (quitState === false) {
            navigation.navigate("Teams");
            return handleReplay();
        }
    }, [quitState])

    const handleReplay = () => {
        setQuitState(false)

        //Reset states
        state.setNumberOfWords(10);
        state.setDifficulty(1);
        state.setWordsList(["", "", "", "", ""])
    }

    const handleQuit = () => {
        setQuitState(true)

        //Reset states
        state.setGameMaster(null);
        state.setPlayerList(["", "", "", "", ""]);
        state.setWordsList(["", "", "", "", ""]);
        state.setNumberOfWords(10);
        state.setDifficulty(1);
    }

    return (
        <View style={[styles.container, state.winner === "jaune" ? { backgroundColor: "#F2BB08" } : {}]}>
            <View style={styles.gameover_top_container}>
                <CustomText >
                    L'équipe {state.winner} a gagné !
                </CustomText>
            </View>
            <View style={styles.gameover_bot_container}>
                <BottomButton next={handleReplay} width={150} height={100}>
                    Rejouer
                </BottomButton>
                <BottomButton next={handleQuit} width={150} height={100}>
                    Quitter
                </BottomButton>
            </View>
        </View>
    )
}