import React from 'react';
import "./SemiCircleChart.css";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { DemoPie } from '../donut/Donut';

const SemiCircleChart = (props) => {
  return (
    <div>
        <DemoPie val='23' value='77' hddr='Total'/>
    </div>
  )
}

export default SemiCircleChart