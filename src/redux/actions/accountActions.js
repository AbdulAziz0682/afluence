import { LOGOUT, SET_USER, LOGIN } from "./accountTypes";

export const logout = () => {
    return {
        type: LOGOUT
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

export const login = (user) => {
    return {
        type: LOGIN,
        payload: {
            user
        }
    }
}