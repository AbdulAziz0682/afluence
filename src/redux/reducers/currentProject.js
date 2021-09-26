import _ from 'lodash';
import { ADD_STATE, ADD_ACTION, ADD_COMMAND, ADD_TAB, CLOSE_TAB, SET_CURRENT_TAB, TOGGLE_DRAWER, SET_CURRENT_PROJECT} from "../actions/currentProjectTypes";

const initialState = {
    name: 'proj',
    id: Number(new Date()),
    country: 'United States',
    status: 'active',
    drawerOpen: false,
    states: [
        {   name: 'Start', 
            onEnterFunctions: [
                {type: 'onEnterFunction', name: 'add_action_to_list', data: [{actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio ']}]},
                {type: 'onEnterFunction', name: 'send_action_list', data: []},
                {type: 'onEnterFunction', name: 'transition', data: []}
            ], 
            onInputFunctions: [
                {type: 'onInputFunction', name: 'branch', data: [{actions: ['core', 'teo'], params: ['Response 1', 'Response 2']}]},
            ]
        },
        {   name: 'End',
            onEnterFunctions: [
                {type: 'onEnterFunction', name: 'add_action_to_list', data: [{actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio ']}]},
                {type: 'onEnterFunction', name: 'send_action_list', data: []},
                {type: 'onEnterFunction', name: 'transition', data: []}
            ], 
            onInputFunctions: [
                {type: 'onInputFunction', name: 'branch', data: [{actions: ['core', 'teo'], params: ['Response 1', 'Response 2']}]},
            ]
        }
    ],
    commands: [
        {name: 'NO_MATCH', phrases: [{language: 'English', audio: null, text: ''}]},
        {name: 'NO_INPUT', phrases: [{language: 'English', audio: null, text: ''}]},
        {name: 'Play_Audio', phrases: [{language: 'English', audio: null, text: ''}]},
    ],
    actions: [
        {name: 'GET_INPUT', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]},
        {name: 'END_CONVO', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]}
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
    tabs: {
        'Billing': {title: 'Billing', type: 'billing'},
        'Metrics': {title: 'Metrics', type: 'metrics'}
    },
    currentTab: 'Billing',
}

function setProject(state, action){
    let newState = _.cloneDeep(state);
    newState = {...newState, ...action.payload.project};
    return newState;
}
function toggleDrawer(state){
    let newState = _.cloneDeep(state);
    newState.drawerOpen = !state.drawerOpen;
    return newState;
}
function addState(state, action){
    let newState = _.cloneDeep(state);
    newState.states.push(action.payload.state);
    return newState;
}
function addCommand(state, action){
    let newState = _.cloneDeep(state);
    newState.commands.push(action.payload.command);
    return newState;
}
function addAction(state, action){
    let newState = _.cloneDeep(state);
    newState.actions.push(action.payload.action);
    return newState;
}

function addTab(state, action){
    let newState = _.cloneDeep(state);

    if(newState.tabs[action.payload.tab.title]){
        //Tab already present
        newState.currentTab = action.payload.tab.title;
        return newState;
    }
    newState.tabs[action.payload.tab.title] = {
        id: Number(new Date()),
        title: action.payload.tab.title || `${Math.random()}`,
        type: action.payload.tab.type, //Can be dataFlow, state, command, action, metric or billing
        data: action.payload.tab.data
    };
    newState.currentTab = action.payload.tab.title;
    return newState;
}

function closeTab(state, action){
    let newState = _.cloneDeep(state);
    let newtabs = _.omit(_.cloneDeep(newState.tabs), [action.payload.title]);
    newState.tabs = newtabs;
    //Setting current tab
    let alltabs = _.keys(newState.tabs);
    if(alltabs[2]) newState.currentTab = alltabs[alltabs.length-1];
    else newState.currentTab = 'Billing';
    return newState;
}

function setTab(state, action){
    let newState = _.cloneDeep(state);
    newState.currentTab = action.payload.title;
    return newState;
}

const currentProject = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_PROJECT: return setProject(state, action);
        case TOGGLE_DRAWER: return toggleDrawer(state);
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