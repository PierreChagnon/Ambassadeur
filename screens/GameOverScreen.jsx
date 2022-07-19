import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Image, ScrollView, Animated } from "react-native";

import BottomButton from "../components/BottomButton"
import CustomText from "../components/CustomText";
import Confetti from '../components/Confetti.jsx';


import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ navigation }) {
    const state = useContext(StateContext)
    const scrollAnim = useRef(new Animated.Value(0)).current
    const scrollRef = useRef();
    const listHeight = 60 * state.wordsList.length

    let currentAnimValue
    let animRunning = false

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

    const onScrollHandler = (e) => {
        if (animRunning) {
            animRunning = false
            //on remove le listener pour garder la valeur (currentAnimValue) et ne pas reset avant de ne plus écouter
            scrollAnim.removeAllListeners()
            //reset la valeur de "top" pour les items de la scrollview
            scrollAnim.setValue(0)
            //scroll a la position actuelle pour ne pas remonter en haut de la liste lorsqu'on commence le scroll
            scrollRef.current?.scrollTo({
                y: -currentAnimValue.value,
                animated: false,
            });
        }
    }

    return (
        <View style={[styles.gameover_container, state.winner === "jaune" ? { backgroundColor: "#F2BB08" } : {}]}>
            <Confetti />
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
                        animRunning = true
                        //listener pour récupérer le y du scroll auto pour reprendre le scroll ici lorsqu'on scroll (onScroll fired)
                        scrollAnim.addListener((value) => { currentAnimValue = value })
                        Animated.timing(scrollAnim, {
                            toValue: listHeight > height ? -(listHeight - height) : 0, //on scroll uniquement si lz list est plus longue que la view
                            duration: state.wordsList.length * 1000, //une seconde/mot pour garder une vitesse de défilement unique.
                            useNativeDriver: false
                        }).start();
                    }
                    }
                    style={{ borderColor: "#EDFFEC", borderBottomWidth: 2, borderTopWidth: 2, height: "60%", width: "80%" }}>
                    <ScrollView ref={scrollRef} scrollEventThrottle={16} onScroll={(e) => onScrollHandler(e)} style={{}} contentContainerStyle={{ padding: 20 }} >
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