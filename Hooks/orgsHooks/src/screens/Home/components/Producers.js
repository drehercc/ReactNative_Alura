import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
//import { loadProducers } from "../../../services/loadData";
import Producer from "./Producer";
import useProducers from "../../../hooks/useProducers";

export default function Producers({ top: Top }) {
    const [title, list] = useProducers();
    /*const [title, setTitle] = useState('');
    const [list,setList] = useState([]);

    useEffect(() => {

        const loadedProducers = loadProducers();
        setTitle(loadedProducers.title);
        setList(loadedProducers.list);
    }, []);
    */

    const listTop = () => {
        return <>
            <Top />
            <Text style={styles.title}>{title}</Text>
        </>

    }


    return <View>
        <FlatList
            data={list}
            renderItem={({ item }) => <Producer {...item} />}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={listTop} />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }


})