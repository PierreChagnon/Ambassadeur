import React from "react";
import { View, ScrollView, Pressable } from "react-native";

import styles from "./styles";

export default function ({ children }) {
    return (
        <View style={styles.list_container}>
            <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="never" contentContainerStyle={styles.scrollview_inner} style={styles.scrollview_container} >
                {/*Pressable here is a trick to avoid not scrolling bug: https://stackoverflow.com/a/67028240 */}
               <Pressable>{children}</Pressable> 
            </ScrollView>          
        </View>
    )
}