
import {Grid, Button, Typography, IconButton, InputBase} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import NegativeIcon from '../../assets/negative.png';

export default function AddEditTab(props){
    let action = props.action;
    return (
        <Grid container direction="column" className="border rounded-lg overflow-scroll sm:overflow-auto">
            <Grid item className="flex gap-3 p-2 sm:p-3 border-b items-center justify-between flex flex-col md:flex-row">
                <InputBase 
                    label="Enter command Name"
                    value={action.name}
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
                        <Typography variant="h4">Parameters List</Typography>
                    </Grid>
                    <Grid item container direction="column" className="mt-8">
                        <Grid item className="flex w-full gap-4 md:gap-24">
                            <Typography variant="h6" className="w-36 md:flex-grow py-1">Name</Typography>
                            <Typography variant="h6" className="w-36 md:flex-grow py-1">Data type</Typography>
                            <IconButton className="w-2/12 hover:bg-transparent"><AddCircle /></IconButton>
                        </Grid>
                        {
                            [1].map(item => <>
                                <Grid item className="flex justify-between w-full gap-1 md:gap-24 h-8 mb-5">
                                    <div className="w-36 md:flex-grow">
                                        <InputBase 
                                            className="bg-gray-100 md:w-full h-full px-2" 
                                        />
                                    </div>
                                    <div className="w-36 md:flex-grow">
                                        <select className="w-20 md:w-full bg-gray-100 h-full">
                                            <option value="String">String</option>
                                            <option value="Number">Number</option>
                                            <option value="Boolean">Boolean</option>
                                        </select>
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