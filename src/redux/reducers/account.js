import { SET_LOGGEDIN, SET_USER } from "../actions/accountTypes";

const initialState = {
    loggedIn: false,
    user: {
        name: 'Abdul Aziz'
    }
}

const account = (state = initialState, action) => {
    switch(action.type){
        case SET_LOGGEDIN: return {
            ...state,
            loggedIn: action.payload.value
        };
        case SET_USER: return {
            ...state,
            user: action.payload.value
        }
        default: return state;
    }
}

export default account;