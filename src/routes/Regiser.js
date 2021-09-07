import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function Register(props){
    return (
        <Grid item md={8} lg={6}>
            <Grid container className="bg-green-200 self-center rounded-lg">
                <Grid item sm={6}>
                    Some text here
                </Grid>
                <Grid item sm={6} className="flex flex-col justify-center">
                    <Typography variant="body1" color="primary" className="font-extrabold">CREATE YOUR ACCOUNT</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}