import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";

import FloatingButton from "./components/FloatingButton";


export default function ({ children, handleAddClick }) {
    return (
        <View style={styles.list_container}>
            <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="never" contentContainerStyle={styles.scrollview_inner} style={styles.scrollview_container} >
                {children}
            </ScrollView>
            <View style={styles.floating_button_container}>
                <FloatingButton handleAddClick={handleAddClick} />
            </View>
        </View>
    )
}