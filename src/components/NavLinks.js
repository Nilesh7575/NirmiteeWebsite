import React from 'react'
import {motion} from 'framer-motion'

function NavLinks({props}) {


  return (
//     <div>
//         <div class="dropdown">
//   <button class="dropbtn"> 
//   <p>Home</p> 
//   {/* <img src={arrowdown} alt="" /> */}
  
//   </button> 
//   <div class="dropdown-content">
//     <a href="#">Link 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minima quisquam vel blanditiis in eos sint ad, consectetur consequatur nam quod ipsum! Ipsa odit laboriosam qui. Esse dolor vero ad.</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>


// <div class="dropdown">
//   <button class="dropbtn"> 
//   <p>Home</p> 
//   {/* <img src={arrowdown} alt="" /> */}
  
//   </button> 
//   <div class="dropdown-content">
//     <a href="#">Link 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minima quisquam vel blanditiis in eos sint ad, consectetur consequatur nam quod ipsum! Ipsa odit laboriosam qui. Esse dolor vero ad.</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>




// <div class="dropdown">
//   <button class="dropbtn"> 
//   <p>Home</p> 
//   {/* <img src={arrowdown} alt="" /> */}
  
//   </button> 
//   <div class="dropdown-content">
//     <a href="#">Link 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minima quisquam vel blanditiis in eos sint ad, consectetur consequatur nam quod ipsum! Ipsa odit laboriosam qui. Esse dolor vero ad.</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>
//     </div>


<div className='nav-links'>
<ul>
    <motion.li 
    initial={animatieFrom}
    animate={animateTo}

    onClick={() => props.isMobile && props.closeMobileMenu()}> <a href="/">Home</a></motion.li>
    <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/">Home</a></motion.li>
    <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}> 
        <a href="/">Home</a></motion.li> 
        <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}> <a href="/">Home</a></motion.li>
        <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/">Home</a></motion.li>
</ul>
</div>
  )
}

export default NavLinks