import { LOGOUT, SET_USER, LOGIN } from "../actions/accountTypes";

const initialState = {
    loggedIn: false,
    user: undefined
}

const account = (state = initialState, action) => {
    switch(action.type){
        case LOGOUT: return {
            ...initialState
        };
        case SET_USER: return {
            ...state,
            user: action.payload.value
        };
        case LOGIN: return {
            ...state,
            user: action.payload.user,
            loggedIn: true
        }
        default: return state;
    }
}

export default account;