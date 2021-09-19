import React, {useState} from 'react';
import { Button, Grid, Typography, TableHead, InputAdornment, ListItem, ListItemText } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import InputBase from '@material-ui/core/InputBase';
import { MenuItem, Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { useSelector, useDispatch } from 'react-redux';

import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import NewProjectDialog from '../components/Projects/NewProjectDialog';
import { setProject } from '../redux/actions/currentProjectActions';
import ExpandIcon from '../components/ExpandIcon';

const useStyles = makeStyles({
    paper: {
        backgroundColor: '#f3f4f6',
        borderInline: '1px solid #d9dce2',
        borderBlock: '1px solid #d9dce2',
        borderRadius: '1rem'
    }
})

export default function Projects(props){
    let dispatch = useDispatch();
    const classes = useStyles();
    let history = useHistory();
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let user = useSelector((state)=>state.account.user);
    let projects = user ? user.projects : [];
    let [searchType, setType] = useState('name');
    function handleProjectSetup(id){
        console.log(id);
        let project = projects.find(p => p.id === id);
        console.log('project', project);
        dispatch(setProject(project));
        history.push('/console');
    }
    //
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    //Dialog Actions
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    if(!loggedIn){
        return <Redirect push to="/login" />
    }
    return (
        <Grid item xs={12} md={11} lg={9} className="h-5/6 md:border rounded-3xl overflow-auto">
            <Grid container direction="column" className="self-center md:p-8 p-4">
                <Grid item className="flex justify-between flex-col sm:flex-row gap-2 md:gap-6 m-2 items-center flex-grow">
                    <Typography variant="h6" color="primary">MY PROJECTS</Typography>
                    <div className="flex w-72 md:w-auto gap-1 flex-grow ">
                        <InputBase className="bg-gray-100 h-8 flex-grow" endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>} />
                        <Button type="default" onClick={handleClick}>
                            {searchType} <ExpandIcon expanded={Boolean(anchorEl)} />
                        </Button>
                         <Menu
                            elevation={0}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 33,
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            classes={{
                                paper: classes.paper
                            }}
                        >
                            <MenuItem value="name"><ListItem className="pr-48 border-b border-gray-300" onClick={()=>{setType('Name');handleMenuClose();}}><ListItemText primary="Name"/></ListItem></MenuItem>
                            <MenuItem value="status"><ListItem className="pr-48" onClick={()=>{setType('Status');handleMenuClose();}}><ListItemText primary="Status"/></ListItem></MenuItem>
                        </Menu>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <NewProjectDialog open={open} handleClose={handleClose} />
                        <Button variant="contained" color="primary" size="small" onClick={handleClickOpen} startIcon={<AddIcon htmlColor="white" />}>
                            New Project
                        </Button>
                    </div>
                </Grid>
                <Grid item>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead className="border-b-2 border-gray-600 p-0">
                                <TableRow>
                                    <TableCell scope="row">Name</TableCell>
                                    <TableCell scope="row">Status</TableCell>
                                    <TableCell scope="row">Action</TableCell>
                                    <TableCell scope="row">Console</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map((proj, index)=>(
                                    <TableRow hover key={index}>
                                        <TableCell scope="row">{proj.name}</TableCell>
                                        <TableCell scope="row">{proj.status}</TableCell>
                                        <TableCell scope="row"><EditIcon /> <DeleteIcon color="secondary" /></TableCell>
                                        <TableCell scope="row" className="hover:bg-gray-200" onClick={()=>{handleProjectSetup(proj.id)}}>Go to Console</TableCell>
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