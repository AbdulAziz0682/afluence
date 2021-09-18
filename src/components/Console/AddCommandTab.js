import {useState} from 'react';
import {Grid, Button, Typography, IconButton, InputBase} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import NegativeIcon from '../../assets/negative.png';

export default function AddCommandTab(props){
    let [file, setFile] = useState(null);
    function handleFileInput(e){
        setFile(e.target.files[0]);
    }
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto bg-white">
            <Grid item className="flex gap-3 p-2 sm:p-3 border-b items-center justify-between flex flex-col md:flex-row">
                <InputBase 
                    label="Enter command Name"
                    className="w-full md:w-6/12 px-2 bg-gray-100 h-10 rounded-lg"
                />
                <div className="flex gap-9 md:justify-end w-full md:w-5/12 items-center justify-between">
                    <Button variant="contained" color="secondary" className="w-36">Cancel</Button>
                    <Button variant="contained" color="primary" className="w-36">Save</Button>
                </div>
            </Grid>
            <Grid item className="p-1 sm:p-3">
                <Grid container direction="column">
                    <Grid item className="flex flex-col">
                        <Typography variant="h4">Add sample Phrases</Typography>
                        <Typography variant="body1">Upload sample audio phrases that a user might say to match this command.</Typography>
                    </Grid>
                    <Grid item container direction="column" className="mt-8">
                        <Grid item className="flex w-full gap-4 sm:gap-6">
                            <Typography variant="h6" className="w-2/12 py-1">Language</Typography>
                            <Typography variant="h6" className="w-36 md:flex-grow py-1">Audio</Typography>
                            <Typography variant="h6" className="w-36 md:flex-grow py-1">Text</Typography>
                            <IconButton className="w-2/12 hover:bg-transparent"><AddCircle /></IconButton>
                        </Grid>
                        {
                            [1].map(item => <>
                                <Grid item className="flex justify-between w-full gap-1 sm:gap-6 h-8 mb-5">
                                    <div className="w-2/12">
                                        <select className="w-20 md:w-full bg-gray-100 h-full">
                                            <option value="English">English</option>
                                            <option value="French">French</option>
                                            <option value="Italian">Italian</option>
                                        </select>
                                    </div>
                                    <div className="w-36 md:flex-grow">
                                        <input 
                                            className="hidden" 
                                            id="upload-audio" 
                                            type="file"
                                            onChange={handleFileInput}
                                        />
                                        <div className="rounded-sm bg-gray-100 px-1 md:w-full h-full flex justify-between items-center">
                                            <span className="overflow-hidden h-full w-12 md:w-full px-2">{ file ? file.name : "No file chosen"}</span>
                                            <label htmlFor="upload-audio" className="bg-white rounded-lg text-xs px-1 md:w-24">Choose file</label>
                                        </div>
                                    </div>
                                    <div className="w-36 md:flex-grow">
                                        <InputBase 
                                            className="bg-gray-100 md:w-full h-full px-2" 
                                        />
                                    </div>
                                    <IconButton className="w-2/12 hover:bg-transparent"><img src={NegativeIcon} style={{width: 22}} alt="delete" /></IconButton>
                                </Grid>                            
                            </>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}