
import {Grid, TextField, Button, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, FormControl, Select, MenuItem} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete'

export default function AddActionTab(props){

    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex gap-3 p-1 sm:p-3 border-b-2 items-center justify-between">
                <TextField variant="outlined" label="Enter State Name" size="small" />
                <div className="flex gap-1 items-center justify-between">
                    <Button variant="contained" color="secondary">Cancel</Button>
                    <Button variant="contained" color="primary">Save</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-3">
                
            </Grid>
        </Grid>
    )
}