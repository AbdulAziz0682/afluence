import React, {useEffect} from 'react';
import { Button, FormHelperText, Grid, InputLabel, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import logo from '../assets/afluence.png';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

export default function Register(props){

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
                <Grid item className="w-80 md:w-full">
                    <TextField
                        fullWidth
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        variant="outlined"
                        label="Confirm Password"
                        size="small"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Grid>
                <Grid item className="w-80 md:w-full">
                    <TextField
                        fullWidth
                        id="company"
                        name="company"
                        variant="outlined"
                        label="Company"
                        size="small"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        error={formik.touched.company && Boolean(formik.errors.company)}
                        helperText={formik.touched.company && formik.errors.company}
                    />
                </Grid>
                <Grid item className="w-80 md:w-full">
                    <TextField
                        fullWidth
                        id="hearAboutUs"
                        name="hearAboutUs"
                        variant="outlined"
                        label="How did you hear about us?"
                        size="small"
                        value={formik.values.hearAboutUs}
                        onChange={formik.handleChange}
                        error={formik.touched.hearAboutUs && Boolean(formik.errors.hearAboutUs)}
                        helperText={formik.touched.hearAboutUs && formik.errors.hearAboutUs}
                    />
                </Grid>
                <Grid item className="w-80 md:w-full flex-col">
                    <div className={`${(formik.touched.isAccepting && Boolean(formik.errors.isAccepting)) ? 'border-red-600 rounded border' : ''} flex gap-3 items-center md:w-full`}>
                        <CheckBox name="isAccepting" onChange={formik.handleChange} checked={formik.values.isAccepting} color="primary" />
                        <InputLabel>I have read and accept Terms and Conditions</InputLabel>
                    </div>
                    {formik.touched.isAccepting && Boolean(formik.errors.isAccepting) && <FormHelperText error className="ml-3">{formik.touched.hearAboutUs && formik.errors.isAccepting}</FormHelperText>}
                </Grid>
                <Grid item className="w-80 md:w-full flex justify-center">
                    <Button variant="contained" color="primary" type="submit">Create your Account</Button>
                </Grid>
                <Grid item className="w-80 md:w-full flex justify-center items-center">
                    <Typography variant="subtitle1">Already have an account!</Typography>
                    <Link to="/login" className="font-bold">Login</Link>
                </Grid>
            </Grid>
            </form>
        </Grid>
    )
}