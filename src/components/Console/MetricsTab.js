import { Grid, Table, TableBody, TableCell, TableRow } from "@material-ui/core";

import { useSelector } from "react-redux";

export default function MetricsTab(props){
    let metrics = useSelector(state => state.currentProject.metrics);
    return (
        <Grid container direction="column" className="overflow-scroll sm:overflow-auto bg-white h-full">
            <Table className="md:w-5/6 mt-16">
                <TableBody>
                    {
                        metrics.map((metric, index) => (
                            <TableRow hover className='divide-x'>
                                <TableCell className={`${index === (metrics.length-1) && 'border-b-0'} w-1/2  md:pl-10`}>{metric.name}</TableCell>
                                <TableCell className={`${index === (metrics.length-1) && 'border-b-0'} w-1/2  md:pl-10`}>{metric.value + (metric.name===('Avg. Request per minute') ? ' calls' : '%')}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Grid>
    )
}