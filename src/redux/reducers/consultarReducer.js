import {CONSULTA_DATA_SUCCESS, CONSULTA_DATA_ERROR} from '../types';

const initialState = {
    date: []
}

export default function cosultarReducer(state = initialState, action){
    switch (action.type) {
        case CONSULTA_DATA_SUCCESS:
            return{
                ...state, data: action.payload
            }
        case CONSULTA_DATA_ERROR:
            return {
                ...state, error: action.payload.error, data: []
            }
        default:
            return state
    }
}