import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Rating from "../../../components/Rating"


export default function Producer({ name, image, distance, rating }) {

    const [selected,setSelected] = useState(false);

    return <TouchableOpacity 
    style = {styles.card}
    onPress={()=>setSelected(!selected)}
    >
        <Image source={image} style = {styles.image} accessibilityLabel={name} />
        <View style = {styles.info}>
            <View>
                <Text style = {styles.name}>{name}</Text>
                <Rating quantity={rating} editable = {selected} big = {selected}/>
            </View>

            <Text style = {styles.distance}>{distance}</Text>
        </View>


    </TouchableOpacity>






}


const styles = StyleSheet.create({

    card : {
        backgroundColor : '#F6F6F6',
        marginVertical : 16,
        marginHorizontal : 16,
        borderRadius : 6,
        flexDirection : 'row',

        //Android
        elevation : 4

        //IOS
        /*
        shadowColor : '#000',
        textShadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity: 0.23,
        shadowRadius : 2.63
        */
    },
    image : {
        width : 48,
        height : 48,
        borderRadius : 6,
        marginVertical : 16,
        marginLeft : 16
    },
    info : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : "space-between",
        marginLeft : 8,
        marginVertical : 16,
        marginRight : 16,
    },
    name : {
        fontSize : 14,
        lineHeight : 22,
        fontWeight : "bold",

    },
    distance : {
        fontSize : 12,
        lineHeight : 19
    }

})