import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "../styles.js"

export default function ({ handleAddClick }) {

    const [translateY, setTranslateY] = useState(0);

    let y = 5;
    const move = () => {
        y = y - 0.5;
        setTranslateY(y)
        if (y > 0) {
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
        <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.8}
            style={[styles.floating_button, { transform: [{ translateY: translateY }] }]}
        >
            <Text allowFontScaling={false} style={{ color: "#127299", fontSize: 48, height: 60, }}>
                +
            </Text>
        </TouchableOpacity>
    )
}