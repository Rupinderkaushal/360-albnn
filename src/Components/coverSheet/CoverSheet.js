import React, { useState } from 'react';
import './CoverSheet.css';
import dashboard from '../../Assests/dashboard.png';
import pagination from '../../Assests/pagination.png';
import hamburger from '../../Assests/hamburger.png';
import {BsArrowRight,BsDot} from 'react-icons/bs';
import blob from '../../Assests/blob.png'; 

const CoverSheet = () => {
  const [checked, setChecked] = useState(false);
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const [user, setUser] = useState([
    {
      text: "car",
      status: false
    },
    {
      text: "truck",
      status: false
    },
  ])

  const handleChange = () => {
    setChecked(!checked)
  };

  const buttonData = ['Summary', 'People Data', 'Non-People', 'Month-wise', 'Tab-5', 'Tab-6',
    'Tab-7', 'Tab-8', 'Tab-9', 'Tab-10', 'Tab-11', 'Tab-12', 'Tab-13', 'Tab-14', 'Tab-15', 'Tab-16',
    'Tab-17', 'Tab-18', 'Tab-19', 'Tab-20',
  ]

  const highlightList = ['This dashboard provides Daily insights',
    'Sales Volume visibilty for Europe',
    'With analysis vs BU,LY and LE',
    'Detailed down till Brand level'
  ];

  const followLink =['New Demand','Enhancement/Impediment','Any Technical Problem'];
  const details =[
    {title:"Data Source", value:"SharePoint/Excel"},
    {title:"Apps Used", value:"Power BI/SQL/Azure"},
    {title:"Data Owner", value:"XXX Team"},
    {title:"Developer Team", value:"Command Center"},
    {title:"Data Scope", value:"Current Month"},
  ];

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input name="cb" type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  const handleChangeOne = (e) => {
    setCheckedOne(!checkedOne)
    setCheckedTwo(!checkedTwo);
  };

  const truckHandle = (e) => {
    const { name, checked } = e.target;
    console.log("kj", e.target)
    setUser(user.filter(val => val.text === name ? { text: val.text, status: checked } : val))
  }

  console.log(user)
  return (
    <div className='cover_sheet_wrapper'>
      <div className='dashboard_div'>
        <div className='dashboard_description'>
          <div className='dashboard_header'><img src={dashboard} /><h1>DASHBOARD DESCRIPTION:</h1></div>
          <div className='dashboard_text'>
            <h1> A Digital App for  tracking Budget utilization and Latest Estimate</h1>
          </div>
        </div>
        <div className='page_navigation'>
          <div className='navigation_header'>
            <div className='pagination_header'>
              <img src={pagination} />
            </div>
            <div className='pagination_content'>
              <h1>PAGE NAVIGATION</h1>
              <p>Point  at the table  below  to see  the description and  click to navigate to that page</p>
            </div>
          </div>
          <div className='button_wrapper'>
            {buttonData.map((val, index) => {
              return <div className='pagination_button_wrapper'>
                <button key={index} >{val}</button>
              </div>

            })}
          </div>
        </div>
      </div>
      <div className='key_highlights_div'>
        <div className='key_div'>
          <div className='headers'>
            <img src={hamburger} />
            <h1>KEY HIGHLIGHTS</h1>
          </div>
          <div className='key_details'>
            {highlightList.map((val,index)=>{
              return <p key={index}>[*] {val}</p>
            })}
            
          </div>
        </div>
        <div className='follow_div'>
        <div className='header'>
            <img src={hamburger} />
            <h1>FOLLOW THE LINK FOR</h1>
          </div>
          <div className='follow_details'>
             {followLink.map((val,index)=>{
              return <p key={index}><BsArrowRight/> {val}</p>
             })}
          </div>
        </div>
        <div className='other_div'>
        <div className='header'>
            <img src={hamburger} />
            <h1>OTHER DETAILS</h1>
          </div>
          <div className='other_details'>
            {details.map((val,index)=>{
              return <p><BsDot/> {val.title} : {val.value}</p>
            })}
          </div>
        </div>
        <div className='cover_pic'>
          <img src={blob}/>
        </div>
      </div>
    </div>
  )
}

export default CoverSheet;
