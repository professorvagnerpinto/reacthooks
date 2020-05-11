/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/*
    Screen Home.
 */
const HomeScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('UsoDoUseStateScreen')}>
                <Text style={styles.textButton}>Uso do useState</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ChamadaDeFuncoesScreen')}>
                <Text style={styles.textButton}>Chamada de funções</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('UseMemoScreen')}>
                <Text style={styles.textButton}>Uso de useMemo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('UseEffectComFetch')}>
                <Text style={styles.textButton}>Uso de useEffect com fetch</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
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
