import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import ratingStar from "../assets/estrela.png";
import emptyRatingStar from "../assets/estrelaCinza.png";

export default function ({ onPress, disabled = true, filled, big = false }) {


    const styles = stylesFunction(big);

    const getImage = () => {
        if (filled) {
            return ratingStar
        } else {
            return emptyRatingStar
        }
    }


    return <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
    >
        <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>

}


const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 24 : 12,
        height: big ? 24 : 12,
        marginRight: 2
    }

})