import { ADD_STATE, ADD_ACTION, ADD_COMMAND } from "./currentProjectTypes";

export const addState = (value) => {
    return {
        type: ADD_STATE,
        payload: {
            state: value
        }
    }
}

export const addCommand = (value) => {
    return {
        type: ADD_COMMAND,
        payload: {
            command: value
        }
    }
}

export const addAction = (value) => {
    return {
        type: ADD_ACTION,
        payload: {
            action: value
        }
    }
}