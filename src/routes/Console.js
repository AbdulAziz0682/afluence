import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SideBar from '../components/Console/SideBar';
import Content from '../components/Console/Content';

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  toolbar: {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	marginTop: theme.mixins.toolbar.minHeight+1
  },
  content: {
	flexGrow: 1,
	padding: theme.spacing(3),
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
