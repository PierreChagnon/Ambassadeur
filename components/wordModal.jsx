import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, Pressable, Modal } from 'react-native';

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
            timeout = setTimeout(() => { handleCloseModal() }, 6000)
        }

        return () => { clearTimeout(timeout) }
    }, [visible]);


    if (!fontsLoaded) {
        return <View />
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
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
                    minHeight: "35%"
                }}>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <CustomText color="#127299" lineHeight={24}>Bravo !</CustomText>
                        <CustomText color="#127299" lineHeight={24}>Le prochain mot est :</CustomText>
                    </View>
                    <Text allowFontScaling={false} style={{ textAlign: "center", fontSize: 36, fontFamily: "Candela", color: "#127299" }}>
                        {children}
                    </Text>
                    <BottomButton width={150} next={() => handleCloseModal()}>{buttonText}</BottomButton>
                </View>
            </View >
        </Modal>
    )
}