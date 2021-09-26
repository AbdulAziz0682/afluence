import dataflow from '../../assets/dataflow.svg';

export default function DataFlowTab(props){
    return (
        <div className="flex w-full bg-gray-50 items-center justify-center h-full">
            <img src={dataflow} alt='data flow' />
        </div>
    )
}