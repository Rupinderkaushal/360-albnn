import React from 'react';
import '../header/Header.css';
import {Link, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
 
const navLinks=[
  {
    title:"CoverSheet",
    addr:"/coversheet"
  },
  {
    title:"Summary Page",
    addr:"/summarypage"
  },
  {
    title:"People Data",
    addr:"/peopledata"
  },
  {
    title:"Non-People Data",
    addr:"/nonpeopledata"
  },
  {
    title:"LE Submission",
    addr:"/lesubmission"
  },
  {
    title:"MonthWiseTrend",
    addr:"/monthwisetrend"
  },
];
 


const Navbar = () => {

  const hamStatus = useSelector((state)=>state.ham.isVisible);
  console.log("isvisible",hamStatus);

  return (<>
    <div className='navlink_main'>
    <div className='navlink_wrapper'>
      {navLinks.map((val,index)=>{
        return <NavLink   key={index} exact to={val.addr}  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >{val.title}</NavLink>
      })} 
    </div>
    </div>
    {hamStatus && <div className='navlink_mobile'>
      {navLinks.map((val,index)=>{
        return <NavLink   key={index} exact to={val.addr}  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >{val.title}</NavLink>
      })} 
    </div> }
    
    </>
  )
}

export default Navbar;