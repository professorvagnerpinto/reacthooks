/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * by: Vagner Pinto
 */

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import submitName from './src/components/submitName';

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
        </View>
    );
}

/*
    Exemplo de uso do useState
 */
const UsoDoUseStateScreen = ()=>{
    //state + seu setter = valor do state (na ordem de declaração)
    const [name, setName] = useState('Rafael');

    const handlerButtonClick = ()=>{
        submitName(name, setName); //manda como parâmetro o state e o seu setter
        /*
            Isso permite que um componente possa acessar a state de outro componente, ação que era proibida
            na versão com classes (tinha que utilizar as props para isso).
         */
    }

    return(
        <View style={styles.containerOutrasScreens}>
            <Text style={styles.text}>Bem vindo (a)</Text>
            <TextInput style={styles.textInput} value={name} onChangeText={text=>setName(text)} />
            <TouchableOpacity style={styles.button} onPress={handlerButtonClick}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

/*
    Exemplo de chamada de função
 */
const ChamadaDeFuncoesScreen = ()=>{
    //state + seu setter = valor do state (na ordem de declaração)
    const [msg, setMsg] = useState('Mostrar');
    const [mostrar, setMostrar] = useState(false);

    const handlerToogle = ()=>{
        setMostrar(!mostrar);
        console.log(mostrar);
        setMsg(mostrar ? 'Mostrar' : 'Ocultar');
    }

    return(
        <View style={styles.containerOutrasScreens}>
            <TouchableOpacity style={styles.button} onPress={handlerToogle}>
                <Text style={styles.textButton}>{msg}</Text>
            </TouchableOpacity>
            {mostrar && <Text>Exibindo um componente do tipo Text</Text>}
        </View>
    );
}

/*
    Função que inicializa a app.
 */
const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen" >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerLeft: null, title: 'Home', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="UsoDoUseStateScreen"
                    component={UsoDoUseStateScreen}
                    options={{title: 'Uso do UseState', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="ChamadaDeFuncoesScreen"
                    component={ChamadaDeFuncoesScreen}
                    options={{title: 'Chamada de Funcoes', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;

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
    },
    text:{
        fontSize:18
    },
    textInput:{
        width:200,
        borderBottomWidth:1,
        borderBottomColor:'red'
    },
    containerOutrasScreens:{
        flex:1,
        alignItems:'center',
        marginTop:20
    }
});
