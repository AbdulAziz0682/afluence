import React, {useState} from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector, useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Account(props){
    let user = useSelector((state)=>state.account.user);
    let [edit, setEdit] = useState(false);
    //Form requirements
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        });
    const formik = useFormik({
        initialValues: {
            ...user
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    return (
        <Grid item md={11} lg={9}>
            <form onSubmit={formik.handleSubmit} className="w-100">
            <Grid container direction="column" className="border self-center rounded-lg md:p-8 p-4">
                <Grid item className="flex gap-6 justify-between w-full h-full">
                    <Typography variant="h6" color="primary">ACCOUNT DETAILS</Typography>
                    <div className="flex gap-3 justify-between">
                        <Button variant="contained" color="secondary">Delete</Button>
                        {
                            <Button color="primary" variant="contained" fullWidth 
                                type={edit ? 'submit' : 'button'}
                                onClick={(e)=>{
                                    if(!edit){
                                        e.preventDefault();
                                        setEdit(!edit);
                                    }
                                }}
                            >
                                {edit ? 'Submit' : 'Edit'}
                            </Button>
                        }
                    </div>
                </Grid>
                <Grid item>
                    {
                        edit 
                        ?
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow key="0">
                                            <TableCell scope="row">Email</TableCell>
                                            <TableCell scope="row">
                                                <TextField
                                                    fullWidth
                                                    id="email"
                                                    name="email"
                                                    variant="outlined"
                                                    size="small"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                                    helperText={formik.touched.email && formik.errors.email}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="1">
                                            <TableCell scope="row">Password</TableCell>
                                            <TableCell scope="row">
                                                <TextField
                                                    fullWidth
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    variant="outlined"
                                                    size="small"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                                    helperText={formik.touched.password && formik.errors.password}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="2">
                                            <TableCell scope="row">Company Name</TableCell>
                                            <TableCell scope="row">
                                                <TextField
                                                    fullWidth
                                                    id="company"
                                                    name="company"
                                                    variant="outlined"
                                                    size="small"
                                                    value={formik.values.company}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.company && Boolean(formik.errors.company)}
                                                    helperText={formik.touched.company && formik.errors.company}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="3">
                                            <TableCell scope="row">Developer Name</TableCell>
                                            <TableCell scope="row">
                                                <TextField
                                                    fullWidth
                                                    id="name"
                                                    name="name"
                                                    variant="outlined"
                                                    size="small"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                                    helperText={formik.touched.name && formik.errors.name}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="4">
                                            <TableCell scope="row">Token</TableCell>
                                            <TableCell scope="row">
                                                <TextField
                                                    fullWidth
                                                    id="token"
                                                    name="token"
                                                    variant="outlined"
                                                    size="small"
                                                    value={formik.values.token}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.token && Boolean(formik.errors.token)}
                                                    helperText={formik.touched.token && formik.errors.token}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        :
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow key="0">
                                        <TableCell scope="row">Email</TableCell>
                                        <TableCell scope="row">{user.email}</TableCell>
                                    </TableRow>
                                    <TableRow key="1">
                                        <TableCell scope="row">Password</TableCell>
                                        <TableCell scope="row">{user.password}</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell scope="row">Company Name</TableCell>
                                        <TableCell scope="row">{user.company}</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell scope="row">Developer Name</TableCell>
                                        <TableCell scope="row">{user.name}</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell scope="row">Token</TableCell>
                                        <TableCell scope="row">{user.token}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Grid>
            </Grid>
            </form>
        </Grid>
    )
}