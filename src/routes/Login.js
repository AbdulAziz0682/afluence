import React from 'react';
import { Button, Grid, InputAdornment, Paper, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import logo from '../assets/afluence.png';
import registerBackground from '../assets/registerBackground.png';
import account from '../assets/account.png';
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
        <Grid container item>
            <form onSubmit={formik.handleSubmit} className="w-full flex items-center justify-center">
            <Hidden smDown>
                <Grid container component={Paper} elevation={6} id="md" direction="row" className="border md:w-5/6 lg:w-156 self-center rounded-3xl mt-3">
                    <Grid item xs={6} className="flex flex-col justify-center items-center p-5 bg-gray-100 rounded-l-3xl">
                        <div className="flex flex-row items-center mt-9">
                            <img src={logo} alt="afluence logo" style={{width: 70}}/>
                            <Typography color="primary" className="font-extrabold text-4xl ml-2" style={{fontFamily: "'Montserrat', sans-serif"}}>amazethu</Typography>
                        </div>
                        <img src={registerBackground} alt="register background" style={{width: 250}} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" alignItems="center" justifyContent="center" className="p-6">
                            <Grid item className="flex flex-col items-center w-full">
                                <Typography color="primary" className="font-black uppercase text-2xl">Welcome Back !</Typography>
                                <hr className="border-b border-black w-11/12" />
                                <hr className="border-b border-black w-10/12 my-1" />
                                <hr className="border-b border-black w-9/12" />
                            </Grid>
                            <Grid container alignItems="center" direction="column" className="my-24">
                                <Grid item className="w-full my-2">
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        variant="standard"
                                        label="Email"
                                        size="small"
                                        InputProps={{
                                            startAdornment:(
                                                <InputAdornment postition="start">
                                                    <img src={account} alt="account icon" />
                                                </InputAdornment>
                                            ),
                                            endAdornment:(
                                                (formik.touched.email && Boolean(formik.errors.email)) &&
                                                <InputAdornment position="end">
                                                    <ReportProblemOutlinedIcon color="secondary" />
                                                </InputAdornment>
                                            )
                                        }}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                                <Grid item className="w-full my-2">
                                    <TextField
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        variant="standard"
                                        label="Password"
                                        size="small"
                                        InputProps={{
                                            startAdornment:(
                                                <InputAdornment postition="start">
                                                    <img src={key} alt="password key" />
                                                </InputAdornment>
                                            ),
                                            endAdornment:(
                                                (formik.touched.password && Boolean(formik.errors.password)) &&
                                                <InputAdornment position="end">
                                                    <ReportProblemOutlinedIcon color="secondary" />
                                                </InputAdornment>
                                            )
                                        }}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={8} className="flex flex-col items-center">
                                <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
                                <div className="w-80 flex justify-center items-center text-xs mt-2">
                                    <span>Don't have an account?</span>
                                    <Link to="/register" className="font-bold uppercase mx-1">Sign up</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid container spacing={2} alignItems="center" direction="column" className="self-center">
                        <Grid item className="w-80 flex items-center p-6">
                            <img src={logo} alt="logo" style={{width: 100}}/>
                            <Typography variant="h4" color="primary" style={{fontFamily: "'Montserrat', sans-serif"}}>amazethu</Typography>
                        </Grid>
                        <Grid container alignItems="center" direction="column" className="my-24" spacing={3}>
                            <Grid item className="w-80 my-2">
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    variant="standard"
                                    label="Email"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={account} alt="account icon" />
                                            </InputAdornment>
                                        ),
                                        endAdornment:(
                                            (formik.touched.email && Boolean(formik.errors.email)) &&
                                            <InputAdornment position="end">
                                                <ReportProblemOutlinedIcon color="secondary" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item className="w-80 my-2">
                                <TextField
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    variant="standard"
                                    label="Password"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={key} alt="password key" />
                                            </InputAdornment>
                                        ),
                                        endAdornment:(
                                            (formik.touched.password && Boolean(formik.errors.password)) &&
                                            <InputAdornment position="end">
                                                <ReportProblemOutlinedIcon color="secondary" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={8} className="flex flex-col items-center">
                            <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
                            <div className="w-80 flex justify-center items-center text-xs mt-2">
                                <span>Don't have an account?</span>
                                <Link to="/register" className="font-bold uppercase mx-1">Sign up</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Hidden>
            </form>
        </Grid>
    )
}