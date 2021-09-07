import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, TextField, InputLabel } from '@material-ui/core';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: '',
    country: ''
}
export default function DeleteAccountConfirmation(props) {
    let {open, handleClose} = props;

    //Form requirements
    let countries = ['United State', 'England', 'France', 'China'];
    const validationSchema = yup.object({
        name: yup
            .string('Enter your Name')
            .min(2, 'Enter at least 2 characters')
            .required('Name is required'),
        country: yup
            .string('Enter country Name')
            .required('Country is required')
            .oneOf(countries, `Country should be one of ${countries.join(', ')}`)
        });
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            handleClose();
            actions.resetForm();
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    return (
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <form onSubmit={formik.handleSubmit}>
            <Typography component={DialogTitle} className="text-center" variant="h4">New Project</Typography>
            <DialogContent className="flex flex-col gap-3">
                <Typography variant="body1">Project Name</Typography>
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
                <Typography variant="body1">Choose country for project launch</Typography>
                <FormControl variant="outlined" size="small">
                    <Select
                        id="country-select"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        error={formik.touched.country && Boolean(formik.errors.country)}
                    >{
                        countries.map((c, i) => <MenuItem key={i} value={c}>{c}</MenuItem>)
                    }
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button  variant="contained" color="primary" type="submit">
                    Add
                </Button>
            </DialogActions>
            </form>
        </Dialog>
        </div>
    );
}
