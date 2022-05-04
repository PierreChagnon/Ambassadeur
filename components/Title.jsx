import React from "react";
import { Text } from "react-native";

import styles from "../styles";

import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

export default function({ children }) {

    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Text allowFontScaling={false} style={[styles.page_title, {fontFamily: "Megalopolis-Extra"}]}>
            {children}
        </Text>
    )
}