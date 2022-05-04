import React, { useContext } from "react";
import { TextInput } from "react-native";

import { StateContext } from '../provider/StateProvider.jsx';

import styles from "../styles";

export default function ({ team }) {
    const state = useContext(StateContext)

    const handleTeamName = (value) => {
        if (team === "up") {
            state.setUpTeamName(value)
        } else {
            state.setDownTeamName(value)
        }
    }

    return (
        <TextInput onChangeText={(value) => handleTeamName(value)} style={styles.team_text_input} autoCapitalize='characters' autoCorrect={false} placeholder="nom de l'équipe" maxLength={20}>

        </TextInput>
    )
}