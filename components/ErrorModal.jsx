import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, Pressable } from 'react-native';

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import styles from '../styles';

import BottomButton from './BottomButton';
import CustomText from './CustomText';


export default function ({ buttonText = "Retour", children, visible, handleCloseModal, reverse = false }) {

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf'),
        "Candela": require('../assets/fonts/Candela-Book.otf'),
        "Candela-Italic": require('../assets/fonts/Candela-Italic.otf')
    })

    useEffect(() => {
        let timeout = null
        if (visible) {
            timeout = setTimeout(() => { handleCloseModal() }, 4000)
        }

        return () => { clearTimeout(timeout) }
    }, [visible]);


    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={[{ width: windowWidth, height: windowHeight }, styles.game_modal_container, reverse ? { transform: [{ rotate: "180deg" }] } : ""]}>
            <View style={{
                backgroundColor: "white",
                margin: 20,
                padding: 20,
                borderRadius: 4,
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                paddingBottom: 30,
                height: "35%"
            }}>
                <CustomText color="#127299" lineHeight={24}>{children}</CustomText>
                <BottomButton width={150} next={() => handleCloseModal()}>{buttonText}</BottomButton>
            </View>
        </View >
    )
}