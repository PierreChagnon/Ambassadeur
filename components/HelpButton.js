import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

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
            style={styles.help_button_container}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <View style={[styles.help_button, { transform: [{ translateY: translateY }] }]} >
                <Text style={{fontSize:18, fontWeight:"bold"}}>
                    ?
                </Text>
            </View>
            <View style={[styles.help_button, { position: "absolute", top: 4, zIndex: -1, backgroundColor: "#9b9b9b" }]} />
        </Pressable>
    )
}