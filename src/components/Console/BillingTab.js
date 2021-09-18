import { Button, FormControl, Grid, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import clsx from 'clsx';

import { useSelector } from "react-redux";
import LineChart from "./LineChart";

const useStyles = makeStyles(theme => ({
    chartDimensions: {
        [theme.breakpoints.down('sm')]:{
            maxHeight: '55%'
        },
        [theme.breakpoints.down('md')]:{
            maxHeight: '40%'
        },
        [theme.breakpoints.up('lg')]:{
            maxHeight: '75%'
        },
        [theme.breakpoints.up('xl')]:{
            maxHeight: '80%'
        }
    }
}))

export default function BillingTab(props){
    let classes = useStyles();
    let billing = useSelector(state => state.currentProject.billing);
    return (
        <Grid container direction="column" className="border rounded-lg h-full overflow-scroll sm:overflow-auto bg-white">
            <Grid item className="flex p-2 sm:p-4 items-center justify-between gap-1 border-b">
                <div className="flex flex-col">
                    <Typography variant="body1" className="font-bold">Current Balance</Typography>
                    <Typography variant="subtitle1">{billing.currentBalance+' USD'}</Typography>
                </div>
                <Button variant="contained" color="primary">Add Funds</Button>
            </Grid>
            <Grid item className="flex p-2 sm:p-4 items-center justify-between gap-1 border-b">
                <div className="flex flex-col">
                    <Typography variant="body1" className="font-bold">Total Cost</Typography>
                    <Typography variant="subtitle1">{billing.totalCost+' USD'}</Typography>
                </div>
                <FormControl size="small" className="md:w-72">
                    <Select variant="outlined" value="1" >
                        <MenuItem value="1">Date 1</MenuItem>
                        <MenuItem value="2">Date 2</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item className="p-2 sm:p-4 flex flex-col items-center flex-grow gap-1">
                <div className="flex items-start w-full">
                    <FormControl size="small" className="md:w-72">
                        <Select variant="outlined" value="1" >
                            <MenuItem value="1">Audio seconds / price</MenuItem>
                            <MenuItem value="2">Some other value</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div /* style={{minWidth: '20vw', maxHeight: '50vh'}} */ className={clsx({"w-60 sm:w-108 flex-grow md:w-5/6 self-center": true, [classes.chartDimensions]:true})}>
                    <LineChart />
                </div>
            </Grid>
        </Grid>
    )
}