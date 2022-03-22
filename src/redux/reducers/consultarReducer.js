import {CONSULTA_DATA_SUCCESS, CONSULTA_DATA_ERROR, CONSULTA_DATAMY_SUCCESS, CONSULTA_DATAMY_ERROR} from '../types';

const initialState = {
    result: [],
    resultMy: []
}

export default function consultarReducer(state = initialState, action){
    switch (action.type) {
        case CONSULTA_DATA_SUCCESS:
            return{
                ...state, result: action.payload
            }
        case CONSULTA_DATA_ERROR:
            return {
                ...state, error: action.payload.error, result: []
            }
        case CONSULTA_DATAMY_SUCCESS:
            return {
                ...state, resultMy: action.payload
            }
        case CONSULTA_DATAMY_ERROR:
            return {
                ...state, error: action.payload.error, resultMy: []
            }
        default:
            return state
    }
}