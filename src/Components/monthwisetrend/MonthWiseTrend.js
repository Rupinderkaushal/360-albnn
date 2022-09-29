import React, { useState } from 'react';
import './MonthWiseTrend.css';
import { useDispatch ,useSelector} from 'react-redux';
import { addFilter } from '../../store/slices/userSlice';
import Sidebar from '../sidebar/Sidebar';
const MonthWiseTrend = () => {
  const listData= useSelector(state=>state)
  const dispatch= useDispatch();
 

  return (
    <div className='month_wise_trend_wrapper'>
      <div className='sidebar_links_content'>
        <Sidebar/>
      </div>
        <div className='bar_div'>
          <div className='bar_div_wrapper'>
            
          </div>
        </div>
    </div>
  )
}

export default MonthWiseTrend