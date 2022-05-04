import React, { useContext } from 'react';

import { Text, View } from "react-native";

import BottomButton from '../components/BottomButton';
import CustomText from '../components/CustomText';

import { StateContext } from '../provider/StateProvider.jsx';

import styles from '../styles';

export default function ({ navigation }) {
    const state = useContext(StateContext)
    return (
        <View style={[styles.container, { backgroundColor: "#F2BB08" }]}>
            {
                state.gameMaster
                    ?
                    <View style={styles.start_screen_text_container}>
                        <CustomText >
                            Le maitre du jeu garde le téléphone.
                        </CustomText>
                        <CustomText >
                            Les deux équipes se séparent et envoient leur ambassadeur.
                        </CustomText>
                        <CustomText >
                            Appuyer sur "Commencer" pour découvrir le premier mot.
                        </CustomText>
                    </View>
                    :
                    <View style={styles.start_screen_text_container}>
                        <CustomText >
                            Les deux équipes désignent leur ambassadeur.
                        </CustomText>
                        <CustomText >
                            Les deux équipes se séparent, les ambassadeurs restent.
                        </CustomText>
                        <CustomText >
                            Appuyer sur "Commencer" pour découvrir le premier mot.
                        </CustomText>
                    </View>
            }
            <BottomButton next={() => navigation.navigate('GameScreen')}>
                COMMENCER
            </BottomButton>
        </View>
    )
}