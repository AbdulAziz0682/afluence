import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from '../components/Console/SideBar';
import Content from '../components/Console/Content';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		maxHeight: '100%',
		minHeight: '100%',
		overflow: 'hidden'
	},
}));

export default function Console() {
	const classes = useStyles();
	const loggedIn = useSelector(state => state.account.loggedIn);
	if(!loggedIn){
		return <Redirect push to="/login" />
	}
	return (
		<div className={classes.root}>
			<SideBar />
			<Content />
		</div>
	);
}
