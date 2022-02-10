import React from "react";
import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";

import styles from "./styles";

import FloatingButton from "./components/FloatingButton";


export default function ({ children, handleAddClick }) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.list_container}>
                <View style={styles.scrollview}>
                    <ScrollView >
                        {children}
                    </ScrollView>
                </View>
                <FloatingButton handleAddClick={handleAddClick} />
            </View>
        </TouchableWithoutFeedback>
    )
}