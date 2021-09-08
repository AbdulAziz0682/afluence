import _ from 'lodash';
import { ADD_STATE, ADD_ACTION, ADD_COMMAND } from "../actions/currentProjectTypes";

import actions from '../../assets/actions.svg';
import commond from '../../assets/commond.svg';
import states from '../../assets/states.svg';

const initialState = {
    expandableItems: [
        {
            name: 'States',
            icon: states,
            expanded: true,
            children: [
                {name: 'Start'},
                {name: 'End'}
            ]
        },
        {
            name: 'Actions',
            icon: actions,
            expanded: true,
            children: [
                {name: 'GET_INPUT'},
                {name: 'END_CONVO'},
                {name: 'PLAY_AUDIO'},
            ]
        },
        {
            name: 'Commands',
            icon: commond,
            expanded: true,
            children: [
                {name: 'NOT_MATCH'},
                {name: 'NO_INPUT'}
            ]
        }
    ]
}

const currentProject = (state = initialState, action) => {
    switch(action.type){
        case ADD_STATE: return addState(state, action);
        case ADD_COMMAND: return addCommand(state, action);
        case ADD_ACTION: return addAction(state, action);
        default: return state;
    }
}

function addState(state, action){
    let newState = _.cloneDeep(state);
    newState.expandableItems[0].children.push(action.payload.state);
    return newState;
}
function addCommand(state, action){
    let newState = _.cloneDeep(state);
    newState.expandableItems[2].children.push(action.payload.command);
    return newState;
}
function addAction(state, action){
    let newState = _.cloneDeep(state);
    newState.expandableItems[1].children.push(action.payload.action);
    return newState;
}

export default currentProject;