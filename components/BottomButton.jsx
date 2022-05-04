import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

import styles from "../styles.js"

import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

export default function ({ width = 300, next, children, height = 90, absolutePosition = false }) {
    const window = useWindowDimensions();
    const [translateY, setTranslateY] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("#E92E2A")

    ///////////////////////////////////////////////////////////////////////////////////////
    //SOLUTION POUR RENDRE LA TAILLE DES BOUTONS RESPONSIVE SUIVANT LA TAILLE DE L'ECRAN///
    //Pour adapter height des boutons sur mon portable pour les autres écrans
    //812 étant MA window.height
    //Pareil pour width
    const [realHeight, setRealHeight] = useState(height * (window.height / 812))
    const [realWidth, setRealWidth] = useState(width * (window.width / 375))
    ///////////////////////////////////////////////////////////////////////////////////////

    const thickPosY = 10 - realHeight //Y pos of the button thickness

    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    let y = 5;
    const move = () => {
        y = y - 0.5;
        setTranslateY(y)
        if (y > 0) {
            requestAnimationFrame(move)
        }
    }

    const handlePressIn = () => {
        setTranslateY(10)
        setBackgroundColor("#A8211E")
    }

    const handlePressOut = () => {
        requestAnimationFrame(move);
        setBackgroundColor("#E92E2A")
        next(); // props pour passer a la page suivante
    }
    return (
        <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={1}
            style={[absolutePosition ? styles.bottom_button_container : "", { height: realHeight }]}
        >
            <View style={[styles.bottom_button, { transform: [{ translateY: translateY }], height: realHeight, backgroundColor: backgroundColor, width: realWidth }]} >
                <Text allowFontScaling={false} style={[styles.button_text, { fontFamily: "Megalopolis-Extra" }]}>
                    {children}
                </Text>
            </View>
            <View style={[styles.bottom_button_thick, { position: "relative", top: thickPosY, zIndex: -1, height: realHeight, width: realWidth }]} />
        </TouchableOpacity>
    )
}