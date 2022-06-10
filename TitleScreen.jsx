import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LinearGradientBackground from './LinearGradientBackground.jsx';

import styles from "./styles.js"

export default function ({ navigation }) {
    return (
        <LinearGradientBackground>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GameMasterHandler')} >
                {/* ou navigation.push (navigation a plusieurs méthode: goBack, popToTop, etc.) */}
                <Image style={{ width: "100%" }} resizeMode='contain' source={require("./assets/logo.png")} />
            </TouchableOpacity>
        </LinearGradientBackground>

    )
}
