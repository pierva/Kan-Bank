import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';


class Pie extends Component {
  render(){
    return (
      <PieChart
        slices={[
          {
            color: '#f00',
            value: 40
          },
          {
            color: '#00ab00',
            value: 60
          }
        ]}
      />
    );
  }
}

export default Pie;
