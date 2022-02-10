import React, { useState, useContext } from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient";

import BottomButton from "./BottomButton";
import { StateContext } from "../provider/StateProvider";

import styles from "../styles";


export default function ({ team, navigation, teamName, numberOfWords }) {

    const state = useContext(StateContext)

    const [touch, setTouch] = useState(false)
    const [count, setCount] = useState(numberOfWords)

    const handleButtonClick = () => {
        setCount(count - 1)

        if (count === 1) {
            state.setWinner(teamName)
            navigation.navigate("GameOverScreen")
        }
    }


    return (
        <TouchableWithoutFeedback
            onPressIn={() => setTouch(true)}
            onPressOut={() => setTouch(false)}>
            <View style={styles.game_UI_container}>
                <View style={styles.game_UI_team_name}>
                    <Text style={styles.game_UI_text}>
                        {teamName}
                    </Text>
                </View>
                <LinearGradient
                    style={styles.game_UI_score}
                    colors={['#5770F0', "#E06993", '#FFDE2F']}
                    locations={[0.12, 0.52, 1]} start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Text style={styles.game_UI_text}>
                        {count}
                    </Text>
                </LinearGradient>
                <Text style={
                    [
                        styles.game_UI_text,
                        touch ? {} : { fontStyle: "italic" },
                        team === "down" ? { color: "black" } : {}
                    ]
                }>
                    {touch ? state.wordsList[count - 1] : "Touche pour voir le mot"}
                </Text>
                <BottomButton next={handleButtonClick}>
                    MOT TROUVÉ
                </BottomButton>
            </View>
        </TouchableWithoutFeedback>
    )
}