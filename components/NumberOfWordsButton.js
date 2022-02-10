import React, { useState } from "react";

import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "../styles";

export default function ({ children, index, handleActive, active, value }) {

    return (
        <TouchableOpacity
            onPressIn={() => handleActive(index, value)}
            activeOpacity={1}
        >
            <LinearGradient style={[styles.number_of_words_button, active === index ? styles.active : styles.inactive]} colors={active === index ? ['#1E35A8', "#9E2B53", '#CCAB00'] : ['#5770F0', "#E06993", '#FFDE2F']} locations={[0.12, 0.52, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.button_text}>
                    {children}
                </Text>
            </LinearGradient>
            <LinearGradient style={[styles.number_of_words_button, { position: "absolute", top: 5, zIndex: -1 }]} colors={['#1E35A8', "#9E2B53", '#CCAB00']} locations={[0.12, 0.52, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

            </LinearGradient>
        </TouchableOpacity>
    )
}