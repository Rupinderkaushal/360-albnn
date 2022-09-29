import React,{useState} from 'react';
import './Sidebar.css';
import {AiOutlineDown} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../store/slices/userSlice';

const SidebarDiv = ({val,index}) => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    // console.log("@@@@ state ####",state)
    const [isChecked,setIsChecked]= useState(
        new Array(val.length).fill(false)
    );
    const [title,setTitle]= useState('All');
    const [iconMove,setIconMove]= useState(false);
    
    // const handleOnChange =(e)=>{
    //     setIsChecked(!isChecked)
    //     if(!isChecked){
    //     setTitle(e.target.value)
    //     dispatch(addFilter(e.target.value))
    //     }
    //     else{
    //         setTitle('')
    //     }
    // };

    const iconHandler=()=>{
        setIconMove((prev)=>!prev)
    };

    const handlerChange = (e,position) => {
        const updatedCheckedState = isChecked.map((item, index) =>
          index === position ? !item : item
        );
    
        setIsChecked(updatedCheckedState);
        if(isChecked){
            setTitle(e.target.value)
            dispatch(addFilter(e.target.value))
            }
            else{
                setTitle('')
            }

       console.log("checkedvalues",e.target.value)
    }
    
  return (
    <div>
         <div key={index}   className='sidebar_div' > 
            <label className='sidebar_header'>{val.title}</label>
            <div onClick={iconHandler} className='filter_div'>
                <span className='filter-text'>{title}</span><AiOutlineDown className={iconMove?'icon':'iconrotate'}/>
            </div>
            {iconMove && <>
            {val.value.map((val,index)=>{
                return <div key={index} className='checkbox_wrapper'>
                <input 
                 type="checkbox" 
                 id={val.text}
                 name={val.text}
                 onChange={(e)=>handlerChange(e,index)} 
                 checked={isChecked[index]}
                 value={val.text}
                 />
                <div id='all'>{val.text}</div>
            </div>
                 })}
            
                 </>}
                 </div>
    </div>

  )
}

export default SidebarDiv;