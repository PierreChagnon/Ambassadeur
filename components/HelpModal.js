import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

import BottomButton from "./BottomButton";

import styles from "../styles";

export default function ({ visible, handleCloseModal }) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <Pressable onPress={() => handleCloseModal()} style={styles.modal_container}>
                <View style={styles.modal_view}>
                    <Text style={styles.modal_text}>
                        Deux équipes s’affrontent lors d’une course de vitesse de mimes : {"\n"}{"\n"}Dans chaque équipe, un ambassadeur doit faire deviner un mot avec des gestes seulement. {"\n"}{"\n"}Dès qu’une équipe trouve un mot, elle envoie un nouvel ambassadeur chercher le mot suivant. {"\n"}{"\n"}La première équipe à aller au bout de la liste a gagné !
                    </Text>
                    <BottomButton width={150} next={() => handleCloseModal()}>
                        Fermer
                    </BottomButton>
                </View>
            </Pressable>
        </Modal>
    )
}