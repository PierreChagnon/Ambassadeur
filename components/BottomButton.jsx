import React, { useState, useEffect, useRef } from "react";
import { Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

import styles from "../styles.js"

import { useFonts } from "expo-font";

//import AppLoading from "expo-app-loading";

export default function ({ width = 300, next, children, height = 90, absolutePosition = false, fontSize = 20 }) {
    const isMountedVal = useRef(1);
    const window = useWindowDimensions();
    const [translateY, setTranslateY] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("#E92E2A")
    let anim = null; //requestAnimattionFrame ID
    ///////////////////////////////////////////////////////////////////////////////////////
    //SOLUTION POUR RENDRE LA TAILLE DES BOUTONS RESPONSIVE SUIVANT LA TAILLE DE L'ECRAN///
    //Pour adapter height des boutons sur mon portable pour les autres écrans
    //812 étant MA window.height
    //Pareil pour width
    const [realHeight, setRealHeight] = useState(height * (window.height / 812))
    const [realWidth, setRealWidth] = useState(width * (window.width / 375))
    ///////////////////////////////////////////////////////////////////////////////////////

    const thickPosY = 10 - realHeight //Y pos of the button thickness

    let [fontsLoaded, error] = useFonts({
        "Megalopolis-Extra": require('../assets/fonts/MegalopolisExtra-Regular.otf')
    })

    useEffect(() => {
        isMountedVal.current = 1;
        return () => {

            isMountedVal.current = 0;
            //tester si la ligne qui suit est toujours utile
            //car le useRef fait peut etre deja tampon
            cancelAnimationFrame(anim) //Arrete l'animation quand le composant est démonté
        }
    }, [])

    if (!fontsLoaded) {
        //AppLoading bug : https://stackoverflow.com/questions/68823075/error-no-native-splash-screen-registered-for-given-view-controller-for-react-n
        return <View />
    }

    let y = 5;

    //RESOLU : https://akashmittal.com/cant-perform-react-state-update-unmounted-component/
    //EST la cause du bug cant perform react state update
    //En fait le state setTranslateY des boutons des fenetres modales
    //continue de se mettre a jour alors que la fenetre est démontée.
    const move = () => {
        if (isMountedVal.current) {
            y = y - 0.5;
            setTranslateY(y)
            if (y > 0) {
                anim = requestAnimationFrame(move)
            }
        }
    }

    const handlePressIn = () => {
        setTranslateY(10)
        setBackgroundColor("#A8211E")
    }

    const handlePressOut = () => {

        anim = requestAnimationFrame(move);

        setBackgroundColor("#E92E2A")
        next(); // props pour passer a la page suivante
    }
    return (
        <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={1}
            style={[absolutePosition ? styles.bottom_button_container : "", { height: realHeight }]}
        >
            <View style={[styles.bottom_button, { transform: [{ translateY: translateY }], height: realHeight, backgroundColor: backgroundColor, width: realWidth }]} >
                <Text allowFontScaling={false} style={[styles.button_text, { fontSize: fontSize, fontFamily: "Megalopolis-Extra", textAlign: "center" }]}>
                    {children}
                </Text>
            </View>
            <View style={[styles.bottom_button_thick, { position: "relative", top: thickPosY, zIndex: -1, height: realHeight, width: realWidth }]} />
        </TouchableOpacity>
    )
}