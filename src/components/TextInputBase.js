import { InputBase } from "@material-ui/core"

export default function TextInputBase({className, helperText, value, onChange, ...others}){
    return (
        <span>
        <InputBase 
            className={"bg-gray-100 "+className} 
            value={value}
            onChange={onChange}
            {...others}
        />
        <p className="text-red-600 text-xs">{helperText}</p>
        </span>
    )
}