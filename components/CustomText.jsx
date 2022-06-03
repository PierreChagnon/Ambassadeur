import React from "react";
import { Text, View } from "react-native"
import { useFonts } from "expo-font";

//import AppLoading from "expo-app-loading";

import styles from "../styles"

export default function ({ children, color = "#EDFFEC", lineHeight = 36 }) {

    let [fontsLoaded, error] = useFonts({
        "Candela": require('../assets/fonts/Candela-Book.otf')
    })

    if (!fontsLoaded) {
        //AppLoading bug : https://stackoverflow.com/questions/68823075/error-no-native-splash-screen-registered-for-given-view-controller-for-react-n
        return <View />
    }

    return (
        <Text allowFontScaling={false} style={[styles.text, { fontFamily: "Candela", color: color, lineHeight: lineHeight }]}>
            {children}
        </Text>
    )
}