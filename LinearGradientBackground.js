import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles.js"

export default function ({ children }) {
    return (
        <LinearGradient colors={['#211f24', '#F7F0F5']} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.75 }} locations={[0.7, 0.7]} style={styles.container}>
            {children}
        </LinearGradient>
    )
}