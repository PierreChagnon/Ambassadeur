import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "../styles.js"

export default function ({handleAddClick}) {

    const [translateY, setTranslateY] = useState(0);

    let y = 5;
    const move = () => {
        y = y - 0.5;
        setTranslateY(y)
        if(y>0){
            requestAnimationFrame(move)
        }
    }

    const handlePressIn = () => {
        setTranslateY(5);
        handleAddClick();
    }

    const handlePressOut = () => {
        requestAnimationFrame(move)
    }

    return (
        <TouchableOpacity style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            margin: 20,
        }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.8}
            >
            <LinearGradient colors={['#5770F0', "#E06993", '#FFDE2F']} locations={[0.12, 0.52, 1]} start={{ x: 1, y: 0 }} style={[styles.floating_button, { transform: [{ translateY: translateY }] }]} >
                <Text style={{ color: "white", fontSize: 48, backgroundColor: "transparent" }}>
                    +
                </Text>
            </LinearGradient>
            <LinearGradient colors={['#1E35A8', "#9E2B53", '#CCAB00']} locations={[0.12, 0.52, 1]} start={{ x: 1, y: 0 }} style={[styles.floating_button, { position: "absolute", top: 5, zIndex: -1 }]} >
            </LinearGradient>
        </TouchableOpacity>
    )
}