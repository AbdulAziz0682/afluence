import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabsPanel';

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        zIndex: theme.zIndex.drawer -1
    },
}))

export default function Content(props){
    let classes = useStyles();
    return (
    <Grid container className={clsx({[classes.content]:true, 'bg-gray-100':true})}>
        <Grid item sm={6} md={10} className="bg-green-100">
            <TabPanel />
        </Grid>
    </Grid>
    )
}