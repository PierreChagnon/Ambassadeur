import React, { useContext, useState } from 'react';
import { Text, View, Modal, Pressable } from 'react-native';

import BottomButton from './components/BottomButton.js';
import LinearGradientBackground from './LinearGradientBackground.js';
import HelpButton from './components/HelpButton.js';
import HelpModal from './components/HelpModal.js';

import { StateContext } from './provider/StateProvider.js';

import styles from "./styles.js"

export default function ({ navigation }) {

    const state = useContext(StateContext)
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
            <HelpModal visible={modalVisible} handleCloseModal={handleCloseModal}/>
            <View style={styles.container}>
                <HelpButton handleHelpClick={handleHelpClick} />
                <Text style={styles.text}>Voulez vous jouer avec un maître du jeu?</Text>
            </View>
            <View style={{ flex: 3, justifyContent: "space-around" }}>
                <BottomButton width={150} next={() => { handleGameMaster(true) }} >OUI</BottomButton>
                <BottomButton width={150} next={() => { handleGameMaster(false) }} >NON</BottomButton>
            </View>
        </LinearGradientBackground>
    )
}


