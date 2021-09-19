import React, {useState} from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router';

import { useFormik } from 'formik';
import * as yup from 'yup';
import DeleteAccountConfirmation from '../components/Account/DeleteAccountConfirmation';
import TextInputBase from '../components/TextInputBase';

const User = {
    name: '',
    email: '',
    password: '',
    company: '',
    token: '',
    projects: []
}

export default function Account(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let user = useSelector((state)=>state.account.user) || User;
    let [edit, setEdit] = useState(false);
    //Dialog Actions
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
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
        name: yup
            .string('Enter your Name')
            .min(2, 'Enter at least 2 characters')
            .required('Name is required'),
        token: yup
            .string('Enter your token')
            .min(16, 'Enter at least 16 characters')
            .required('Token is required'),
        confirmPassword: yup
            .string('Enter confirm password')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
        });
    const formik = useFormik({
        initialValues: {
            ...user,
            confirmPassword: user.password
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setEdit(false);
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(!loggedIn){
        return <Redirect push to="/login" />
    }
    return (
        <Grid item xs={12} md={11} lg={9} className="h-5/6 md:border rounded-3xl overflow-auto bg-white">
            <form onSubmit={formik.handleSubmit} className="w-100">
            <Grid container direction="column" className="self-center md:p-8 p-4">
                <Grid item className="flex gap-6 justify-between items-center">
                    <Typography variant="h6" color="primary">ACCOUNT DETAILS</Typography>
                    <div className="flex gap-3 justify-between">
                        <DeleteAccountConfirmation open={open} handleClose={handleClose} />
                        <Button variant="contained" size="small" 
                            onClick={handleClickOpen} 
                            color="secondary"
                            startIcon={<DeleteIcon htmlColor="white" />}
                        >
                            Delete
                        </Button>
                        {
                            <Button color="primary" variant="contained" 
                                type={edit ? 'submit' : 'button'}
                                onClick={(e)=>{
                                    if(!edit){
                                        e.preventDefault();
                                        setEdit(!edit);
                                    }
                                }}
                                startIcon={!edit && <EditIcon htmlColor="white" />}
                            >
                                
                                {edit ? 'Save' : 'Edit'}
                            </Button>
                        }
                    </div>
                </Grid>
                <Grid item>
                    {
                        edit 
                        ?
                            <TableContainer>
                                <Table aria-label="simple table" size="small">
                                    <TableBody>
                                        <TableRow key="0">
                                            <TableCell scope="row" className="border-r border-gray-600">Email</TableCell>
                                            <TableCell scope="row" className="border-b border-gray-600 w-5/6">
                                                <TextInputBase
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                                    helperText={formik.touched.email && formik.errors.email}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="1">
                                            <TableCell scope="row" className="border-r border-gray-600">Password</TableCell>
                                            <TableCell scope="row" className="border-b border-gray-600 items-center flex gap-1 md:gap-3">
                                                <TextInputBase
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                                    helperText={formik.touched.password && formik.errors.password}
                                                />
                                                <TextInputBase
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    placeholder="Re-enter Password"
                                                    value={formik.values.confirmPassword}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="2">
                                            <TableCell scope="row" className="border-r border-gray-600">Company Name</TableCell>
                                            <TableCell scope="row" className="border-b border-gray-600 w-5/6">
                                                <TextInputBase
                                                    id="company"
                                                    name="company"
                                                    placeholder="Company"
                                                    value={formik.values.company}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.company && Boolean(formik.errors.company)}
                                                    helperText={formik.touched.company && formik.errors.company}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="3">
                                            <TableCell scope="row" className="border-r border-gray-600">Developer Name</TableCell>
                                            <TableCell scope="row" className="border-b border-gray-600 w-5/6">
                                                <TextInputBase
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                                    helperText={formik.touched.name && formik.errors.name}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="4">
                                            <TableCell scope="row" className="border-r border-gray-600">Token</TableCell>
                                            <TableCell scope="row" className="border-b border-gray-600 w-5/6">
                                                <TextInputBase
                                                    id="token"
                                                    name="token"
                                                    placeholder="Token"
                                                    className="w-3/6"
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
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow key="0">
                                        <TableCell scope="row" className="border-r border-gray-600">Email</TableCell>
                                        <TableCell scope="row" className="border-b border-gray-600 w-2/3">{user.email}</TableCell>
                                    </TableRow>
                                    <TableRow key="1">
                                        <TableCell scope="row" className="border-r border-gray-600">Password</TableCell>
                                        <TableCell scope="row" className="border-b border-gray-600  w-5/6">{user.password}</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell scope="row" className="border-r border-gray-600">Company Name</TableCell>
                                        <TableCell scope="row" className="border-b border-gray-600  w-5/6">{user.company}</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell scope="row" className="border-r border-gray-600">Developer Name</TableCell>
                                        <TableCell scope="row" className="border-b border-gray-600  w-5/6">{user.name}</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell scope="row" className="border-r border-gray-600">Token</TableCell>
                                        <TableCell scope="row" className="border-b border-gray-600  w-5/6">{user.token}</TableCell>
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