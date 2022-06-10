import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import Chip from "./Chip";
import Title from "./Title"

import styles from "../styles";

export default function ({ team, playerList }) {
    const [teamComp, setTeamComp] = useState([])
    
    //avoid black chip
    useEffect(() => {
        const list = [...playerList]
        for (let i = 0; i < playerList.length; i++) {
            const element = playerList[i];
            if (element === "") {
                list.splice(i, 1)
            }
        }
        setTeamComp(list)
    }, [])
    
    let xOffset = 30
    if (playerList.length > 6) {
        xOffset = -100
    } else if (playerList.length > 3) {
        xOffset = -30
    } else {
        xOffset = 30
    }
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    return (
        <View onLayout={(event) => {
            const { x, y, width, height } = event.nativeEvent.layout;
            setXPos(x)
            setYPos(y)
        }}
            style={styles.team_container}
            pointerEvents='box-none'>
            <Title>{team}</Title>
            {teamComp.map((name, i) => {

                let column
                let row = i

                if (i > 5) {
                    column = 2
                    row = 0
                } else if (i > 2) {
                    column = 1
                    row = 0
                } else {
                    column = 0
                }
                return (
                    <Chip yPos={60 * row + 50} xPos={column * 130 + xOffset} /*yPos={yPos * i + 50} xPos={xPos*i/1.5-50}*/ key={i} team={team}>{name}</Chip>
                )
            })}
        </View>
    )
}