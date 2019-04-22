import {GET_MACHINE} from "../actions/types.js";

const initalState = {
    machine: []
};

export default function (state = initalState,action){
    switch(action.type)
    { 
        case GET_MACHINE:
            return{
                ...state,
                machine: action.payload
            };
        default:
            return state;
    }
}