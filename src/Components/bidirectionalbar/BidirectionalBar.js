import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

 export const BidirectionalBar = () => {
  const data = [
    {
      type: '',
      sales: 0,
    },
    {
      type: '',
      sales: 0,
    },
    {
      type: '',
      sales: 0,
    },
    {
      type: 'EUR',
      sales: 100,
    },
    
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'EUR',
      },
      sales: {
        alias: 'EUR',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return <Column {...config} />;
};
