import { combineReducers } from "redux";
import account from './account';
import currentProject from './currentProject';

const reducers = combineReducers({
    account,
    currentProject
});

export default reducers;