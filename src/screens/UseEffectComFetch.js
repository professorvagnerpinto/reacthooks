/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * Uso de useEffect() com fetch()
 * by: Vagner Pinto
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const UseEffectComFetch = ()=>{

    const [filmes, serFilmes] = useState([]);

    const getFilmes = async () => {
        const resp = await fetch('https://filmespy.herokuapp.com/api/v1/filmes');
        const json = await resp.json();
        serFilmes(json.filmes);
    }

    useEffect(()=>{
        getFilmes();
    }, []); //componentDidMount()

    return(
        <View style={styles.container}>
            {filmes.length <= 0 && <Text style={styles.text}>Buscando dados, aguarde...</Text>}
            <FlatList
                style={styles.list}
                data={filmes}
                keyExtractor={(item, index)=>item.titulo}
                renderItem={({item})=>{
                    return(
                        <View styles={styles.item}>
                            <Image source={{uri:item.poster.replace('http:', 'https:')}} styles={styles.img} />
                            <Text style={styles.title}>{item.titulo}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}
export default UseEffectComFetch;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20
    },
    text:{
        fontSize:18
    },
    list:{
        flex:1
    },
    item:{

    },
    img:{
        width:100,
        height:200,
        margin:10
    },
    title:{
        fontSize:17,
        marginTop:10
    }
});
