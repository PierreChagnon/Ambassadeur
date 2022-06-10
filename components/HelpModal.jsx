import React, { useEffect } from "react";
import { Modal, Pressable, ScrollView, View } from "react-native";

import BottomButton from "./BottomButton";
import CustomText from "./CustomText";

import styles from "../styles";

export default function ({ visible, handleCloseModal }) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.modal_container}>
                <View style={[styles.modal_view]}>
                    <ScrollView contentContainerStyle={{ padding: 10 }} style={{ marginBottom: 20, maxHeight: "65%", borderBottomWidth: 1, borderBottomColor: "#127299", borderTopWidth: 1, borderTopColor: "#127299" }}>
                        <CustomText color="#127299" lineHeight={24}>
                            Deux équipes s’affrontent lors d’une course de vitesse de mimes : {"\n"}{"\n"}Dans chaque équipe, un ambassadeur doit faire deviner un mot avec des gestes seulement. {"\n"}{"\n"}Dès qu’une équipe trouve un mot, elle envoie un nouvel ambassadeur chercher le mot suivant. {"\n"}{"\n"}La première équipe à aller au bout de la liste a gagné ! {"\n"}{"\n"}Si l’un d’entre vous souhaite être le maître du jeu, votre rôle sera de créer la liste de mots à deviner et de suivre l’avancement de la partie, sans y participer. Si tout le monde désire jouer, l’application jouera ce rôle et les mots seront générés automatiquement.
                        </CustomText>
                    </ScrollView>
                    <BottomButton width={150} next={() => handleCloseModal()}>
                        Fermer
                    </BottomButton>
                </View>
            </View>
        </Modal>
    )
}