import {useState} from 'react';
import {Grid, Button, Typography, IconButton, InputBase, Table, TableContainer, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import NegativeIcon from '../../assets/negative.png';

export default function AddCommandTab(props){
    let [file, setFile] = useState(null);
    function handleFileInput(e){
        setFile(e.target.files[0]);
    }
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto bg-white h-full">
            <Grid item className="gap-3 p-2 sm:p-3 border-b items-center justify-between flex flex-col md:flex-row">
                <InputBase 
                    label="Enter command Name"
                    className="w-full md:w-6/12 px-2 bg-gray-100 h-10 rounded-lg"
                />
                <div className="flex gap-9 md:justify-end w-full md:w-5/12 items-center justify-between">
                    <Button variant="contained" color="secondary" className="md:w-36">Cancel</Button>
                    <Button variant="contained" color="primary" className="md:w-36">Save</Button>
                </div>
            </Grid>
            <Grid item className="p-2 sm:p-3 w-full">
                <Grid container direction="column">
                    <Grid item className="flex flex-col w-full">
                        <Typography variant="h4">Add sample Phrases</Typography>
                        <Typography variant="body1">Upload sample audio phrases that a user might say to match this command.</Typography>
                    </Grid>
                    <Grid item container direction="column" className="mt-8 overflow-auto w-full">
                        <TableContainer className="w-full">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="border-b-0 px-0.5 md:px-3"><Typography color="primary" className="text-sm md:text-lg font-bold">Language</Typography></TableCell>
                                        <TableCell className="border-b-0 px-0.5 md:px-3"><Typography color="primary" className="text-sm md:text-lg font-bold text-center lg:text-left">Audio</Typography></TableCell>
                                        <TableCell className="border-b-0 px-0.5 md:px-3"><Typography color="primary" className="text-sm md:text-lg font-bold">Text</Typography></TableCell>
                                        <TableCell className="px-0.5 md:px-3 border-b-0 w-4 last:pr-0"><IconButton><AddCircle /></IconButton></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        [1,2,3].map(item => (
                                            <TableRow>
                                                <TableCell className="px-0.5 md:px-3 my-1 border-b-0">
                                                    <select className="w-full lg:w-32 bg-gray-100 h-9">
                                                        <option value="English">English</option>
                                                        <option value="French">French</option>
                                                        <option value="Italian">Italian</option>
                                                    </select>
                                                </TableCell>
                                                <TableCell className="px-0.5 md:px-3 my-1 border-b-0">
                                                    <input 
                                                        className="hidden" 
                                                        id="upload-audio" 
                                                        type="file"
                                                        onChange={handleFileInput}
                                                    />
                                                    <div className="rounded-sm bg-gray-100 px-1 w-30 md:w-11/12 xl:w-9/12 md:flex-row h-9 flex flex-col justify-between items-center">
                                                        <span className="overflow-auto h-full w-full px-2 text-xs">{ file ? file.name : "No file chosen"}</span>
                                                        <label htmlFor="upload-audio" className="bg-white rounded-lg text-xs px-1 w-28 text-center">Choose file</label>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="px-0.5 md:px-3 my-1 border-b-0">
                                                    <InputBase 
                                                        placeholder="Enter text here"
                                                        className="bg-gray-100 w-24 md:w-40 lg:w-60 xl:w-full h-8 px-2" 
                                                    />
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