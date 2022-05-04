import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Modal, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

import BottomButton from './components/BottomButton.jsx';
import LinearGradientBackground from './LinearGradientBackground.jsx';
import HelpButton from './components/HelpButton.jsx';
import HelpModal from './components/HelpModal.jsx';
import CustomText from './components/CustomText.jsx';

import { StateContext } from './provider/StateProvider.jsx';

import styles from "./styles.js"

export default function ({ navigation }) {
    const state = useContext(StateContext)

    // useEffect(() => {
    //     //Reset states
    //     state.setGameMaster(null);
    //     state.setPlayerList(["", "", "", "", ""]);
    //     state.setWordsList(["", "", "", "", ""]);
    //     state.setNumberOfWords(10);
    //     state.setDifficulty(1);
    // })



    const [modalVisible, setModalVisible] = useState(false)

    const handleGameMaster = (value) => {
        state.setGameMaster(value);
        navigation.navigate('PlayerList');
    }

    const handleHelpClick = () => {
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    return (
        <LinearGradientBackground>
            <HelpModal visible={modalVisible} handleCloseModal={handleCloseModal} />
            <View style={styles.container}>
                <CustomText >L'un d'entre vous souhaite-t-il jouer le rôle de maître du jeu?</CustomText>
            </View>
            <View style={{ flex: 3, justifyContent: "space-around", alignItems: "center" }}>
                <BottomButton width={140} next={() => { handleGameMaster(true) }} >OUI</BottomButton>
                <BottomButton width={140} next={() => { handleGameMaster(false) }} >NON</BottomButton>
                <HelpButton handleHelpClick={handleHelpClick} />
            </View>
        </LinearGradientBackground>
    )
}


