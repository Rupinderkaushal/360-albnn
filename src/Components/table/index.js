import React from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: 'Funding Type',
      dataIndex: 'fundingtype',
      key:"fundingtype",
    },
    {
      title: 'Lead',
      dataIndex: 'lead',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Use case',
      dataIndex: 'usecase',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
        title: 'Filled',
        dataIndex: 'filled',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'New PID',
        dataIndex: 'newpid',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Total',
        dataIndex: 'total',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'TOTAL BUDGET',
        dataIndex: 'totalbudget',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Commited',
        dataIndex: 'commited',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Confirmed',
        dataIndex: 'confirmed',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'VC(Filled)',
        dataIndex: 'vcfilled',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
       
      {
        title: 'VC(Open)',
        dataIndex: 'vcopen',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Vendor Act',
        dataIndex: 'vendoract',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Vendor YTG',
        dataIndex: 'vendorytg',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Travel Act',
        dataIndex: 'travelact',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Travel YTG',
        dataIndex: 'travelytg',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Training Act',
        dataIndex: 'trainingact',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'Training YTG',
        dataIndex: 'trainingytg',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: 'TOTAL SPEND',
        dataIndex: 'totalspend',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
  ];
  const data = [
    {
      key: '1',
      fundingtype: 'Cross Charge',
      lead: "Madhur",
      domain:"Finance & Operations",
      usecase:"7.1 Credit Risk Assessment",
      filled:11,
      newpid:1,
      open:14,
      total:17,
      totalbudget:575.82,
      commited:575.83,
      confirmed:575.83,
      vcfilled:73.48,
      vcopen:3.81,
      vendoract:0.00,
      vendorytg:0.00,
      travelact:0.00,
      travelytg:0.00,
      trainingact:0,
      trainingytg:0,
      totalspend:607.25,
    },
    {
      key: '2',
      fundingtype: 'Cross Charge',
      lead: "Nitesh",
      domain:"Finance & Operations",
      usecase:"7.1 Credit Risk Assessment",
      filled:11,
      newpid:1,
      open:14,
      total:17,
      totalbudget:575.82,
      commited:575.83,
      confirmed:575.83,
      vcfilled:73.48,
      vcopen:3.81,
      vendoract:0.00,
      vendorytg:0.00,
      travelact:0.00,
      travelytg:0.00,
      trainingact:0,
      trainingytg:0,
      totalspend:607.25,
    },
    {
      key: '3',
      fundingtype: 'Cross Charge',
      lead: "Nitesh",
      domain:"Finance & Operations",
      usecase:"7.1 Credit Risk Assessment",
      filled:11,
      newpid:1,
      open:14,
      total:17,
      totalbudget:575.82,
      commited:575.83,
      confirmed:575.83,
      vcfilled:73.48,
      vcopen:3.81,
      vendoract:0.00,
      vendorytg:0.00,
      travelact:0.00,
      travelytg:0.00,
      trainingact:0,
      trainingytg:0,
      totalspend:607.25,
    },
    {
      key: '4',
      fundingtype: 'Cross Charge',
      lead: "Madhur",
      domain:"Finance & Operations",
      usecase:"7.1 Credit Risk Assessment",
      filled:11,
      newpid:1,
      open:14,
      total:17,
      totalbudget:575.82,
      commited:575.83,
      confirmed:575.83,
      vcfilled:73.48,
      vcopen:3.81,
      vendoract:0.00,
      vendorytg:0.00,
      travelact:0.00,
      travelytg:0.00,
      trainingact:0,
      trainingytg:0,
      totalspend:607.25,
    },
  ];
  
const TableComp = () => {
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
        <h4 style={{textAlign:"left",padding:"10px"}}>Budget Summary</h4>
         <Table columns={columns} dataSource={data} onChange={onChange}/>
    </div>
  )
}

export default TableComp;