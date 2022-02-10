import React from "react";
import { Text, View } from "react-native";

import styles from "../styles";

export default function () {
    return (
        <View style={styles.dragback}>
            {["", "", "", "", "", "", ""].map((item, i) => {
                return (
                    <View style={styles.dragback_line} key={i}>
                    </View>
                )
            })}
        </View>
    )
}