import { Table } from 'antd';
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './LeSubmission.css';

const dataSource = [
  {
    key: '1',
    "Plant": 'Plant',
    "PurchasingDocument": 32,
    "PO+Item": '10 Downing Street',
    "Document Date":23,
    "Name":"name",
    "Delivery Date":23,
    "Order Quantity":5,
    "Order":2,
    "Net PO value":34,
    "Inv value":21,
    'Email Id':"xyz@xyz.com",
    '2022 Leader':"Ramesh",
    '2022 Use case':54,

  },
  {
    key: '2',
    "Plant": 'Plant',
    "PurchasingDocument": 32,
    "PO+Item": '10 Downing Street',
    "Document Date":23,
    "Name":"name",
    "Delivery Date":23,
    "Order Quantity":5,
    "Order":2,
    "Net PO value":34,
    "Inv value":21,
    'Email Id':"xyz@xyz.com",
    '2022 Leader':"Ramesh",
    '2022 Use case':54,

  },
  {
    key: '3',
    "Plant": 'Plant',
    "PurchasingDocument": 32,
    "PO+Item": '10 Downing Street',
    "Document Date":23,
    "Name":"name",
    "Delivery Date":23,
    "Order Quantity":5,
    "Order":2,
    "Net PO value":34,
    "Inv value":21,
    'Email Id':"xyz@xyz.com",
    '2022 Leader':"Ramesh",
    '2022 Use case':54,

  },
  {
    key: '4',
    "Plant": 'Plant',
    "PurchasingDocument": 32,
    "PO+Item": '10 Downing Street',
    "Document Date":23,
    "Name":"name",
    "Delivery Date":23,
    "Order Quantity":5,
    "Order":2,
    "Net PO value":34,
    "Inv value":21,
    'Email Id':"xyz@xyz.com",
    '2022 Leader':"Ramesh",
    '2022 Use case':54,

  },
];
const columns = [
  {
    title: 'Plant',
    dataIndex: 'Plant',
    key: 'Plant',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Purchasing Document',
    dataIndex: 'PurchasingDocument',
    key: 'Purchasing Document',
  },
  {
    title: 'PO+Item',
    dataIndex: 'PO+Item',
    key: 'PO+Item',
  },

  {
    title: 'Document Date',
    dataIndex: 'Document Date',
    key: 'Document Date',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Delivery Date',
    dataIndex: 'Delivery Date',
    key: 'Delivery Date',
  },
  {
    title: 'Order Quantity',
    dataIndex: 'Order Quantity',
    key: 'Order Quantity',
  },
  {
    title: 'Order',
    dataIndex: 'Order',
    key: 'Order',
  },
  {
    title: 'Net PO value',
    dataIndex: 'Net PO value',
    key: 'Net PO value',
  },
  {
    title: 'Inv value',
    dataIndex: 'Inv value',
    key: 'Inv value',
  },
  {
    title: 'Email Id',
    dataIndex: 'Email Id',
    key: 'Email Id',
  },
  {
    title: '2022 Leader',
    dataIndex: '2022 Leader',
    key: '2022 Leader',
  },
  {
    title: '2022 Use case',
    dataIndex: '2022 Use case',
    key: '2022 Use case',
  },
];

const LeSubmission = () => {
  return (
    <div className='le_submission_wrapper' >
      <div className='sidebar_wrapperr'>
        <Sidebar/>
      </div>
      <div className='main_table' style={{marginTop:"50px",width:"85%"}}>
      <div  className='table_wrapper'>
        <div className='wrapper_header'><h2>PEOPLE DATA</h2></div>
        <div className='wrapper_table'>
          <div className='table_content'>
          <Table 
           dataSource={dataSource}
            columns={columns}
            scroll={{y:100,x:1500}}
            />
          </div>
        </div>
      </div>
      <div className='table_wrapper'>
        <div className='wrapper_header'><h2> NON PEOPLE</h2></div>
        <div className='wrapper_table'>
          <div className='table_content'>
          <Table 
          dataSource={dataSource}
           columns={columns}
           scroll={{y:100,x:1500}}
           />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
} 

export default LeSubmission