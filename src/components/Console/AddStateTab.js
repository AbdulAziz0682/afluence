import { useState } from 'react';
import {Grid, TextField, Button, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, FormControl, Select, MenuItem} from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import AddCircle from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('xs')]:{
            zIndex: 10,
            position: 'absolute'
        },
        [theme.breakpoints.up('sm')]:{
            width: '70%',
            flexGrow: 1
        }
    },
    drawerOpen: {
        [theme.breakpoints.down('xs')]:{
            width: '80%',
            right: 0,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
    drawerClose: {
        [theme.breakpoints.down('xs')]:{
            right: 0,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: 0
        }
    },
}))

export default function AddActionTab(props){
    const classes = useStyles();
    let [open, setOpen] = useState(false);
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex gap-3 p-1 sm:p-3 border-b-2 items-center justify-between flex flex-col sm:flex-row">
                <TextField variant="outlined" label="Enter State Name" size="small" />
                <div className="flex gap-1 sm:justify-end w-full items-center justify-around">
                    <Button variant="contained" color="secondary">Cancel</Button>
                    <Button variant="contained" color="primary">Save</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-6 flex relative gap-3">
                <div className="border rounded-lg w-full sm:w-50 md:w-20 bg-gray-200 flex flex-col sm:flex-grow">
                    <div className="p-1 sm:p-3 text-center flex flex-col flex-grow">
                        <Hidden smUp><IconButton className="self-end"><ChevronLeftIcon className="bg-gray-400" onClick={()=>setOpen(true)} /></IconButton></Hidden>
                        <Typography variant="body1">New State</Typography>
                    </div>
                    <div className="p-1 sm:px-3 flex flex-col flex-grow bg-white items-center border-t-2 border-b-2 border-gray-200">
                        <div className="flex items-center justify-between w-full">
                            <p className="flex-grow p-2 rounded-lg">onEnter</p><span><IconButton><AddCircle /></IconButton></span>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            {/* <p className="bg-gray-200 flex-grow p-2 rounded-lg overflow-auto">add_to_action_list</p><span><IconButton><DeleteIcon color="secondary" /></IconButton></span> */}
                            <TextField variant="filled" size="small" value="add to action list" />
                            <span><IconButton><DeleteIcon color="secondary" /></IconButton></span>
                        </div>
                    </div>
                    <div className="p-1 sm:px-3 flex flex-col flex-grow bg-white items-center rounded-lg">
                        <div className="flex items-center justify-between w-full">
                            <p className="flex-grow p-2 rounded-lg">onInput</p><span><IconButton><AddCircle /></IconButton></span>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            {/* <p className="bg-gray-200 flex-grow p-2 rounded-lg overflow-auto">add_to_action_list</p><span><IconButton><DeleteIcon color="secondary" /></IconButton></span> */}
                            <TextField variant="filled" size="small" value="add to action list" />
                            <span><IconButton><DeleteIcon color="secondary" /></IconButton></span>
                        </div>
                    </div>
                </div>
                <div className={clsx({["bg-white absolute sm:relative sm:w-50 md:w-80 sm:ml-0 flex-grow flex flex-col rounded-lg border-gray-200 border"]:true, [classes.drawerOpen]: open, [classes.drawerClose]:!open})}>
                    <Hidden smUp><IconButton className="self-start"><ChevronRightIcon className="bg-gray-400" onClick={()=>setOpen(false)}/></IconButton></Hidden>
                    
                </div>
                
            </Grid>
        </Grid>
    )
}