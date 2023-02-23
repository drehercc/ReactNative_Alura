import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { loadProducers } from "../../../services/loadData";

export default function Producers({top : Top}) {

    const [title, setTitle] = useState('');
    const [list,setList] = useState([]);

    useEffect(() => {

        const loadedProducers = loadProducers();
        setTitle(loadedProducers.title);
        setList(loadedProducers.list);
    }, [])

    const listTop = ()=>{
        return <>
        <Top/>
        <Text style = {styles.title}>{title}</Text>
        </>

    }



    return <FlatList
    data={list}
    renderItem={({item : {name}})=><Text>{name}</Text>}
    keyExtractor={({name})=>name}
    ListHeaderComponent={listTop}/>

}

const styles = StyleSheet.create({
    title : {
        fontSize : 20,
        lineHeight : 32,
        marginHorizontal : 16,
        marginTop : 16,
        fontWeight : 'bold',
        color : '#464646'
    }


})