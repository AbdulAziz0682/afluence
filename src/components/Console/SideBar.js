import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Collapse } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandIcon from '../ExpandIcon';
import ChevronIcon from '../ChevronIcon';

import actions from '../../assets/actions.svg';
import billing from '../../assets/billing.svg';
import commond from '../../assets/commond.svg';
import dialogFlow from '../../assets/dialogFlow.svg';
import metrics from '../../assets/metrics.svg';
import states from '../../assets/states.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  drawer: {
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
  },
  drawerOpen: {
	width: drawerWidth,
	transition: theme.transitions.create('width', {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.enteringScreen,
	}),
  },
  drawerClose: {
	transition: theme.transitions.create('width', {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: theme.spacing(7) + 1,
	[theme.breakpoints.up('sm')]: {
	  width: theme.spacing(9) + 1,
	},
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

export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let [items, setItems] = useState([
	  {
		  name: 'States',
		  icon: states,
		  expanded: false,
		  children: [
			  {name: 'Start'},
			  {name: 'End'}
		  ]
	  },
	  {
		  name: 'Actions',
		  icon: actions,
		  expanded: false,
		  children: [
			  {name: 'GET_INPUT'},
			  {name: 'END_CONVO'},
			  {name: 'PLAY_AUDIO'},
		  ]
	  },
	  {
		  name: 'Commond',
		  icon: commond,
		  expanded: false,
		  children: [
			  {name: 'NOT_MATCH'},
			  {name: 'NO_INPUT'}
		  ]
	  }
  ]);
  function toggleExpand(index){
	  const newItems = [...items];
	  const item = items[index];
	  newItems[index] = {...item, expanded: !item.expanded};
	  setItems(newItems);
  }

  return (
	<>
	  <CssBaseline />
	  <Drawer
		variant="permanent"
		id="drawer"
		className={clsx('mt-6',classes.drawer, {
		  [classes.drawerOpen]: open,
		  [classes.drawerClose]: !open,
		})}
		classes={{
		  paper: clsx({
			[classes.drawerOpen]: open,
			[classes.drawerClose]: !open,
		  }),
		}}
	  >
		<div id="drawerbar" className={classes.toolbar}>
		  <IconButton onClick={()=>setOpen(!open)}>
			<ChevronIcon expanded={open} />
		  </IconButton>
		</div>
		<Divider />
		<List>
			<ListItem button key="1">
			  <ListItemIcon><img src={dialogFlow} alt="dialogFlow" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Dialog Flow" />
			</ListItem>
			{
				items.map((item, index) => <>
					<ListItem button key={index+1} onClick={()=>toggleExpand(index)}>
						<ListItemIcon><img src={item.icon} alt={item.name} className="w-6" /></ListItemIcon>
						<ListItemText primary={item.name} />
						<ExpandIcon expanded={item.expanded} />
					</ListItem>
					<Collapse in={item.expanded} key={index}>
						{
							item.children.map((child, idx) => <>
								<ListItem button key={idx}>
									<ListItemText primary={child.name} />
								</ListItem>
							</>)
						}
					</Collapse>
				</>)
			}
			<ListItem button key="5">
			  <ListItemIcon><img src={metrics} alt="metrics" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Metrics" />
			</ListItem>
			<ListItem button key="6">
			  <ListItemIcon><img src={billing} alt="billing" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Billing" />
			</ListItem>
		</List>
	  </Drawer>
	</>
  );
}
