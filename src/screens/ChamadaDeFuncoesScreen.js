/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * Exemplo de chamada de função.
 * by: Vagner Pinto
 */

/*
    Exemplo de chamada de função
 */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ChamadaDeFuncoesScreen = ()=>{
    //state + seu setter = valor do state (na ordem de declaração)
    const [msg, setMsg] = useState('Mostrar');
    const [mostrar, setMostrar] = useState(false);

    const handlerToggle = ()=>{
        setMostrar(!mostrar);
        console.log(mostrar);
        setMsg(mostrar ? 'Mostrar' : 'Ocultar');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlerToggle}>
                <Text style={styles.textButton}>{msg}</Text>
            </TouchableOpacity>
            {mostrar && <Text>Exibindo um componente do tipo Text</Text>}
        </View>
    );
}
export default ChamadaDeFuncoesScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
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
