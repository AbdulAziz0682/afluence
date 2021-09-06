import { SET_LOGGEDIN, SET_USER } from "./accountTypes";

export const setLoggedIn = (value) => {
    return {
        type: SET_LOGGEDIN,
        payload: {
            value
        }
    }
}

export const setUser = (value) => {
    return {
        type: SET_USER,
        payload: {
            value
        }
    }
}