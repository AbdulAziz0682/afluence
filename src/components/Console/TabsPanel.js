import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

import {useSelector, useDispatch} from 'react-redux';
import { setCurrentTab } from '../../redux/actions/currentProjectActions';

import BillingTab from './BillingTab';
import MetricsTab from './MetricsTab';
import AddCommandTab from './AddCommandTab';

function TabPanel(props) {
  const { children, currentTab, index, ...other } = props;

  return (
	<div
	  role="tabpanel"
	  hidden={currentTab !== index}
	  id={`scrollable-auto-tabpanel-${index}`}
	  aria-labelledby={`scrollable-auto-tab-${index}`}
	  {...other}
	>
	  {currentTab === index && (
		<Box p={1}>
			{children}
		</Box>
	  )}
	</div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  currentTab: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
	flexGrow: 1,
	backgroundColor: theme.palette.background.paper,
  }
}));

export default function TabsPanel() {
  const classes = useStyles();
  let dispatch = useDispatch();
  let tabs = useSelector((state)=>state.currentProject.tabs);
  let currentTab = useSelector((state)=>state.currentProject.currentTab);

  const handleChange = (event, newValue) => {
	dispatch(setCurrentTab(newValue));
  };

  return (
	<div className={clsx({[classes.root]:true})}>
	  <AppBar position="static" color="default" elevation={0}>
		<Tabs
		  value={currentTab}
		  onChange={handleChange}
		  indicatorColor="primary"
		  textColor="primary"
		  variant="scrollable"
		  scrollButtons="auto"
		  aria-label="scrollable auto tabs example"
		>
		  {
			tabs.map((tab, index) => (
			  <Tab 
			  	label={tab.title} 
				value={index} 
				key={'tab'+index} 
				className="hover:bg-green-100"
				icon={<IconButton className="hover:bg-gray-200"><CloseIcon /></IconButton>}/>
			))
		  }
		</Tabs>
	  </AppBar>
	  {
		tabs.map((tab, index)=>(
		  <TabPanel currentTab={currentTab} key={'panel'+index} index={index}>
			{
				tab.type === 'billing' && (
					<BillingTab />
				)
			}
			{
				tab.type === 'metrics' && (
					<MetricsTab />
				)
			}
			{
				tab.type === 'addCommand' && (
					<AddCommandTab />
				)
			}
		  </TabPanel>
		))
	  }
	</div>
  );
}
