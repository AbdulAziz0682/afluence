import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function ChevronIcon({expanded, ...others}){
    return expanded ? <ChevronLeftIcon {...others} /> : <ChevronRightIcon {...others} />;
}