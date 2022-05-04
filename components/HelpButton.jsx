import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import CustomText from "./CustomText";

import styles from "../styles";

export default function ({handleHelpClick}) {
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
        setTranslateY(5)
    }

    const handlePressOut = () => {
        requestAnimationFrame(move);
        handleHelpClick(); // open modal
    }

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <View style={[styles.help_button, { transform: [{ translateY: translateY }] }]} >
                <CustomText color="#127299" >
                    Comment jouer?
                </CustomText>
            </View>
        </Pressable>
    )
}