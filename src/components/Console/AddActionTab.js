
import {Grid, TextField, Button, Typography, IconButton, FormControl, Select, MenuItem} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import NegativeIcon from '../../assets/negative.png';

export default function AddActionTab(props){

    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex gap-3 p-1 sm:p-3 border-b items-center justify-between flex flex-col md:flex-row">
                <TextField 
                    label="Enter action Name"
                    variant="filled" 
                    size="small"  
                    className="w-full md:w-5/12"
                    InputProps={{disableUnderline: true}}
                />
                <div className="flex gap-9 md:justify-end w-full items-center justify-between">
                    <Button variant="contained" color="secondary" className="w-36">Cancel</Button>
                    <Button variant="contained" color="primary" className="w-36">Save</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-3">
                <Grid container direction="column">
                    <Grid item className="flex flex-col">
                        <Typography variant="h4">Parameters List</Typography>
                    </Grid>
                    <Grid item container direction="column">
                        <Grid item className="flex w-full gap-1 sm:gap-6">
                            <Typography variant="h6" className="w-5/12 py-1">Name</Typography>
                            <Typography variant="h6" className="w-5/12 py-1">Data type</Typography>
                            <IconButton className="w-2/12  hover:bg-transparent"><AddCircle /></IconButton>
                        </Grid>
                        <Grid item className="flex w-full gap-1 sm:gap-6">
                            <TextField 
                                variant="filled" 
                                size="small"  
                                className="w-5/12"
                                InputProps={{disableUnderline: true}}
                            />
                            <FormControl variant="filled" size="small" className="w-5/12">
                                <Select value="string" disableUnderline>
                                    <MenuItem value="string">String</MenuItem>
                                    <MenuItem value="number">Number</MenuItem>
                                    <MenuItem value="bool">Boolean</MenuItem>
                                </Select>
                            </FormControl>
                            <IconButton className="w-2/12  hover:bg-transparent"><img src={NegativeIcon} style={{width: 22}} alt="delete" /></IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}