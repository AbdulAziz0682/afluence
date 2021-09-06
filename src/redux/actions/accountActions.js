import { SET_LOGGEDIN } from "./accountTypes";

export const setLoggedIn = (value) => {
    return {
        type: SET_LOGGEDIN,
        payload: {
            value
        }
    }
}