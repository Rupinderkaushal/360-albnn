import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import "./NonPeopleData.css";
import Profile from '../../Assests/profile.png';
import { Table } from 'antd';

const headerData=['ACTUALS','BUDGET','LATEST ESTIMATE'];
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
const NonPeopleData = () => {
  return (
    <div className='people_data_wrapper'>
      <div className='people_data_sidebar'>
      <Sidebar/>
      </div>
      <div className='people_data_header'>
        <div className='header_wrapper'>
          {headerData.map((val,index)=>{
            return <div key={index} className='header_nav'>
            <img src={Profile} />
            <p>{val}</p>
          </div>
          })}
        
        </div>
        <div className='table_wrapper'>
          <h1>VENDOR DETAILS</h1>
          <div style={{display:"flex",justifyContent:"flex-end",}}>
        <div className='table_div'>
          <Table
          dataSource={dataSource}
           columns={columns}
           scroll={{x:1500,y:100}}
           />
        </div></div>
        </div>
        <div className='table_wrapper'>
          <h1>TRAVEL DETAILS</h1>
          <div style={{display:"flex",justifyContent:"flex-end",}}>
        <div className='table_div'>
          <Table 
          dataSource={dataSource}
           columns={columns}
           scroll={{x:1500,y:100}}
           />
        </div></div>
        </div>
        <div className='table_wrapper'>
          <h1>AZURE TECHNOLOGY DETAILS</h1>
          <div style={{display:"flex",justifyContent:"flex-end",}}>
        <div className='table_div'>
          <Table  
          dataSource={dataSource} 
          columns={columns}
          scroll={{x:1500,y:100}}
          />
        </div></div>
        </div>
       
      </div>
      
    </div>
  )
}

export default NonPeopleData;