import React from "react";
import { View, Text } from 'react-native';

import styles from "../styles";

export default function ({ children }) {
    return (
        <View style={styles.game_settings_title}>
            <Text style={styles.game_settings_title_text}>
                {children}
            </Text>
        </View>
    )
}