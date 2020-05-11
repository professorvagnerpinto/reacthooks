/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * Uso de useMemo()
 * by: Vagner Pinto
 */

import React, {useState, useMemo} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const UseMemoScreen = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const countString = (str)=>{
        console.log('executou countString');
        return str.length;
    }

    const countedName = useMemo(()=>countString(name), [name]);
    const countedEmail = useMemo(()=>countString(email), [email]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo (a)</Text>
            <Text style={styles.textLabel}>Nome:</Text>
            <TextInput style={styles.textInput} value={name} onChangeText={text=>setName(text)} />
            <Text>{countedName} letras</Text>
            <Text style={styles.textLabel}>Email:</Text>
            <TextInput style={styles.textInput} value={email} onChangeText={text=>setEmail(text)} />
            <Text>{countedEmail} letras</Text>
        </View>
    );
}
export default UseMemoScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20
    },
    text:{
        fontSize:18
    },
    textInput:{
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'red'
    },
    textLabel:{
        marginTop:20,
        marginLeft:20,
        alignSelf:'flex-start'
    }
});
