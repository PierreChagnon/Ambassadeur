import React, { useState } from "react";
import Draggable from 'react-native-draggable';
import { Text, View, Dimensions } from "react-native";

import styles from "../styles";

export default function ({ team, children, yPos, xPos }) {
    const [color, setColor] = useState();
    const [textColor, setTextColor] = useState();

    const handlePositionY = (e, gestureState, bounds) => {
        if (gestureState.moveY > Dimensions.get('window').height / 2) {
            setColor("#F2BB08")
            setTextColor("#127299")
        } else {
            setColor("#127299")
            setTextColor("#F2BB08")
        }
    }

    return (
        <Draggable z={2} x={xPos} y={yPos} onDragRelease={(e, gestureState, bounds) => handlePositionY(e, gestureState, bounds)}>
            <View>
                <View style={styles.chip} >
                    <Text style={color === undefined ? team === "EQUIPE JAUNE" ? { color: "#F2BB08" } : { color: "#127299" } : { color: textColor }}>{children}</Text>
                </View>
                <View style={[styles.chip, { position: "absolute", top: 3, zIndex: -1 }]} />
            </View>
        </Draggable>
    )
}