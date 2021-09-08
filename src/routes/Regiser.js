import React from 'react';
import clsx from 'clsx';
import { Button, FormHelperText, Grid, InputLabel, Typography, InputAdornment } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import logo from '../assets/afluence.png';
import registerBackground from '../assets/registerBackground.png';

import { VpnKey, Email, Business, CheckCircle, Mood } from '@material-ui/icons';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router';

const useStyles = makeStyles(theme => ({
    showOnSm:{
        [theme.breakpoints.down('md')]:{
            visibility: 'visible',
            display: 'block'
        }
    },
    hideOnSm:{
        [theme.breakpoints.down('md')]:{
            visibility: 'hidden',
            display: 'none'
        }
    },
    showOnMd:{
        [theme.breakpoints.up('md')]:{
            visibility: 'visible',
            display: 'block'
        }
    },
    hideOnMd:{
        [theme.breakpoints.up('md')]:{
            visibility: 'hidden',
            display: 'none'
        }
    }
}))

export default function Register(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let classes = useStyles();
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
        company: yup
            .string('Enter your Company name')
            .min(4, 'Enter at least 4 characters')
            .required('Company is required'),
        hearAboutUs: yup
            .string()
            .min(4, 'Enter at least 4 characters')
            .required('Please tell us some thing'),
        isAccepting: yup
            .boolean()
            .oneOf([true, null], 'You have to accept terms')
            .required('Please accept the terms'),
        confirmPassword: yup
            .string('Enter confirm password')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Enter confirm password')
        });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            company: '',
            hearAboutUs: '',
            isAccepting: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(loggedIn){
        return <Redirect push to="/" />
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
                            <Grid item className="w-80">
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
                                                <Email />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item className="w-80">
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
                                                <VpnKey />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item className="w-80">
                                <TextField
                                    fullWidth
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    variant="outlined"
                                    label="Confirm Password"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <CheckCircle />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                />
                            </Grid>
                            <Grid item className="w-80">
                                <TextField
                                    fullWidth
                                    id="company"
                                    name="company"
                                    variant="outlined"
                                    label="Company"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <Business />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.company}
                                    onChange={formik.handleChange}
                                    error={formik.touched.company && Boolean(formik.errors.company)}
                                    helperText={formik.touched.company && formik.errors.company}
                                />
                            </Grid>
                            <Grid item className="w-80">
                                <TextField
                                    fullWidth
                                    id="hearAboutUs"
                                    name="hearAboutUs"
                                    variant="outlined"
                                    label="How did you hear about us?"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <Mood />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.hearAboutUs}
                                    onChange={formik.handleChange}
                                    error={formik.touched.hearAboutUs && Boolean(formik.errors.hearAboutUs)}
                                    helperText={formik.touched.hearAboutUs && formik.errors.hearAboutUs}
                                />
                            </Grid>
                            <Grid item className="w-80 flex-col">
                                <div className={`${(formik.touched.isAccepting && Boolean(formik.errors.isAccepting)) ? 'border-red-600 rounded border' : ''} flex gap-3 items-center`}>
                                    <CheckBox name="isAccepting" onChange={formik.handleChange} checked={formik.values.isAccepting} color="primary" />
                                    <InputLabel>I have read and accept Terms and Conditions</InputLabel>
                                </div>
                                {formik.touched.isAccepting && Boolean(formik.errors.isAccepting) && <FormHelperText error className="ml-3">{formik.touched.hearAboutUs && formik.errors.isAccepting}</FormHelperText>}
                            </Grid>
                            <Grid item className="w-80 flex justify-center">
                                <Button variant="contained" color="primary" type="submit">Create your Account</Button>
                            </Grid>
                            <Grid item className="w-80 flex justify-center items-center">
                                <Typography variant="subtitle1">Already have an account!</Typography>
                                <Link to="/login" className="font-bold">Login</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid container id="sm" spacing={2} direction="column" alignItems="center" className="border self-center rounded-lg p-3">
                        <Grid item className="w-full flex items-center p-6">
                            <img src={logo} alt="afluence logo" width="30%"/>
                            <Typography variant="h3" color="primary" className="font-extrabold text-right">Amazethu</Typography>
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
                                            <Email />
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
                                            <VpnKey />
                                        </InputAdornment>
                                    )
                                }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item className="w-full">
                            <TextField
                                fullWidth
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                variant="outlined"
                                label="Confirm Password"
                                size="small"
                                InputProps={{
                                    startAdornment:(
                                        <InputAdornment postition="start">
                                            <CheckCircle />
                                        </InputAdornment>
                                    )
                                }}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                        </Grid>
                        <Grid item className="w-full">
                            <TextField
                                fullWidth
                                id="company"
                                name="company"
                                variant="outlined"
                                label="Company"
                                size="small"
                                InputProps={{
                                    startAdornment:(
                                        <InputAdornment postition="start">
                                            <Business />
                                        </InputAdornment>
                                    )
                                }}
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                error={formik.touched.company && Boolean(formik.errors.company)}
                                helperText={formik.touched.company && formik.errors.company}
                            />
                        </Grid>
                        <Grid item className="w-full">
                            <TextField
                                fullWidth
                                id="hearAboutUs"
                                name="hearAboutUs"
                                variant="outlined"
                                label="How did you hear about us?"
                                size="small"
                                InputProps={{
                                    startAdornment:(
                                        <InputAdornment postition="start">
                                            <Mood />
                                        </InputAdornment>
                                    )
                                }}
                                value={formik.values.hearAboutUs}
                                onChange={formik.handleChange}
                                error={formik.touched.hearAboutUs && Boolean(formik.errors.hearAboutUs)}
                                helperText={formik.touched.hearAboutUs && formik.errors.hearAboutUs}
                            />
                        </Grid>
                        <Grid item className="w-full flex-col">
                            <div className={`${(formik.touched.isAccepting && Boolean(formik.errors.isAccepting)) ? 'border-red-600 rounded border' : ''} flex gap-3 items-center`}>
                                <CheckBox name="isAccepting" onChange={formik.handleChange} checked={formik.values.isAccepting} color="primary" />
                                <InputLabel>I have read and accept Terms and Conditions</InputLabel>
                            </div>
                            {formik.touched.isAccepting && Boolean(formik.errors.isAccepting) && <FormHelperText error className="ml-3">{formik.touched.hearAboutUs && formik.errors.isAccepting}</FormHelperText>}
                        </Grid>
                        <Grid item className="w-full flex justify-center">
                            <Button variant="contained" color="primary" type="submit">Create your Account</Button>
                        </Grid>
                        <Grid item className="w-full flex justify-center items-center">
                            <Typography variant="subtitle1">Already have an account!</Typography>
                            <Link to="/login" className="font-bold">Login</Link>
                        </Grid>
                    </Grid>
                </Hidden>
            </form>
        </Grid>
    )
}