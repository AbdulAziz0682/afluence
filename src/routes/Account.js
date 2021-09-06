import React from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Account(props){
    let user = useSelector((state)=>state.account.user);

    //Form requirements
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    return (
        <Grid item md={11} lg={9}>
            <Grid container direction="column" className="border self-center rounded-lg md:p-8 p-4">
                <Grid item className="flex gap-6 justify-between w-full h-full">
                    <Typography variant="h6" color="primary">ACCOUNT DETAILS</Typography>
                    <div className="flex gap-3 justify-between">
                        <Button variant="contained" color="secondary">Delete</Button>
                        <Button variant="contained" color="primary">Edit</Button>
                    </div>
                </Grid>
                <Grid item>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
                </Grid>
            </Grid>
        </Grid>
    )
}