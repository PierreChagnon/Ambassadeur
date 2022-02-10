import React, { useContext } from "react";
import { View, Text } from "react-native";
import { State, TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { StateContext } from "../provider/StateProvider";

import styles from "../styles";

export default function ({ placeholder, handleErase, onChangeText, value, index, disableErase }) {
    const state = useContext(StateContext)

    return (
        <View style={styles.word_input_container}>
            <TextInput
                value={value}
                style={styles.word_input}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                disabled={disableErase}
                style={[styles.erase_button, disableErase ? { backgroundColor: "#d9d9d9" } : ""]}
                onPress={() => handleErase(index)} >
                <Text style={styles.erase_button_text}>
                    +
                </Text>
            </TouchableOpacity>


        </View>
    )
}