import React from "react";
import { Text } from "react-native"
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

import styles from "../styles"

export default function ({ children, color = "#EDFFEC", lineHeight = 36 }) {

    let [fontsLoaded, error] = useFonts({
        "Candela": require('../assets/fonts/Candela-Book.otf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Text allowFontScaling={false} style={[styles.text, { fontFamily: "Candela", color: color, lineHeight: lineHeight }]}>
            {children}
        </Text>
    )
}