import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Box, Collapse } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ExpandIcon from '../ExpandIcon';
import ChevronIcon from '../ChevronIcon';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import actionsIcon from '../../assets/actions.svg';
import billingIcon from '../../assets/billing.svg';
import commandsIcon from '../../assets/commands.svg';
import dialogFlowIcon from '../../assets/dialogFlow.svg';
import metricsIcon from '../../assets/metrics.svg';
import statesIcon from '../../assets/states.svg';
import { addTab, toggleDrawer } from '../../redux/actions/currentProjectActions';

const drawerWidth = 240;
const activeColor = 'rgba(228, 212, 248, 1)';

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  drawer: {
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	zIndex: theme.zIndex.drawer - 200,
  },
  drawerOpen: {
	width: drawerWidth,
	transition: theme.transitions.create('width', {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.enteringScreen,
	}),
	paddingTop: 80
  },
  drawerClose: {
	paddingTop: 80,
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
	marginTop: theme.mixins.toolbar.minHeight+1,
  },
  listContent: {
	flexGrow: 1,
	marginTop: theme.spacing(3),
  },
}));

export default function SideBar() {
	const classes = useStyles();
	let open = useSelector((state)=>state.currentProject.drawerOpen);
	let dispatch = useDispatch();
	let [statesExpanded, setStatesExpanded] = useState(false);
	let [commandsExpanded, setCommandsExpanded] = useState(false);
	let [actionsExpanded, setActionsExpanded] = useState(false);
	let {currentTab, tabs} = useSelector((state)=>state.currentProject);
	let {states, commands, actions} = useSelector((state)=>state.currentProject);

  return (
	<>
	  <CssBaseline />
	  <Drawer
		variant="permanent"
		id="drawer"
		className={clsx('mt-3',classes.drawer, {
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
		<div id="drawerbar" className={classes.toolbar, 'order-last flex-grow flex items-end justify-end'}>
		  <IconButton onClick={()=>dispatch(toggleDrawer())}>
			<ChevronIcon color="primary" expanded={open} />
		  </IconButton>
		</div>
		<List className={classes.content}>
			<ListItem button key="1" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'dialog flow' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'dialog Flow', type: 'dialogFlow'}))} >
			  <ListItemIcon><img src={dialogFlowIcon} alt="dialogFlow" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Dialog Flow" />
			</ListItem>
			<ListItem button key="states" onClick={()=>setStatesExpanded(!statesExpanded)}>
				<ListItemIcon><img src={statesIcon} alt="States" className="w-6" /></ListItemIcon>
				<ListItemText primary="States" />
				<ExpandIcon expanded={statesExpanded} />
			</ListItem>
			<Collapse key="stateItems" in={statesExpanded}>
				{
					states.map((state, index) => <>
						<ListItem button key={'state'+index} style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === state.name.toLowerCase() ? activeColor : ''}} onClick={()=>{dispatch(addTab({title: state.name, type: 'editState', data: state}))}}>
							{(state.name.toLowerCase() === 'start' || state.name.toLowerCase() === 'end') ? 
							<ListItemText inset primary={<div className="flex justify-between text-sm">
								<span>{state.name}</span>
								<Box color="rgba(217, 135, 255, 1)" fontSize="0.75rem">SYSTEM</Box>
							</div>} />
							: <ListItemText primary={<span className="text-sm">{state.name}</span>} inset />
							}
						</ListItem>
					</>)
				}
				{
					<ListItem button key="addState" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'add state' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Add State', type: 'addState'}))}>
						<ListItemText inset primary={<div className="flex items-center gap-2 text-sm"><AddIcon color="primary" /><span>Add State</span></div>} />
					</ListItem>
				}
			</Collapse>
			<ListItem button key="commands" onClick={()=>setCommandsExpanded(!commandsExpanded)}>
				<ListItemIcon><img src={commandsIcon} alt="commands" className="w-6" /></ListItemIcon>
				<ListItemText primary="Commands" />
				<ExpandIcon expanded={commandsExpanded} />
			</ListItem>
			<Collapse key="commandItems" in={commandsExpanded}>
				{
					commands.map((command, index) => <>
						<ListItem button key={'command'+index} style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === command.name.toLowerCase() ? activeColor : ''}} onClick={()=>dispatch(addTab({title: command.name, type:'editCommand', data: command}))}>
						{(command.name.toLowerCase() === 'no_match' || command.name.toLowerCase() === 'no_input') ? 
							<ListItemText inset primary={<div className="flex justify-between text-sm">
								<span>{command.name}</span>
								<Box color="rgba(217, 135, 255, 1)" fontSize="0.75rem">SYSTEM</Box>
							</div>} />
							: <ListItemText primary={<span className="text-sm">{command.name}</span>} inset />
						}
						</ListItem>
					</>)
				}
				{
					<ListItem button key="addCommand" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'add command' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Add Command', type: 'addCommand'}))}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary={<div className="flex items-center gap-2 text-sm"><AddIcon color="primary" /><span>Add Command</span></div>} />
					</ListItem>
				}
			</Collapse>
			<ListItem button key="actions" onClick={()=>setActionsExpanded(!actionsExpanded)}>
				<ListItemIcon><img src={actionsIcon} alt="actions" className="w-6" /></ListItemIcon>
				<ListItemText primary="Actions" />
				<ExpandIcon expanded={actionsExpanded} />
			</ListItem>
			<Collapse key="actionItems" in={actionsExpanded}>
				{
					actions.map((action, index) => <>
						<ListItem button key={'action'+index} style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === action.name.toLowerCase() ? activeColor : ''}} onClick={()=>dispatch(addTab({title: action.name, type: 'editAction', data: action}))}>
						{(action.name.toLowerCase() === 'get_input' || action.name.toLowerCase() === 'end_convo') ? 
							<ListItemText inset primary={<div className="flex justify-between text-sm">
								<span>{action.name}</span>
								<Box color="rgba(217, 135, 255, 1)" fontSize="0.75rem">SYSTEM</Box>
							</div>} />
							: <ListItemText primary={<span className="text-sm">{action.name}</span>} inset />
						}
						</ListItem>
					</>)
				}
				{
					<ListItem button key="addAction" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'add action' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Add Action', type: 'addAction'}))}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary={<div className="flex items-center gap-2 text-sm"><AddIcon color="primary" /><span>Add Action</span></div>} />
					</ListItem>
				}
			</Collapse>
			<ListItem button key="metrics" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'metrics' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Metrics', type:'metrics'}))}>
			  <ListItemIcon><img src={metricsIcon} alt="metrics" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Metrics" />
			</ListItem>
			<ListItem button key="billing" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'billing' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Billing', type:'billing'}))}>
			  <ListItemIcon><img src={billingIcon} alt="billing" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Billing" />
			</ListItem>
		</List>
	  </Drawer>
	</>
  );
}
