import { FormControl, IconButton, MenuItem, Select, Typography } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import Delete from '@material-ui/icons/Delete';

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
                                        <IconButton><Delete color="primary" /></IconButton>
                                        </>
                                    ))
                                }
                                </div>
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
                                <div className="w-full flex gap-1 justify-between items-center">
                                    <Typography variant="subtitle1">State</Typography>
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
                                        <IconButton><Delete color="primary" /></IconButton>
                                        </>
                                    ))
                                }
                                </div>
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
                                        <IconButton><Delete color="primary" /></IconButton>
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