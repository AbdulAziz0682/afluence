import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {useSelector, useDispatch} from 'react-redux';
import { setCurrentTab } from '../../redux/actions/currentProjectActions';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  let dispatch = useDispatch();
  let tabs = useSelector((state)=>state.currentProject.tabs);
  let currentTab = useSelector((state)=>state.currentProject.currentTab);

  const handleChange = (event, newValue) => {
    dispatch(setCurrentTab(newValue));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
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
              <Tab label={tab.title} value={index} key={'tab'+index} />
            ))
          }
        </Tabs>
      </AppBar>
      {
        tabs.map((tab, index)=>(
          <TabPanel currentTab={currentTab} key={'panel'+index} index={index}>
            {tab.type}
          </TabPanel>
        ))
      }
    </div>
  );
}
