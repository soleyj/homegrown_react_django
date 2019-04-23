import axios from "axios";

import { GET_MACHINE } from "./types";
import { tokenConfig } from "./auth";
import { returnErrors } from "./messages";
//GET SENSORsdsa

export const getMachine = () => (dispatch, getState) => {
  axios
    .get("/api/machine/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_MACHINE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
