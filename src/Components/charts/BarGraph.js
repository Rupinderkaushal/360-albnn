import React from 'react'
import { Column } from '@ant-design/plots';

const data = [
    {
      type: 'Cross Charge',
      values: [0, 5000],
    },
    {
      type: 'GAC CAPEX',
      values: [5000,10000],
    },
    {
      type: 'Total',
      values: [0, 4000],
    },
  ];
  const brandColor = 'green';
  const paletteSemanticRed = '#FFD64D';
  const config = {
    data,
    xField: 'type',
    yField: 'values',
    isRange: true,
    
    color: ({ type }) => {
        console.log("type",type)
        if (type === 'Total') {
          return paletteSemanticRed;
        }
  
        return brandColor;
      },
    label: {
      position: 'middle',
      layout: [
        {
          type: 'adjust-color',
        },
      ],
    },
  };
const BarGraph = () => {
  return (
    <div>
        <Column{...config}/>
    </div>
  )
}

export default BarGraph