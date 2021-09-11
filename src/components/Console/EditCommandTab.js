
import {Grid, TextField, Button, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, FormControl, Select, MenuItem, Input, TextareaAutosize} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete'

export default function EditCommandTab(props){
    let command = props.command;

    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex gap-3 p-1 sm:p-3 border-b-2 items-center justify-between flex flex-col sm:flex-row">
                <TextField variant="outlined" value={command.name} label="Enter Command Name" size="small" />
                <div className="flex gap-1 sm:justify-end w-full items-center justify-around">
                    <Button variant="contained" color="secondary">Cancel</Button>
                    <Button variant="contained" color="primary">Delete</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-3">
                <Grid container direction="column">
                    <Grid item className="flex flex-col">
                        <Typography variant="h4">Add Sample Phrases</Typography>
                        <Typography variant="subtitle2">Upload Sample audio phrases that a user might say to match this command</Typography>
                    </Grid>
                    <Grid item>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography variant="subtitle2">Language</Typography></TableCell>
                                    <TableCell><Typography variant="subtitle2">Audio</Typography></TableCell>
                                    <TableCell><Typography variant="subtitle2">Text</Typography></TableCell>
                                    <TableCell><IconButton><AddCircle /></IconButton></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <FormControl variant="outlined" size="small">
                                            <Select value="English">
                                                <MenuItem value="English">English</MenuItem>
                                                <MenuItem value="French">French</MenuItem>
                                                <MenuItem value="Italian">Italian</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <FormControl variant="outlined" size="small">
                                            <Input type="file" className="md:min-w-half" style={{minWidth: '135px'}} />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <TextareaAutosize size="small" className="border rounded border-gray-400 md:min-w-full" style={{minHeight: '36px', maxWidth: '100px'}} />
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