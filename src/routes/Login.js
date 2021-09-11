import React from 'react';
import { Button, Grid, InputAdornment, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import logo from '../assets/afluence.png';
import registerBackground from '../assets/registerBackground.png';
import account from '../assets/account.svg';
import key from '../assets/key.svg';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Redirect } from 'react-router';
import { login } from '../redux/actions/accountActions';

export default function Login(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let dispatch = useDispatch();
    //Form requirements
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your Password')
            .min(8, 'Enter at least 8 characters')
            .required('Password is required'),
        }
    )
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            let user = {
                name: 'Abdul Aziz',
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
                            {name: 'GET_INPUT', phrases: [{language: 'English', audio: null, text: ''}]},
                            {name: 'END_CONVO', phrases: [{language: 'English', audio: null, text: ''}]},
                            {name: 'PLAY_AUDIO', phrases: [{language: 'English', audio: null, text: ''}]},
                        ],
                        actions: [
                            {name: 'NOT_MATCH', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]},
                            {name: 'NO_INPUT', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]}
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
                    },
                    {
                        name: 'Project_2',
                        id: Number(new Date())+1,
                        country: 'United States',
                        status: 'In developent',
                        drawerOpen: false,
                        states: [
                            {name: 'Start'},
                            {name: 'End'}
                        ],
                        commands: [
                            {name: 'GET_INPUT', phrases: [{language: 'English', audio: null, text: ''}]},
                            {name: 'END_CONVO', phrases: [{language: 'English', audio: null, text: ''}]},
                            {name: 'PLAY_AUDIO', phrases: [{language: 'English', audio: null, text: ''}]},
                        ],
                        actions: [
                            {name: 'NOT_MATCH', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]},
                            {name: 'NO_INPUT', parameters: [{name: 'param1', dataType: 'string'}, {name: 'param2', dataType: 'number'}]}
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
                ]
            }
            dispatch(login(user));
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(loggedIn){
        return <Redirect push to="/projects" />
    }
    return (
        <Grid item className="mt-3">
            <form onSubmit={formik.handleSubmit} className="w-100">
            <Hidden smDown>
                <Grid container id="md" direction="row" className="border w-full self-center rounded-lg mt-3 p-3">
                    <Grid item className="flex flex-col justify-center p-6">
                        <div className="flex flex-row items-center">
                            <img src={logo} alt="afluence logo" width="50px"/>
                            <Typography variant="h3" color="primary" className="font-extrabold text-right">Amazethu</Typography>
                        </div>
                        <img src={registerBackground} alt="register background" style={{width: '300px'}} />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                            <Grid item className="mt-8 mb-4 flex flex-col items-center">
                                <Typography variant="h4" color="primary" className="font-extrabold">Welcome Back</Typography>
                                <hr className="border-2 w-full border-black" />
                            </Grid>
                            <Grid item className="w-full">
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    variant="outlined"
                                    label="Email"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={account} alt="account icon" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item className="w-full">
                                <TextField
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    variant="outlined"
                                    label="Password"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={key} alt="password key" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item className="w-full flex justify-center">
                                <Button variant="contained" color="primary" type="submit">Login</Button>
                            </Grid>
                            <Grid item className="w-full flex justify-center items-center">
                                <Typography variant="subtitle1">Don't have an account!</Typography>
                                <Link to="/register" className="font-bold">Register</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid container spacing={2} alignItems="center" direction="column" className="border self-center rounded-lg">
                        <Grid item className="w-80 md:w-full flex items-center p-6">
                            <img src={logo} alt="afluence logo" width="30%"/>
                            <Typography variant="h3" color="primary" className="font-extrabold text-right">Amazethu</Typography>
                        </Grid>
                        <Grid item className="w-80 md:w-full">
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                variant="outlined"
                                label="Email"
                                size="small"
                                InputProps={{
                                    startAdornment:(
                                        <InputAdornment postition="start">
                                            <img src={account} alt="account icon" />
                                        </InputAdornment>
                                    )
                                }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item className="w-80 md:w-full">
                            <TextField
                                fullWidth
                                type="password"
                                id="password"
                                name="password"
                                variant="outlined"
                                label="Password"
                                size="small"
                                InputProps={{
                                    startAdornment:(
                                        <InputAdornment postition="start">
                                            <img src={key} alt="password key" />
                                        </InputAdornment>
                                    )
                                }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item className="w-80 md:w-full flex justify-center">
                            <Button variant="contained" color="primary" type="submit">Login</Button>
                        </Grid>
                        <Grid item className="w-80 md:w-full flex justify-center items-center">
                            <Typography variant="subtitle1">Don't have an account!</Typography>
                            <Link to="/register" className="font-bold">Register</Link>
                        </Grid>
                    </Grid>
                </Hidden>
            </form>
        </Grid>
    )
}