import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import TabsPanel from './TabsPanel';

import { useSelector } from "react-redux";
import BillingTab from "./BillingTab";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2-15,
        flexGrow: 1,
        background: 'rgba(233, 234, 238, 1)',
        height: "calc(100vh - 57px)",
    },
}))

export default function Content(props){
    let classes = useStyles();
    const currentProject = useSelector(state => state.currentProject);
    const {currentTab, tabs} = currentProject;
    return (
    <div className={clsx({[classes.root]:true})}>
        {(tabs[currentTab].type !== 'billing' || tabs[currentTab].type !== 'metrics') && <TabsPanel />}
    </div>
    )
}