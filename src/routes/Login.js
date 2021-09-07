import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import logo from '../assets/afluence.png';

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
                    {name: 'Project_1', status: 'Active', country: 'United States'},
                    {name: 'Project_2', status: 'In development', country: 'United States'}
                ]
            }
            dispatch(login(user));
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(loggedIn){
        return <Redirect push to="/console" />
    }
    return (
        <Grid item md={5} lg={4} className="mt-3">
            <form onSubmit={formik.handleSubmit} className="w-100">
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
            </form>
        </Grid>
    )
}