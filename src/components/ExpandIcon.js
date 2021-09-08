import { ExpandLess, ExpandMore } from "@material-ui/icons";

export default function ExpandIcon({expanded, ...others}){
    return expanded ? <ExpandLess {...others} /> : <ExpandMore {...others} />;
}