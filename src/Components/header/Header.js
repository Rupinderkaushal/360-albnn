import React from 'react'
import Logo from "../../Assests/logo.png";
import { FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useDispatch,useSelector } from 'react-redux';
import { hamHandler } from '../../store/slices/hamSlice';
const Header = () => {

  const dispatch= useDispatch();
  const hamVisible = useSelector((state)=>state.ham.isVisible);
  console.log("stsus",hamVisible)
  const clickHandler=()=>{
    dispatch(hamHandler());
  }
  return (
    <div className='main_header_wrapper'>
  <div className="header_div">
    <Link className="navbar-brand" to="/"><img style={{width:"120px",height:"20px"}} src={Logo} /></Link>
    
    <div   id="navbarNav">
      <div className='user-div'>
        <FaUserCircle className='faicon' size={30}/>
      </div>
      <div className='link-div'>
           <p id='username'>UserName(GLOBAL-V)</p>
           <p id="useraddr">username@abc.in</p>

      </div>
    </div>
  </div>
  <div className='navbar_ham' onClick={clickHandler}>
    {!hamVisible ? <GiHamburgerMenu size={36} style={{color:"white"}}/>:
    <AiOutlineClose  size={30} style={{color:"white"}}  />}
    </div>

    </div>
  )
}

export default Header