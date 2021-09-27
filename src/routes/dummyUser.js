let dummyUser = {
    name: 'UserName',
    email: 'email@gmail.com',
    password: 'Password123',
    company: 'company 1',
    token: 'abdcder0985djljsjkj38875',
    projects: [
        {
            name: 'Project_1',
            id: Number(new Date()),
            country: 'United States',
            status: 'Active',
            drawerOpen: false,
            states: [
                {   name: 'START', 
                    type: 'system',
                    onEnterFunctions: [
                        {
                            type: 'onEnterFunction', 
                            name: 'add_action_to_list', 
                            data: [
                                {actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio']}
                            ]
                        },
                        {
                            type: 'onEnterFunction', 
                            name: 'send_action_list', 
                            data: []
                        }
                    ], 
                    onInputFunctions: [
                        {
                            type: 'onInputFunction', 
                            name: 'branch', 
                            data: [
                                {actions: ['core', 'teo'], params: ['Response 1', 'Response 2']}
                            ]
                        },
                    ]
                },
                {   
                    name: 'END', 
                    type: 'system',
                    onEnterFunctions: [
                        {
                            type: 'onEnterFunction', 
                            name: 'add_action_to_list', 
                            data: [
                                {actions: ['END_CONVO', 'GET_INPUT'], params: ['Question.wav', 'audio ']}
                            ]
                        },
                        {
                            type: 'onEnterFunction', 
                            name: 'send_action_list', 
                            data: []
                        },
                    ]
                },
                {
                    name: 'Ask Question',
                    type: 'custom',
                    onEnterFunctions: [
                        {
                            type: 'onEnterFunction',
                            name: 'add_action_to_list',
                            data: [
                                {actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio']},
                            ]
                        },
                        {
                            type: 'onEnterFunction',
                            name: 'send_action_list',
                            data: [],
                        },
                    ],
                    onInputFunctions: [],
                },
                {
                    name: 'Response 1',
                    type: 'custom',
                    onEnterFunctions: [
                        {
                            type: 'onEnterFunction',
                            name: 'add_action_to_list',
                            data: [
                                {actions: ['play_video', 'GET_INPUT'], params: ['Question.wav', 'audio']},
                            ]
                        },
                        {
                            type: 'onEnterFunction',
                            name: 'transition',
                            states: ['END', 'START'],
                        },
                    ],
                    onInputFunctions: [],
                }
            ],
            commands: [
                {name: 'NO_MATCH', phrases: [{language: 'English', audio: null, text: ''}]},
                {name: 'NO_INPUT', phrases: [{language: 'English', audio: null, text: ''}]},
                {name: 'play_audio', phrases: [{language: 'English', audio: null, text: ''}]},
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
        },
    ]
}

export default dummyUser;