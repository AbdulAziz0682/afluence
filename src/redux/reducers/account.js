import { SET_LOGGEDIN } from "../actions/accountTypes";

const initialState = {
    loggedIn: false
}

const account = (state = initialState, action) => {
    switch(action.type){
        case SET_LOGGEDIN: return {
            ...state,
            loggedIn: action.payload.value
        };
        default: return state;
    }
}

export default account;