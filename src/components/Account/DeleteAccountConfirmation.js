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
            className="sm:p-8 p-2"
        >
            <Typography component={DialogTitle} variant="h4" align="center" color="primary">Deactivate my account</Typography>
            <DialogContent className="flex flex-col gap-3 w-84 md:w-132 sm:m-3">
                <DialogContentText id="alert-dialog-description" className="w-full bg-gray-600 text-white h-full rounded-3xl p-3">
                Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </DialogContentText>
            </DialogContent>
            <DialogActions className="flex gap-3 justify-evenly">
                <Button onClick={handleClose} variant="contained">
                    Cancel
                </Button>
                <Button onClick={handleClose} variant="contained" color="secondary" autoFocus>
                    Deactivate
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
