import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "../styles.js"

export default function ({ width = 300, next, children, height = 70 }) {
    const [translateY, setTranslateY] = useState(0);
    const w = width;

    let y = 5;
    const move = () => {
        y = y - 0.5;
        setTranslateY(y)
        if (y > 0) {
            requestAnimationFrame(move)
        }
    }

    const handlePressIn = () => {
        setTranslateY(5)
    }

    const handlePressOut = () => {
        requestAnimationFrame(move);
        next(); // props pour passer a la page suivante
    }
    return (
        <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={1}
        >
            <LinearGradient style={[styles.bottom_button, { transform: [{ translateY: translateY }], width: width, height: height }]} colors={['#5770F0', "#E06993", '#FFDE2F']} locations={[0.12, 0.52, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.button_text}>
                    {children}
                </Text>
            </LinearGradient>
            <LinearGradient style={[styles.bottom_button, { position: "absolute", top: 5, zIndex: -1, width: width, height: height }]} colors={['#1E35A8', "#9E2B53", '#CCAB00']} locations={[0.12, 0.52, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

            </LinearGradient>
        </TouchableOpacity>
    )
}