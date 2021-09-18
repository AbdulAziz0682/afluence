import { FormControl, IconButton, MenuItem, Select, Typography, InputBase } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import NegativeIcon from '../../assets/negative.png';

export default function DrawerData({data}){
    if(!data) return 'No data';
    return <>
        {
            data.type === 'onEnterFunction' && (
                <div className="w-full flex flex-col flex-grow p-1 md:p-4 overflow-auto">
                    {
                        data.name === 'add_action_to_list' && (<>
                            <FormControl size="small" variant="outlined">
                                <Select value="add_action_to_list">
                                    <MenuItem value="add_action_to_list">add_action_to_list</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="flex flex-col w-full">
                                <div className="flex items-center w-full gap-1 sm:gap-10 mt-5">
                                    <Typography variant="h6" className="w-3/12 py-1">Action</Typography>
                                    <Typography variant="h6" className="w-36 md:flex-grow py-1">Parameters</Typography>
                                    <IconButton className="w-2/12 hover:bg-transparent"><AddCircle /></IconButton>
                                </div>
                                {
                                    data.data.map(item => 
                                        <div className="flex justify-between w-full gap-1 sm:gap-10 h-8 mb-5">
                                            <div className="w-3/12">
                                                <select className="w-20 md:w-full bg-gray-100 h-full">
                                                    {item.actions.map(i => <option value={i}>{i}</option>)}
                                                </select>
                                            </div>
                                            <div className="w-36 md:flex-grow">
                                                <select className="w-20 md:w-full bg-gray-100 h-full">
                                                    {item.params.map(i => <option value={i}>{i}</option>)}
                                                </select>
                                            </div>
                                            <IconButton className="w-2/12 hover:bg-transparent"><img src={NegativeIcon} style={{width: 22}} alt="delete" /></IconButton>
                                        </div>
                                    )
                                }
                            </div>
                            </>
                        )
                    }
                    {
                        data.name === 'send_action_list' && (<>
                            <FormControl size="small" variant="outlined">
                                <Select value="add_action_to_list">
                                    <MenuItem value="add_action_to_list">Send list of Actions</MenuItem>
                                </Select>
                            </FormControl>
                        </>)
                    }
                    {
                        data.name === 'transition' && (<>
                            <Typography variant="h6">Transition</Typography>
                            <div className="w-full flex flex-col">
                                <div className="flex items-center justify-between w-full gap-1 sm:gap-10 mt-5">
                                    <Typography variant="subtitle1" className="w-24 md:w-8/12 py-1">State</Typography>
                                    <IconButton className="w-2/12 hover:bg-transparent"><AddCircle color="primary" /></IconButton>
                                </div>
                                {
                                    [1, 2, 3].map(item => (
                                        <div className="flex justify-between w-full gap-1 sm:gap-10 h-8 mb-5">
                                            <div className="w-24 md:w-8/12">
                                                <select className="w-20 md:w-full bg-gray-100 h-full">
                                                    {[1, 2, 3].map(i => <option value={i}>{i}</option>)}
                                                </select>
                                            </div>
                                            <IconButton className="w-2/12 hover:bg-transparent"><img src={NegativeIcon} style={{maxHeight: 22, minWidth: 22}} alt="delete" /></IconButton>
                                        </div>
                                    ))
                                }
                            </div>
                        </>)
                    }
                </div>
            )
        }
        {
            data.type === 'onInputFunction' && (
                <div className="w-full flex flex-col flex-grow p-1 md:p-4 overflow-auto">
                    {
                        data.name === 'branch' && (<>
                            <FormControl size="small" variant="outlined">
                                <Select value="transition_based_on_command">
                                    <MenuItem value="transition_based_on_command">transition_based_on_command</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="w-full flex flex-col">
                                <div className="w-full flex gap-1 justify-between items-center">
                                    <Typography variant="subtitle1">Action</Typography>
                                    <Typography varint="subtitle1">Parameters</Typography>
                                    <IconButton><AddCircle color="primary" /></IconButton>
                                </div>
                                <div className="w-full flex gap-1 justify-between items-center">
                                {
                                    data.data.map(item => (
                                        <>
                                        <FormControl variant="outlined" size="small">
                                            <Select value={item.actions[0]}>
                                                {item.actions.map(i => <MenuItem value={i}>{i}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" size="small">
                                            <Select value={item.params[0]}>
                                                {item.params.map(i => <MenuItem value={i}>{i}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                        <IconButton><img src={NegativeIcon} style={{maxHeight: 22}} alt="delete" /></IconButton>
                                        </>
                                    ))
                                }
                                </div>
                            </div>
                            </>
                        )
                    }
                </div>
            )
        }
    </>
}