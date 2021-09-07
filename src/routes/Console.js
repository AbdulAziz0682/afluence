import React, {useState} from 'react';
import { Button, Grid, Typography, TextField, TableHead, InputAdornment, Select } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FormControl, MenuItem } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router';

import NewProjectDialog from '../components/Console/NewProjectDialog';

export default function Account(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let user = useSelector((state)=>state.account.user);
    let {projects} = user;
    let [searchType, setType] = useState('name');
    function handleTypeChange(e){
        setType(e.target.value)
    }
    //Dialog Actions
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    if(!loggedIn){
        return <Redirect push to="/home" />
    }
    return (
        <Grid item xs={12} md={11} lg={9} className="mt-3">
            <Grid container direction="column" className="border self-center rounded-lg md:p-8 p-4">
                <Grid item className="flex gap-6 justify-between flex-col sm:flex-row md:gap-1 items-center flex-grow">
                    <Typography variant="h6" color="primary">MY PROJECTS</Typography>
                    <div className="flex">
                        <TextField
                            id="search"
                            placeholder="search"
                            variant="outlined"
                            size="small"
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <FormControl variant="outlined" size="small">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchType}
                            onChange={handleTypeChange}
                        >
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="status">Status</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <NewProjectDialog open={open} handleClose={handleClose} />
                        <Button variant="contained" color="primary" size="small" onClick={handleClickOpen} startIcon={<AddIcon htmlColor="white" />}>
                            New Project
                        </Button>
                    </div>
                </Grid>
                <Grid item>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell scope="row">Name</TableCell>
                                    <TableCell scope="row">Status</TableCell>
                                    <TableCell scope="row">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map((proj, index)=>(
                                    <TableRow hover key={index}>
                                        <TableCell scope="row">{proj.name}</TableCell>
                                        <TableCell scope="row">{proj.status}</TableCell>
                                        <TableCell scope="row"><EditIcon /> <DeleteIcon /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    )
}