import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import "./SummaryPage.css";
import Gadget from '../../Assests/calculator.png';
import Dollar from '../../Assests/dollar.png';
import Home from '../../Assests/home.png';
import Vehicle from '../../Assests/truck.png';
import Profile from '../../Assests/profile.png';
import SemiCircleChart from '../semicirclechart/SemiCircleChart';
import Table from '../table/index';
import BarGraph from '../charts/BarGraph';
import BarNewGraph from '../charts/BarNewGraph';
import { GaugeComp } from '../gauge/Gauge';
import { BidirectionalBar, DemoBidirectionalBar } from '../bidirectionalbar/BidirectionalBar';
import { DemoPie } from '../donut/Donut';

const linkData=[
  {
    icon:Dollar,
    title:"Budget",
    price:"5828.69"
  },
  {
    icon:Home,
    title:"Actuals(YTD)",
    price:"1818.04"
  },
  {
    icon:Vehicle,
    title:"Latest estimate",
    price:"5074.42"
  },
  {
    icon:Profile,
    title:"Filled Positions",
    price:"97"
  },
  {
    icon:Gadget,
    title:"Open Positions",
    price:"20"
  },
];
const rangeData =[
  {
    value:"6.66K",
    title:"COMMITED"
  },
  {
    value:"5.56K",
    title:"TOTAL BUDGET"
  },
  {
    value:"5.56K",
    title:"CONFIRMED"
  },
  {
    value:"7.36K",
    title:"TOTAL SPEND"
  },
];

const tableHeader=['Funding Type','Lead','Domain']

const SummaryPage = () => {
  return (
    <div className='main_wrapper'>
    <div className='summary_page_wrapper'>
        <div className='summary_sidebar_div'>
            <Sidebar/>
        </div>
        <div className='summary_homepage_div'>
            <div className='summary_header'>
              {linkData.map((val,index)=>{
                return <div key={index} className='summary_link_wrapper'>
                <div className='link_icon'>
                  <img style={{width:"20px",height:"20px"}} src={val.icon} />
                </div>
                <div className='link_header'>
                  <div>{val.title}</div>
                  <div>{val.price}</div>
                </div>
              </div>
              })}
              
            </div>
            <div className='budget_div_wrapper'>
               <div className='total_budget_div'>
                <div className='budget_header'>
                  <h5>TOTAL BUDGET</h5>
                  <p>SPLIT BY CATEGORY</p>
                  <BarGraph id='budget_graph' />
                </div>
               </div>
               <div className='cross_charged_div'>
               <div className='cross_charged_header'>
                  <h5>Cross Charge Confirmed vs Commited</h5>
                </div>
                <div className='cross_range_wrapper'>
                  <div className='loading_div'>
                    <GaugeComp/>
                  </div>
                  <div className='cross_value_div'>
                    {rangeData.map((val,index)=>{
                      return   <div key={index} className='value_main_div'>
                      <h3>{val.value}</h3>
                      <text>{val.title}</text>
                    </div>
                    })}
                   
                  </div>
                </div>
               </div>
            </div>
            <div className='surplus'>
              <h1>SURPLUS/DEFICIT</h1>
              <BarGraph />
            </div>
            <div className='overall_summary'>
              <div className='overall'>
                <h2>OVERALL SUMMARY</h2>
              <BarGraph/>
              </div>
              <div className='cross_charge'>
                <h2>Cross Charge Confirmation Status</h2>
              <BidirectionalBar/>
              </div>
            </div>
            <div className='category_analysis'>
             <div className='cate_main'>
             <h2>CATEGORY ANALYSIS</h2>
              <p>ACTUALS BY CATEGORY</p>
              <DemoPie val='96' value='4' hddr='7.63k'/>
             </div>
             <div className='pid'>
              <p>PID COUNT</p>
              <div className='input_wrapper'>
              <select>
                <option>2022 Use Case</option>
              </select>
              <h5>Total</h5>
              </div>
             </div>
            </div>
        </div>
    </div>
    <div className='budget_summary_table'>
      <div className='table_div'>
        <Table/>
    </div>
    </div>
    </div>
  )
}

export default SummaryPage;