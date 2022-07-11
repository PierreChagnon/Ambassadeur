import React, { useContext, useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";

import BottomButton from "../components/BottomButton"
import CustomText from "../components/CustomText";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {
    const state = useContext(StateContext)

    const handleReplay = () => {
        navigation.navigate("Teams");
        state.setWordsList(["", "", "", "", ""]);
        state.setNumberOfWords(10);
        state.setDifficulty(1);
    }

    const handleQuit = () => {
        navigation.navigate("GameMasterHandler")
        state.setWordsList(["", "", "", "", ""]);
        state.setNumberOfWords(10);
        state.setDifficulty(1);
        state.setPlayerList(["", "", "", ""]);

    }

    return (
        <View style={[styles.gameover_container, state.winner === "jaune" ? { backgroundColor: "#F2BB08" } : {}]}>
            <View style={styles.gameover_top_container}>
                {
                    state.winner === "jaune"
                        ?
                        <Image resizeMode='contain' source={require("../assets/trophy_yellow.png")} />
                        :
                        <Image resizeMode='contain' source={require("../assets/trophy_blue.png")} />
                }
                <CustomText >
                    L'ÉQUIPE {state.winner.toUpperCase()} A GAGNÉ !
                </CustomText>
                <View style={{ borderColor:"#EDFFEC", borderBottomWidth: 2, borderTopWidth: 2, height: "60%" }}>
                    <ScrollView contentContainerStyle={{padding: 20}} >
                        {state.wordsList.reverse().map((word, i) => {
                            return <View><CustomText key={i}>{word}</CustomText></View> 
                        })}
                    </ScrollView>
                </View>
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