import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import TabsPanel from './TabsPanel';

import { useSelector } from "react-redux";

import BillingTab from "./BillingTab";
import MetricsTab from './MetricsTab';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2-15,
        flexGrow: 1,
        background: 'rgba(233, 234, 238, 1)',
		maxHeight: '100%',
        minHeight: '100%',
		overflow: 'hidden'
    },
}))
export default function Content(props){
    let classes = useStyles();
    const currentProject = useSelector(state => state.currentProject);
    const {currentTab} = currentProject;
    return (
    <div id="content" className={clsx({[classes.root]:true})}>
        {
            currentTab === 'Billing' && <BillingTab />
        }
        {
            currentTab === 'Metrics' && <MetricsTab />
        }
        {
            (currentTab !== 'Billing' && currentTab !== 'Metrics') && <TabsPanel />
        }
    </div>
    )
}