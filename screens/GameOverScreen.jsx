import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Image, ScrollView, Animated } from "react-native";

import BottomButton from "../components/BottomButton"
import CustomText from "../components/CustomText";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {
    const state = useContext(StateContext)
    const scrollAnim = useRef(new Animated.Value(0)).current

    const listHeight = 40 * state.wordsList.length

    // useEffect(() => {
    //     Animated.timing(scrollAnim, {
    //         toValue: -200,
    //         duration: 10000,
    //         useNativeDriver: false
    //     }).start();
    // }, [])

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

    const onScrollHandler = () => {
        //reset la valeur de "top" pour les items de la scrollview
        scrollAnim.setValue(0)
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
                <View
                    onLayout={(e) => {
                        const { x, y, width, height } = e.nativeEvent.layout;
                        Animated.timing(scrollAnim, {
                            toValue: -(listHeight - height),
                            duration: 10000,
                            useNativeDriver: false
                        }).start();
                    }}
                    style={{ borderColor: "#EDFFEC", borderBottomWidth: 2, borderTopWidth: 2, height: "60%", width: "80%" }}>
                    <ScrollView scrollEventThrottle={16} onScroll={onScrollHandler} style={{}} contentContainerStyle={{ padding: 20 }} >
                        {state.wordsList.reverse().map((word, i) => {
                            return (
                                <Animated.View key={i} style={{ marginBottom: 20, top: scrollAnim }}>
                                    <CustomText >{word}</CustomText>
                                </Animated.View>
                            )
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