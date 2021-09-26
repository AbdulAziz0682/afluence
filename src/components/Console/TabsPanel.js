import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

import {useSelector, useDispatch} from 'react-redux';
import { setCurrentTab, closeTab } from '../../redux/actions/currentProjectActions';

import AddCommandTab from './AddCommandTab';
import EditCommandTab from './EditCommandTab';
import AddActionTab from './AddActionTab';
import EditActionTab from './EditActionTab';
import AddStateTab from './AddStateTab';
import EditStateTab from './EditStateTab';
import DataFlowTab from './DataFlowTab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
	<div
	  role="tabpanel"
	  hidden={value !== index}
	  id={`scrollable-auto-tabpanel-${index}`}
	  aria-labelledby={`scrollable-auto-tab-${index}`}
	  style={{overflow: 'hidden', height: 'calc(100vh - 103px)'}}
	  {...other}
	>
	  {value === index && (
		<div className="flex items-stretch h-full">
				{children}
		</div>
	  )}
	</div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
	flexGrow: 1,
	textTransform: 'none',
	maxHeight: 25,
	minHeight: 20,
	backgroundColor: theme.palette.background.paper,
	margin: 0,
  },
  tabWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    maxHeight: 20,
    textTransform: 'none',
    justifyContent: 'space-between',
	borderRadius: '0.2rem',
	fontWeight: 'normal',
	overflow: 'hidden'
  },
  tabRoot: {
	maxHeight: 25,
	minHeight: 20,
	margin: 2,
  },
  indicator:{
	  display: 'none'
  }
}));

export default function TabsPanel() {
	const classes = useStyles();
	let dispatch = useDispatch();
	let tabs = useSelector((state)=>state.currentProject.tabs);
	let currentTab = useSelector((state)=>state.currentProject.currentTab);
	const handleChange = (event, newValue) => {
		console.dir(event.target.classList);
		if(event.target.classList.contains('MuiIconButton-root') || event.target.classList.contains('MuiSvgIcon-root')){
			dispatch(closeTab(newValue));
			return;
		}
		dispatch(setCurrentTab(newValue));
	};
	return (
		<>
			<Tabs
				value={currentTab}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="scrollable"
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
				className="bg-transparent"
				classes={{root: classes.root, indicator: classes.indicator}}
			>
				{
					(()=>{//Imediately invoked function expression 
						let tabsArr = [];
						for(let prop in tabs){
							if(prop === 'Billing' || prop === 'Metrics') continue;
							const tab = tabs[prop];
							tabsArr.push(
								<Tab 
									label={tab.title} 
									value={tab.title} 
									key={'tab'+tab.title} 
									className={`${currentTab === tab.title ? 'bg-white' : 'bg-gray-100'} rounded-t-md`}
									classes={{wrapper: classes.tabWrapper, root: classes.tabRoot}}
									icon={<IconButton><CloseIcon className="w-4 mt-1" /></IconButton>}
								/>
							)
						}
						return tabsArr;
					})()
				}
			</Tabs>
			{
				(()=>{//Imediately invoked function expression
					let arr = [];
					for(let prop in tabs){
						if(prop === 'billing' || prop === 'metrics') continue;
						const tab = tabs[prop];
						arr.push(
							<TabPanel value={currentTab} key={'panel'+tab.title} index={tab.title}>
								{
									tab.type === 'addCommand' && (
										<AddCommandTab />
									)
								}
								{
									tab.type === 'editCommand' && (
										<EditCommandTab command={tab.data} />
									)
								}
								{
									tab.type === 'addAction' && (
										<AddActionTab />
									)
								}
								{
									tab.type === 'editAction' && (
										<EditActionTab action={tab.data} />
									)
								}
								{
									tab.type === 'addState' && (
										<AddStateTab />
									)
								}
								{
									tab.type === 'editState' && (
										<EditStateTab data={tab.data} />
									)
								}
								{
									tab.type === 'dialogFlow' && (
										<DataFlowTab />
									)
								}
							</TabPanel>
						)
					}
					return arr;
				})()
			}
		</> 
	);
}
