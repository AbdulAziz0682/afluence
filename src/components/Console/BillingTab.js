import { Button, FormControl, Grid, MenuItem, Select, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";
import LineChart from "./LineChart";

export default function BillingTab(props){
    let billing = useSelector(state => state.currentProject.billing);
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex p-2 sm:p-4 items-center justify-between gap-1 border-b-2">
                <div className="flex flex-col">
                    <Typography variant="body1" className="font-bold">Current Balance</Typography>
                    <Typography variant="subtitle1">{billing.currentBalance+' USD'}</Typography>
                </div>
                <Button variant="contained" color="primary">Add Funds</Button>
            </Grid>
            <Grid item className="flex p-2 sm:p-4 items-center justify-between gap-1 border-b-2">
                <div className="flex flex-col">
                    <Typography variant="body1" className="font-bold">Total Cost</Typography>
                    <Typography variant="subtitle1">{billing.totalCost+' USD'}</Typography>
                </div>
                <FormControl size="small">
                    <Select variant="outlined" value="1" >
                        <MenuItem value="1">Date 1</MenuItem>
                        <MenuItem value="2">Date 2</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item className="p-2 sm:p-4 items-center justify-between gap-1 border-b-2">
                <div className="flex">
                    <FormControl size="small">
                        <Select variant="outlined" value="1" >
                            <MenuItem value="1">Audio seconds / price</MenuItem>
                            <MenuItem value="2">Some other value</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <LineChart />
            </Grid>
        </Grid>
    )
}