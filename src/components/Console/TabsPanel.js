import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import EditCommandTab from './EditCommandTab';
import AddActionTab from './AddActionTab';
import EditActionTab from './EditActionTab';
import AddStateTab from './AddStateTab';
import EditStateTab from './EditStateTab';
import DataFlowTab from './DataFlowTab';

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
		<Box marginRight={-1} height="calc(100vh - 57px)">
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
	  //display: 'none'
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
  let isActive = true;
  //if(tabs[currentTab]?.title === 'billing') return <BillingTab />;
  return (
	<div>{
		tabs[currentTab] && tabs[currentTab].title!=='billing' ? <><Tabs
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
			tabs.map((tab, index) => (
			  <Tab 
			  	label={tab.title} 
				value={index} 
				key={'tab'+index} 
				className={clsx({['bg-white']: isActive})}
				classes={{wrapper: classes.tabWrapper, root: classes.tabRoot}}
				icon={<IconButton><CloseIcon className="w-4 mt-1" /></IconButton>}/>
			))
		  }
		</Tabs>
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
		))
	  }
	  </>
	  :
	  <BillingTab />
	}</div>
  );
}
