import React from 'react';
import { Gauge } from '@ant-design/plots';

 export const GaugeComp = () => {
  const config = {
    percent: 0.55,
    range: {
      color: '#FFD64D',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '15px',
          color: '#000000',
          fontweight:"bold",
        },
        formatter: () => '50k',
      },
      content: {
        style: {
          fontSize: '10px',
          color: '#000000',
        },
        formatter: () => 'Confirmed',
      },
    },
  };
  return <Gauge {...config} />;
};
