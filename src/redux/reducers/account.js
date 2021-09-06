import { SET_LOGGEDIN, SET_USER } from "../actions/accountTypes";

const initialState = {
    loggedIn: false,
    user: {
        name: 'Abdul Aziz',
        email: 'email@gmail.com',
        password: 'Password123',
        company: 'company 1',
        token: 'abdcder0985djljsjkj38875'
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