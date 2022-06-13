import { getBottomNavigationActionUtilityClass } from '@mui/material'
import React, {useState} from 'react'
import NavLinks from './NavLinks';
import './Navbar.css'
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdMenu} from 'react-icons/io';


function MobileNavigation() {

    const [open, setOpen] =  useState(false);

    const hamburgerIcon =  <IoMdMenu className='menu-icon' onClick={()=> setOpen(!open) } />

    const closeIcon =  <AiOutlineClose className='menu-icon' onClick={()=> setOpen(!open) } />

const closeMobileMenu = () => setOpen(false);

  return (
       <div className='mobile-navigation'>
         
         {open ? closeIcon : hamburgerIcon}
           { open && <NavLinks isMobile = {true} closeMobileMenu={closeMobileMenu}/> }

       </div>
            
    )
}

export default MobileNavigation