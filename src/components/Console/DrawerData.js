import { FormControl, IconButton, MenuItem, Select, Typography } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import NegativeIcon from '../../assets/negative.png';
import AddCommandBranch from "../AddCommandBranch";

export default function DrawerData({data}){
    if(!data) return '';
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
                                <div className="flex justify-between w-full gap-1 sm:gap-10 mt-5">
                                    <Typography variant="h6" className="w-3/12 py-1">Action</Typography>
                                    <Typography variant="h6" className="w-36 md:flex-grow py-1">Parameters</Typography>
                                    <IconButton className="w-4 hover:bg-transparent"><AddCircle /></IconButton>
                                </div>
                                {
                                    data.data.map(item => 
                                        <div className="flex justify-between w-full gap-1 sm:gap-10 h-8 mb-5">
                                            <div className="w-3/12">
                                                <select className="bg-gray-100 w-full h-full">
                                                    {item.actions.map(i => <option value={i}>{i}</option>)}
                                                </select>
                                            </div>
                                            <div className="w-36 md:flex-grow">
                                                <select className="bg-gray-100 w-full h-full">
                                                    {item.params.map(i => <option value={i}>{i}</option>)}
                                                </select>
                                            </div>
                                            <IconButton className="w-4 hover:bg-transparent"><img src={NegativeIcon} style={{minWidth: 22, maxHeight: 22}} alt="delete" /></IconButton>
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
                            <FormControl size="small" variant="outlined" className="lg:w-11/12">
                                <Select value="Transition">
                                    <MenuItem value="Transition">Transition</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="w-full flex flex-col">
                                <div className="flex items-center justify-between w-full gap-1 sm:gap-10 mt-5">
                                    <Typography variant="subtitle1" className="flex-grow py-1">State</Typography>
                                    <IconButton className="w-2/12 hover:bg-transparent"><AddCircle color="primary" /></IconButton>
                                </div>
                                {
                                    [1, 2, 3].map(item => (
                                        <div className="flex justify-between w-full gap-1 sm:gap-10 h-8 mb-5">
                                            <div className="flex-grow">
                                                <select className="w-full bg-gray-100 h-full">
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
                <div className="w-full flex flex-col flex-grow p-1 md:p-4 overflow-auto lg:w-10/12">
                    {
                        data.name === 'branch' && (<>
                            <FormControl size="small" variant="outlined" className="mb-3">
                                <Select value="transition_based_on_command">
                                    <MenuItem value="transition_based_on_command">transition_based_on_command</MenuItem>
                                </Select>
                            </FormControl>
                            <AddCommandBranch variant="contained" color="primary" fullWidth className="mb-3"><span>+</span><span>Add Command Branch</span></AddCommandBranch>
                            {
                                [1, 2].map(item => (
                                    <div className="flex divide-x mb-3 border rounded items-stretch">
                                        <div className="flex-grow flex flex-col divide-y">
                                            <div className="flex p-2 flex-grow gap-1">
                                                <select className="w-20 flex-grow bg-gray-100 p-1 h-full">
                                                    {['one', 'two', 'three'].map(i => <option value={i}>{i}</option>)}
                                                </select>
                                                <span className="w-10 p-1 bg-gray-500 text-white rounded text-center">+</span>
                                            </div>
                                            <div className="flex p-2 flex-grow flex-col items-end gap-1">
                                                <div className="flex w-full md:w-11/12 gap-1">
                                                    <select className="w-20 p-1 flex-grow bg-gray-100 h-full">
                                                        {['add_actions'].map(i => <option value={i}>{i}</option>)}
                                                    </select>
                                                    <span className="w-10 p-1 bg-red-600 text-white rounded text-center">-</span>
                                                </div>
                                                {/*for adding actions */}
                                                <div className="flex items-center w-full md:w-11/12 gap-3">
                                                    <Typography variant="subtitle2" className="w-3/12 py-1">Action</Typography>
                                                    <Typography variant="subtitle2" className="flex-grow py-1">Parameters</Typography>
                                                    <IconButton className="w-4 hover:bg-transparent"><AddCircle /></IconButton>
                                                </div>
                                                {
                                                    [1].map(item => 
                                                        <div className="flex justify-between items-center w-full md:w-11/12 gap-3 mb-1">
                                                            <div className="w-3/12">
                                                                <select className="w-full bg-gray-100 h-8">
                                                                    {[1, 2].map(i => <option value={i}>{i}</option>)}
                                                                </select>
                                                            </div>
                                                            <div className="w-36 md:flex-grow">
                                                                <select className="w-full bg-gray-100 h-8">
                                                                    {[1, 2].map(i => <option value={i}>{i}</option>)}
                                                                </select>
                                                            </div>
                                                            <IconButton className="w-4 hover:bg-transparent"><img src={NegativeIcon} style={{minWidth: 22, maxHeight: 22}} alt="delete" /></IconButton>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className="flex p-2 flex-grow flex-col items-end gap-1">
                                                <div className="flex w-full md:w-11/12 gap-1">
                                                    <select className="w-20 p-1 flex-grow bg-gray-100 h-full">
                                                        {['transitions'].map(i => <option value={i}>{i}</option>)}
                                                    </select>
                                                    <span className="w-10 p-1 bg-red-600 text-white rounded text-center">-</span>
                                                </div>
                                                {/*for adding actions */}
                                                <div className="flex items-center w-full md:w-11/12 gap-3">
                                                    <Typography variant="subtitle2" className="w-12 md:flex-grow py-1">State</Typography>
                                                </div>
                                                {
                                                    [1].map(item => 
                                                        <div className="flex justify-between items-center w-full md:w-11/12 gap-3 mb-1">
                                                            <div className="flex-grow">
                                                                <select className="w-full bg-gray-100 h-8">
                                                                    {[1, 2].map(i => <option value={i}>{i}</option>)}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>                                            
                                        </div>
                                        <div style={{minWidth: 30}} className="bg-red-600 text-white text-center flex justify-center items-center"><span>-</span></div>
                                    </div>
                                ))
                            }
                            </>
                        )
                    }
                </div>
            )
        }
    </>
}