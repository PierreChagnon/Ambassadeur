import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LinearGradientBackground from './LinearGradientBackground.jsx';

import styles from "./styles.js"

export default function ({ navigation }) {
    const [loaded, setLoaded] = useState(false)
    const [imgOpacity, setImgOpacity] = useState(0)
    let opacityInterval
    useEffect(() => {
        if (loaded) {
            opacityInterval = setInterval(() => {
                setImgOpacity(imgOpacity + 0.03)
            }, 50)
        }

        return () => clearInterval(opacityInterval)
    })

    return (
        <LinearGradientBackground>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GameMasterHandler')} >
                {/* ou navigation.push (navigation a plusieurs méthode: goBack, popToTop, etc.) */}
                <Image onLoad={() => setLoaded(true)} style={{ width: "100%", opacity: imgOpacity }} resizeMode='contain' source={require("./assets/logo.png")} />
            </TouchableOpacity>
        </LinearGradientBackground>

    )
}
