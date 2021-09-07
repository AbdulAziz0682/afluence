import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function DeleteAccountConfirmation(props) {
    let {open, handleClose} = props;

    return (
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Typography component={DialogTitle} variant="h4" color="error">Deactivate my account</Typography>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Lorem ipsum dorem amit ...
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained">
                    Cancel
                </Button>
                <Button onClick={handleClose} variant="contained" className="text-white hover:bg-red-700 bg-red-500" autoFocus>
                    Deactivate
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
