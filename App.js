/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * by: Vagner Pinto
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import UsoDoUseStateScreen from './src/screens/UsoDoUseState';
import ChamadaDeFuncoesScreen from './src/screens/ChamadaDeFuncoesScreen';
import UseMemoScreen from './src/screens/UseMemoScreen';
import UseEffectComFetch from './src/screens/UseEffectComFetch';

/*
    Função que inicializa o app.
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
                <Stack.Screen
                    name="UseMemoScreen"
                    component={UseMemoScreen}
                    options={{title: 'Uso de UseMemo', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="UseEffectComFetch"
                    component={UseEffectComFetch}
                    options={{title: 'Uso de effect com fetch', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
