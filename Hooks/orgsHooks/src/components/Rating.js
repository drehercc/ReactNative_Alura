import React from "react";
import { Image, StyleSheet, View } from "react-native";

import ratingStar from "../assets/estrela.png";
import emptyRatingStar from "../assets/estrelaCinza.png";


export default function Rating({
    //This notation always bothers me, but the name on the right is the one that will be used in the function.
    quantity : oldQuantity,
    editable = false,
    big = false,
}
){
const styles = stylesFunction(big);
return <View style = {styles.stars}>
        <Image source = {ratingStar} style = {styles.star}/>
        <Image source = {ratingStar} style = {styles.star}/>
</View>



}

const stylesFunction = (big) => StyleSheet.create({
    stars : {
        flexDirection : "row"
    },
    star : {
        width : big ? 24 : 12,
        height : big ? 24 : 12,
        marginRight : 2
    }

})