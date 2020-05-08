
import {useState, useEffect} from 'react';

const useCharLimit = (initialState, limitChars)=>{
    const [value, setValue] = useState(initialState);

    useEffect(()=>{
        if(value.length > limitChars){
            setValue(value.substring(0, limitChars));
        }
    });

    return [value, setValue];
}
export default useCharLimit;
