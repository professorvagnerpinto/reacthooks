/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * Exemplo do uso de useState, useRef, useEffect e Hook personalizado.
 * by: Vagner Pinto
 */

import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useCharLimit from '../hooks/useCharLimit';
import submitName from '../components/submitName';
import Contador from '../components/Contador';

/*
    Exemplo de uso do useState, useRef, useEffect e Hook personalizado.
 */
const UsoDoUseStateScreen = ()=>{
    //state + seu setter = valor do state (na ordem de declaração), como em: const [name, setName] = useState('Fulano');
    const [name, setName] = useCharLimit('', 6); //substituiu useState para utilizar o Hoook personalizado

    const textInput = useRef(); //usa a referência para o componente

    useEffect(()=>{
        textInput.current.focus();
    }, []); //o array vazio siginifica componentDidMount

    const handlerButtonClick = ()=>{
        submitName(name, setName); //manda como parâmetro o state e o seu setter
        /*
            Isso permite que um componente possa acessar a state de outro componente, ação que era proibida
            na versão com classes (tinha que utilizar as props para isso).
         */
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo (a)</Text>
            <TextInput ref={textInput} style={styles.textInput} value={name} onChangeText={text=>setName(text)} />
            <TouchableOpacity style={styles.button} onPress={handlerButtonClick}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
            <Contador />
        </View>
    );
}
export default UsoDoUseStateScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:10
    },
    text:{
        fontSize:18
    },
    textInput:{
        width:200,
        borderBottomWidth:1,
        borderBottomColor:'red'
    },
    button: {
        width:220,
        height:50,
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        margin: 20,
    },
    textButton:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    }
});
