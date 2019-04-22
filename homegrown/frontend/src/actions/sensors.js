import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {GET_SENSOR,GET_CONFIG,ADD_CONFIG,GET_STATE_MACHINE} from "./types";

//GET SENSOR

export const getSensors = () => dispatch => {
    axios.get("/api/sensor/newest/?id=2")
    .then(res =>{
        dispatch({
            type: GET_SENSOR,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
};


export const getConfig = () => dispatch => {
    axios.get("/api/config/newest/?id=2")
    .then(res =>{
        dispatch({
            type: GET_CONFIG,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
};

//add config

export const addConfig = config => (dispatch,getState) => {
    axios
    .post("/api/config/",config)
    .then(res =>{
        dispatch(createMessage({ addLead: "Config Added" }));
        dispatch({
            type: ADD_CONFIG,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
};


//get state machine

export const getStateMachine = () => dispatch => {
    axios.get("/api/state/newest/?id=2")
    .then(res =>{
        dispatch({
            type: GET_STATE_MACHINE,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
};