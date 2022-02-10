import React, { useState } from "react";
import Draggable from 'react-native-draggable';
import { Text, View, Dimensions } from "react-native";

import styles from "../styles";

export default function ({ team, children }) {
    const [color, setColor] = useState();
    const [textColor, setTextColor] = useState();

    const handlePositionY = (e, gestureState, bounds) => {
        if (gestureState.moveY > Dimensions.get('window').height / 2) {
            setColor("#211f24")
            setTextColor("#F7F0F5")
        } else {
            setColor("#F7F0F5")
            setTextColor("#211f24")
        }
    }
    return (
        <View style={styles.chip_container} pointerEvents={'box-none'}>
            <View>
                {/* x= 1/2 de la taille de draggable */}
                <Draggable z={2} x={-75} children onDragRelease={(e, gestureState, bounds) => handlePositionY(e, gestureState, bounds)}>
                    <View>
                        <View style={[styles.chip, color === undefined ? team === "up" ? { backgroundColor: "#F7F0F5" } : { backgroundColor: "#211f24" } : { backgroundColor: color }]} >
                            <Text style={color === undefined ? team === "up" ? { color: "#211f24" } : { color: "#F7F0F5" } : { color: textColor }}>{children}</Text>
                        </View>
                        <View style={[styles.chip, { position: "absolute", top: 3, zIndex: -1 }]}></View>
                    </View>
                </Draggable>
            </View>
        </View>
    )
}