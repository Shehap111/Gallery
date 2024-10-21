import React, { useState, useEffect } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import logo from '../../images/cowboy-hat-41987.png'
import './navbar.scss'
const Navbar = ({  isChecked,  setIsChecked}) => {


  useEffect(() => {
    if (isChecked) {
      document.body.setAttribute('dir', 'rtl');  
    } else {
      document.body.setAttribute('dir', 'ltr');  
    }
  }, [isChecked]);


  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);  
  };

  return (
    <div className='navbar'>
      <div className="container">
{/* lang */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
          role="switch"
          id="flexSwitchCheckChecked"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          { isChecked ? 'Ar' : 'En' }
        </label>
      </div>        
        
      <div className="logo">
          <img src={logo} alt="logo" />  
     </div>

 <DarkMode className='a'/>   

      
    </div>
    </div>
  );
};

export default Navbar;
