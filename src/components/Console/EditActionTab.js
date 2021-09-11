
import {Grid, TextField, Button, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, FormControl, Select, MenuItem} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete'

export default function AddEditTab(props){
    let action = props.action;
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex gap-3 p-1 sm:p-3 border-b-2 items-center justify-between flex flex-col sm:flex-row">
                <TextField variant="outlined" value={action.name} label="Enter Command Name" size="small" />
                <div className="flex gap-1 sm:justify-end w-full items-center justify-around">
                    <Button variant="contained" color="secondary">Cancel</Button>
                    <Button variant="contained" color="primary">Delete</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-3">
                <Grid container direction="column">
                    <Grid item className="flex flex-col">
                        <Typography variant="h4">Parameters List</Typography>
                    </Grid>
                    <Grid item>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography variant="subtitle2">Name</Typography></TableCell>
                                    <TableCell><Typography variant="subtitle2">Data type</Typography></TableCell>
                                    <TableCell><IconButton><AddCircle /></IconButton></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <TextField variant="outlined" size="small" className="md:min-w-full" style={{minWidth: '100px'}} />
                                    </TableCell>
                                    <TableCell>
                                        <FormControl variant="outlined" size="small" className="md:min-w-full" style={{minWidth: '100px'}}>
                                            <Select value="string">
                                                <MenuItem value="string">String</MenuItem>
                                                <MenuItem value="number">Number</MenuItem>
                                                <MenuItem value="bool">Boolean</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton><DeleteIcon color="error" /></IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}