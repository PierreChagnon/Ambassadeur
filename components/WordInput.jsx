import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ placeholder, handleShuffle, handleErase, onChangeText, value, index, disableErase, displayShuffle = false }) {
    const state = useContext(StateContext)

    return (
        <View style={styles.word_input_container}>
            <TextInput
                value={value}
                style={styles.word_input}
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor="rgba(237, 255, 236, 0.5)"
                onChangeText={onChangeText}
            />
            <View style={styles.word_input_button_container}>
                {displayShuffle
                    ?
                    <TouchableOpacity
                        style={styles.shuffle_button}
                        onPress={() => {handleShuffle(index)}}
                    >
                        <Text style={styles.shuffle_button_text}>
                            S
                        </Text>
                    </TouchableOpacity>
                    :
                    null}
                <TouchableOpacity
                    disabled={disableErase}
                    style={[styles.erase_button, disableErase ? { backgroundColor: "#d9d9d9" } : ""]}
                    onPress={() => handleErase(index)} >
                    <Text style={styles.erase_button_text}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}