import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: (()=>{
    let arr = [];
    for(let i=0; i<15; i++){
      arr.push(i+'');
    }
    return arr;
  })(),
  datasets: [
    {
      label: '# of Votes',
      data: (()=>{
        let arr = [];
        for(let i=0; i<15; i++){
          arr.push(Math.floor(Math.random()*30));
        }
        return arr;
      })(),
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
        grid:{
         display:false
             }
       },
    y: 
       {
     grid:{
      display:false
          }
       }
  }
};

const LineChart = () => (
    <Line height={100} data={data} options={options} />
);

export default LineChart;