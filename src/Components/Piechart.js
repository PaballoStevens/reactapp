import React from "react";
import Chart from "react-google-charts";

function PieChart(){
    return (
       <div>
        Pie Chart
       <Chart
         width={'900px'}
         height={'500px'}
         chartType="PieChart"
         loader ={<div>Loading...</div>}
          data = {[
          ['Task', 'Hours per Day'],
          ['Bank',     11],
          ['Phone',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
          ]}

          var options = {{
            title: 'My Daily Activities',
            is3D: true,
            pieSliceText: 'label',
            slices: {  4: {offset: 0.2},
                      12: {offset: 0.3},
                      14: {offset: 0.4},
                      15: {offset: 0.5},
            },
          }} 
       />
       </div>
    );
}

export default PieChart;