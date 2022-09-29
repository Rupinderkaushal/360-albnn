import React, { useState } from 'react';
import './Sidebar.css';
import {AiOutlineDown} from 'react-icons/ai';
import SidebarDiv from './SidebarDiv';
import { useSelector } from 'react-redux';

const dummy_data=[
    {   title:"Domain Leader",
        value:[
            {text:"United State"}
        ],
    },
];
const domain =[
    {   
        title:"Domain",
        value:[
            {text:"(blank)"},
            {text:"Finance & Operations"},
            {text:"All Domains"},
            {text:"Commercial Excellence & Rev Management"},
            {text:"Digital Cosumer"},
            {text:"Digital RTM"},
            {text:"Procurement"},
            {text:"ScoF"}
        ]
    },
];
const useCase=[
    {   
        title:"Usecase",
        value:[
            {text:"promotions"},
        ]
    },
];

const month=[
    {   
        title:"Month",
        value:[
            {text:"promotions"},
        ]
    },
];
const year=[
    {   
        title:"Year",
        value:[
            {text:"promotions"},
        ]
    },
];
const funding=[
    {   
        title:"Funding Category",
        value:[
            {text:"promotions"},
        ]
    },
];
const filterseven=[
    {   
        title:"Filter-7",
        value:[
            {text:"promotions"},
        ]
    },
];
const filtereight=[
    {   
        title:"Filter-8",
        value:[
            {text:"promotions"},
        ]
    },
];
const filternine=[
    {   
        title:"Filter-9",
        value:[
            {text:"promotions"},
        ]
    },
];

const Sidebar = () => {
    const {filter}= useSelector(state=>state.user);
  return (<div className='sidebar_main_div'>
        <div className='sidebar_wrapper'>
        {dummy_data.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {domain.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {useCase.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {month.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {year.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {funding.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {filterseven.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {filtereight.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    <div  className='sidebar_wrapper'>
        {filternine.map((val,index)=>{
            return <SidebarDiv index={index} val={val}/>
        })}     
    </div>
    </div>
  )
}

export default Sidebar