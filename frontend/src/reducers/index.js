import {combineReducers} from 'redux';
import sensors from "./sensors";
import machine from "./machines";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
    sensors,
    machine,
    auth,
    messages,
    errors,
});