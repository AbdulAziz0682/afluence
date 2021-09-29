
import {Grid, Button, Typography, IconButton, InputBase, Table, TableBody, TableContainer, TableHead, TableRow, TableCell} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import NegativeIcon from '../../assets/negative.png';

export default function AddActionTab(props){

    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto bg-white h-full">
            <Grid item className="flex gap-3 p-2 sm:p-3 border-b items-center justify-between flex flex-col md:flex-row">
                <InputBase 
                    label="Enter command Name"
                    className="w-full md:w-6/12 px-2 bg-gray-100 h-10 rounded-lg"
                />
                <div className="flex gap-9 md:justify-end w-full md:w-5/12 items-center justify-between">
                    <Button variant="contained" color="secondary" className="md:w-36">Cancel</Button>
                    <Button variant="contained" color="primary" className="md:w-36">Save</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-3 w-full">
                <Grid container direction="column">
                    <Grid item className="flex flex-col w-full">
                        <Typography className="text-2xl font-bold md:text-4xl">Parameters List</Typography>
                    </Grid>
                    <Grid item container direction="column" className="mt-8 overflow-auto w-full">
                        <TableContainer className="w-full">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="border-b-0 px-0.5 md:px-3"><Typography color="primary" className="text-sm md:text-lg font-bold">Name</Typography></TableCell>
                                        <TableCell className="border-b-0 px-0.5 md:px-3"><Typography color="primary" className="text-sm md:text-lg font-bold">Data type</Typography></TableCell>
                                        <TableCell className="px-0.5 md:px-3 border-b-0 w-4 last:pr-0"><IconButton><AddCircle /></IconButton></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        [1,2,3].map(item => (
                                            <TableRow>
                                                <TableCell className="px-0.5 md:px-3 my-1 border-b-0">
                                                    <InputBase
                                                        className="bg-gray-100 md:w-full lg:w-10/12 h-full px-2"
                                                    />
                                                </TableCell>
                                                <TableCell className="px-0.5 md:px-3 my-1 border-b-0">
                                                    <select className="w-20 md:w-full bg-gray-100 h-9">
                                                        <option value="English">English</option>
                                                        <option value="French">French</option>
                                                        <option value="Italian">Italian</option>
                                                    </select>
                                                </TableCell>
                                                <TableCell className="px-0.5 md:px-3 my-1 border-b-0 w-4 last:pr-0">
                                                    <IconButton><img src={NegativeIcon} style={{width: 22}} alt="delete" /></IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}