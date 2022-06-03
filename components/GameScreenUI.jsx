import React, { useState, useContext, useEffect } from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native"

import BottomButton from "./BottomButton";
import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";


export default function ({ list, handleButtonClick, count, teamName, numberOfWords, reverse = false }) {

    const state = useContext(StateContext)
    const [touch, setTouch] = useState(true)

    //useEffect dans le cas du premier mot (count encore égale à numberOfWords)
    useEffect(() => {
        let timeout = null
        if (count === numberOfWords) {
            setTimeout(() => { setTouch(!touch) }, 4000)
        }
        return () => { clearTimeout(timeout) }
    }, [])

    //useEffect dans le cas des mots suivants
    useEffect(() => {
        let timeout = null
        if (state.gameMaster) {
            setTouch(true)
            setTimeout(() => { setTouch(false) }, 4000)
        }
        return () => { clearTimeout(timeout)}
    }, [count])



    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf'),
        "Candela": require('../assets/fonts/Candela-Book.otf'),
        "Candela-Italic": require('../assets/fonts/Candela-Italic.otf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }



    return (
        <TouchableWithoutFeedback
            onPressIn={() => setTouch(true)}
            onPressOut={() => setTouch(false)}
        >
            <View style={[styles.game_UI_container, reverse ? { transform: [{ rotate: "180deg" }] } : ""]}>
                <View style={styles.game_UI_score_container}>
                    <Text adjustsFontSizeToFit allowFontScaling={false} style={[styles.score_text, { fontFamily: "Megalopolis-Extra" }]}>
                        {count}
                    </Text>
                    <Text adjustsFontSizeToFit allowFontScaling={false} style={[styles.little_score_text, { fontFamily: "Megalopolis-Extra" }]}>
                        / {numberOfWords}
                    </Text>
                </View>
                <View style={{ height: 72 }}>
                    <Text allowFontScaling={false} style={
                        [
                            { fontSize: 36, color: "#EDFFEC", fontFamily: "Candela" },
                            touch ? {} : { fontSize: 18, fontFamily: "Candela-Italic", lineHeight: 72 }
                            //Ici je met la lineHeight à 72 pour que rien ne bouge lorsqu'on change de fontSize. 
                            //Elle est par défaut à 36 pour pouvoir "accueillir" une fontSize à 36 sans bouger les éléments autour.
                        ]
                    }>
                        {touch ? list[count - 1] : "Touche ici pour voir le mot"}
                    </Text>
                </View>
                <BottomButton next={() => { handleButtonClick(teamName, list[count - 1]) }}>
                    MOT TROUVÉ
                </BottomButton>
            </View>
        </TouchableWithoutFeedback>
    )
}