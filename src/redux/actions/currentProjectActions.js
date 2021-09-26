import { ADD_STATE, ADD_ACTION, ADD_COMMAND, ADD_TAB, CLOSE_TAB, SET_CURRENT_TAB, TOGGLE_DRAWER, SET_CURRENT_PROJECT } from "./currentProjectTypes";

export const setProject = (project) =>{
    return {
        type: SET_CURRENT_PROJECT,
        payload: {
            project
        }
    }
}
export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER,
    }
}
export const addState = (state) => {
    return {
        type: ADD_STATE,
        payload: {
            state: state
        }
    }
}

export const addCommand = (command) => {
    return {
        type: ADD_COMMAND,
        payload: {
            command: command
        }
    }
}

export const addAction = (action) => {
    return {
        type: ADD_ACTION,
        payload: {
            action: action
        }
    }
}

export const addTab = (tab) => {
    return {
        type: ADD_TAB,
        payload: {
            tab
        }
    }
}

export const closeTab = (title) => {
    return {
        type: CLOSE_TAB,
        payload: {
            title
        }
    }
}

export const setCurrentTab = (title) => {
    return {
        type: SET_CURRENT_TAB,
        payload: {
            title
        }
    }
}