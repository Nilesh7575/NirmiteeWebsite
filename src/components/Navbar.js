import React from 'react'
import company from '../images/company.png'
function Navbar() {
  return (
    <div className='navbar'>
    
    <div className='navbar-items'>
      
      <div className='navbar-items-left'>
        <img src={company} alt="" />
    
    <p>Home </p>


    <p>Services</p>

    <p>Portfolio </p>

    <p>Case Studies </p>
    </div>


    <div className='navbar-empty-middle'></div>

    <div className='navbar-items-right'>
<p>Team</p>
<button>Talk to experts</button>
    </div>
        </div>

    </div>
  )
}

export default Navbar