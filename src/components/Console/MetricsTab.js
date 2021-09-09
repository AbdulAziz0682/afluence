import { Grid, Table, TableBody, TableCell, TableRow } from "@material-ui/core";

import { useSelector } from "react-redux";

export default function MetricsTab(props){
    let metrics = useSelector(state => state.currentProject.metrics);
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Table>
                <TableBody>
                    {
                        metrics.map(metric => (
                            <TableRow>
                                <TableCell>{metric.name}</TableCell>
                                <TableCell>{metric.value + (metric.name==('Avg. Request per minute') ? ' calls' : '%')}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Grid>
    )
}