import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

import styles from '../styles';

import Team from '../components/Team';
import BottomButton from '../components/BottomButton';
import DragBack from '../components/DragBack';

import { StateContext } from '../provider/StateProvider.js';


export default function ({ navigation }) {

    const state = useContext(StateContext)

    const handleClick = () => {
        if (!state.upTeamName || !state.downTeamName) {
            //if teamName are empty strings
        } else {
            if (state.gameMaster) {
                navigation.navigate('WordsList')
            } else {
                navigation.navigate('GameSettings')
            }
        }

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient colors={['#211f24', '#F7F0F5']} start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }} locations={[0.5, 0.5]} style={styles.container}>
                <DragBack/>
                <View style={{ alignItems: "center" }} >
                    <Team team="up" playerList={state.upTeam} />
                    <BottomButton width={200} next={handleClick}>CONTINUER</BottomButton>
                    <Team team="down" playerList={state.downTeam} />
                </View>

            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}