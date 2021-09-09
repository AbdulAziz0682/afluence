import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SideBar from '../components/Console/SideBar';
import Content from '../components/Console/Content';

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
	flexGrow: 1,
  },
}));

export default function Console() {
  const classes = useStyles();

  return (
	<div className={classes.root}>
		<SideBar />
		<Content />
	</div>
  );
}
