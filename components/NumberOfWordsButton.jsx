import React, { useRef, useEffect } from "react";

import { Animated, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "../styles";

import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

export default function ({ children, index, handleActive, active, value }) {

    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <TouchableOpacity
            onPressIn={() => handleActive(index, value)}
            activeOpacity={1}
            style={{height:110, width:150, justifyContent:"center", alignItems: "center"}}
        >
            <View style={[styles.bottom_button, { width: 100, height: 100 }, active === index ? [styles.active, { backgroundColor: "#A8211E" }] : styles.inactive]}>
                <Text allowFontScaling={false} style={[styles.button_text, {fontFamily: "Megalopolis-Extra"}]}>
                    {children}
                </Text>
            </View>
            <View style={[styles.bottom_button_thick, { width: 100, height: 100 }, { position: "absolute", top: 10, zIndex: -1 }]}/>
        </TouchableOpacity>
    )
}