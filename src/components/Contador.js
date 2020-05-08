import React, {useReducer} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const initialContagem = {
    count:0
}

const reducer = (state, action)=>{ //estado atual do state + qual action executar
    switch (action.type) {
        case 'add':
            return{...state, count: state.count+1};
        case 'minus':
            return{...state, count: state.count-1};
        case 'reset':
            return initialContagem;
    }
}

const Contador = ()=>{
    const [contagem, dispatchContagem] = useReducer(reducer, initialContagem);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {contagem.count}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{dispatchContagem({type:'add'})}}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{dispatchContagem({type:'minus'})}}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{dispatchContagem({type:'reset'})}}>
                <Text style={styles.textButton}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Contador;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        width:90,
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
        fontSize:20,
        fontWeight:'bold'
    }

});
