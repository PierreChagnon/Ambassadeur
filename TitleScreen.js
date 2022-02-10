import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LinearGradientBackground from './LinearGradientBackground.js';

import styles from "./styles.js"

export default function ({ navigation }) {
    return (
        <LinearGradientBackground>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GameMasterHandler')} >
                {/* ou navigation.push (navigation a plusieurs méthode: goBack, popToTop, etc.) */}
                <Text style={styles.text}>L'ambassadeur</Text>
            </TouchableOpacity>
        </LinearGradientBackground>

    )
}
