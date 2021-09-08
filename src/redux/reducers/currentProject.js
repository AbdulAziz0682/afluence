import _ from 'lodash';
import { ADD_STATE, ADD_ACTION, ADD_COMMAND, ADD_TAB, CLOSE_TAB, SET_CURRENT_TAB } from "../actions/currentProjectTypes";

/* import actions from '../../assets/actions.svg';
import commond from '../../assets/commond.svg';
import states from '../../assets/states.svg'; */

const initialState = {
/*     expandableItems: [
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
    ], */
    states: [
        {name: 'Start'},
        {name: 'End'}
    ],
    commands: [
        {name: 'GET_INPUT'},
        {name: 'END_CONVO'},
        {name: 'PLAY_AUDIO'},
    ],
    actions: [
        {name: 'NOT_MATCH'},
        {name: 'NO_INPUT'}
    ],
    metrics: [
        {name: 'Classification Accuracy(QA)', value: 'X'},
        {name: 'Classification Accuracy(Live)', value: 'X'},
        {name: 'Uptime', value: 'X'},
        {name: 'Avg. Request per minute', value: 'X'},
        {name: 'Avg. latency', value: 'X'},
        {name: 'Max. latency', value: 'X'},
    ],
    billing: {
        currentBalance: 5000.00,
        totalCost: 10.00,
        date: new Date(),
        graphData: {
            //some data
        }
    },
    tabs: [

    ],
    currentTab: 0
}

function addState(state, action){
    let newState = _.cloneDeep(state);
    //newState.expandableItems[0].children.push(action.payload.state);
    newState.states.push(action.payload.state);
    return newState;
}
function addCommand(state, action){
    let newState = _.cloneDeep(state);
    //newState.expandableItems[2].children.push(action.payload.command);
    newState.commands.push(action.payload.command);
    return newState;
}
function addAction(state, action){
    let newState = _.cloneDeep(state);
    //newState.expandableItems[1].children.push(action.payload.action);
    newState.actions.push(action.payload.action);
    return newState;
}

function addTab(state, action){
    let newState = _.cloneDeep(state);
    newState.tabs.push({
        id: newState.tabs.length+1,
        title: action.payload.tab.title || `${Math.random()}`,
        type: action.payload.tab.type, //Can be dataFlow, state, command, action, metric or billing
        data: action.payload.tab.data
    });
    newState.currentTab = newState.tabs.length-1;
    return newState;
}

function closeTab(state, action){
    let newState = _.cloneDeep(state);
    let nextTab = _.findIndex(newState.tabs, {id: action.payload.id});
    if(nextTab < 0) nextTab += newState.tabs.length;
    console.log('CurrentTab', nextTab);
    newState.tabs = newState.tabs.filter(tab => tab.id !== action.payload.id);
    newState.currentTab = nextTab;
    return newState;
}

function setTab(state, action){
    let newState = _.cloneDeep(state);
    newState.currentTab = action.payload.index;
    return newState;
}
const currentProject = (state = initialState, action) => {
    switch(action.type){
        case ADD_STATE: return addState(state, action);
        case ADD_COMMAND: return addCommand(state, action);
        case ADD_ACTION: return addAction(state, action);
        case ADD_TAB: return addTab(state, action);
        case CLOSE_TAB: return closeTab(state, action);
        case SET_CURRENT_TAB: return setTab(state, action);
        default: return state;
    }
}

export default currentProject;