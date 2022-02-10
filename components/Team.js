import React from "react";
import { View } from "react-native";
import TeamNameInput from "./TeamNameInput";
import Chip from "./Chip";

import styles from "../styles";

export default function ({ team, playerList }) {
    return (
        <View style={styles.team_container} pointerEvents={'box-none'}>
            <TeamNameInput team={team} />
            {playerList.map((name, i) => {
                return (
                    <Chip key={i} team={team}>{name}</Chip>
                )
            })}
        </View>
    )
}