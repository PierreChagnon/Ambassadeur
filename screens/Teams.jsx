import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useWindowDimensions } from 'react-native';

import styles from '../styles';

import Team from '../components/Team';
import BottomButton from '../components/BottomButton';

import { StateContext } from '../provider/StateProvider.jsx';


export default function ({ navigation }) {

    const state = useContext(StateContext)
    const window = useWindowDimensions();

    const handleClick = () => {
        if (state.gameMaster) {
            navigation.navigate('WordsList')
        } else {
            navigation.navigate('GameSettings')
        }
    }

    return (
        <LinearGradient colors={['#F2BB08', '#127299']} start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }} locations={[0.5, 0.5]} style={styles.container}>
                <Team team="EQUIPE JAUNE" playerList={state.upTeam} />
                <Team team="EQUIPE BLEUE" playerList={state.downTeam} />
                <BottomButton absolutePosition next={handleClick}>CONTINUER</BottomButton>
        </LinearGradient>
    )
}