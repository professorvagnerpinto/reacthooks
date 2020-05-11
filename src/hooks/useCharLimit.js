/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * Exemplo de Hook personalizado.
 * by: Vagner Pinto
 */

import {useState, useEffect} from 'react';

//um Hook personalizado
const useCharLimit = (initialState, limitChars)=>{
    const [value, setValue] = useState(initialState);

    useEffect(()=>{
        if(value.length > limitChars){
            setValue(value.substring(0, limitChars));
        }
    });

    return [value, setValue]; //retorna o state e seu setter
}
export default useCharLimit;
