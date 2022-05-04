import React from 'react';
import { View, Keyboard } from 'react-native';

import styles from "./styles.js"

export default function ({ children }) {
    //Astuce pour retirer le clavier lorsqu'on clique ailleurs.
    //Surtout pour la Scrollview de PlayerList
    //On ne peut pas l'envelopper d'une TouchableWithoutFeedback par exemple
    //Sinon le scroll bug
    const shouldSetResponse = () => true;
    const onRelease = () => (
        Keyboard.dismiss()
    );

    return (
        <View
            onResponderRelease={onRelease}
            onStartShouldSetResponder={shouldSetResponse}
            style={styles.container}
        >
            {children}
        </View>
    )
}