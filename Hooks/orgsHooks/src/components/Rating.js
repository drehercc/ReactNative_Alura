import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";




export default function Rating({
    //This notation always bothers me, but the name on the right is the one that will be used in the function.
    quantity: oldQuantity,
    editable = false,
    big = false,
}
) {

    const [quantity, setQuantity] = useState(oldQuantity);

    const RenderStars = () => {

        const starList = [];

        for (let i = 0; i < 5; i++) {
            starList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    filled={i < quantity}
                    big={big}
                />
            );
        }

        return starList;
    };



    return <View style={styles.stars}>
        <RenderStars />
    </View>



}

const styles = StyleSheet.create({
    stars: {
        flexDirection: "row"
    }
})

