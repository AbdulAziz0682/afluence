import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabsPanel';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2,
        flexGrow: 1,
        width: 50
    },
}))

export default function Content(props){
    let classes = useStyles();
    return (
    <div className={clsx({[classes.root]:true})}>
        <TabPanel />
    </div>
    )
}