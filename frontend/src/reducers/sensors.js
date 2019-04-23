import {GET_SENSOR,GET_CONFIG,ADD_CONFIG,GET_STATE_MACHINE} from "../actions/types.js";

const initalState = {
    sensors: [],
    config: [],
    state_machine:[]
};

export default function (state = initalState,action){
    switch(action.type)
    { 
        case GET_SENSOR:
            return{
                ...state,
                sensors: action.payload
            };
        case GET_CONFIG:
            return{
                ...state,
                config: action.payload
            };
        case ADD_CONFIG:
            return {
              ...state,
              config:  action.payload
            };
        case GET_STATE_MACHINE:
            return{
                ...state,
                state_machine: action.payload
            };
        default:
            return state;
    }
}