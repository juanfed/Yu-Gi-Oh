import axios from 'axios';
import {CONSULTA_DATA_SUCCESS, CONSULTA_DATA_ERROR, CONSULTA_DATAMY_SUCCESS, CONSULTA_DATAMY_ERROR} from '../types';

export function consultarAction(){
    return async(dispatch) =>{
        try {
            const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
            if(result.data){
                dispatch(consultaSuccess(result.data.data))
            }
        } catch (error) {
            dispatch(consultaError(error.result))
        }
    } 
}

const consultaSuccess = (data) =>({
    type: CONSULTA_DATA_SUCCESS,
    payload: data
});

const consultaError = (error) => ({
    type: CONSULTA_DATA_ERROR,
    payload: error
});

export function consultarMyCardsAction(){
    return async(dispatch) =>{
        try {
            const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
            if(result.data){
                dispatch(consultaMySuccess(result.data.data))
            }
        } catch (error) {
            dispatch(consultaMyError(error.result))
        }
    } 
}

const consultaMySuccess = (data) =>({
    type: CONSULTA_DATAMY_SUCCESS,
    payload: data
});

const consultaMyError = (error) => ({
    type: CONSULTA_DATAMY_ERROR,
    payload: error
});



