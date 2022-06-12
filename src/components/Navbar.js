import React, {useState} from 'react'
import company from '../images/company1.png'
import arrowdown from '../images/arrow-down.svg'
import './Navbar.css'
import MobileNavigation from './MobileNavigation'
import { Fade as Hamburger } from 'hamburger-react'

import { motion } from "framer-motion";

function Navbar() {


  const [isOpen, setOpen] = useState(true);



  const containerVariants = {
    hidden: {
      opacity: 0,
  
    },
    visible: {
      opacity: 1,
      transition: 
        {delay:1.0, duration:1.5}
      },
    }  



    const listVariants = {
      visible: {
        transition: {type: 'tween'}
      }
    }

  return (
    <div className='navbar'>
    
    <div className='navbar-items'>
      
      <div className='navbar-items-left'>

     
     
        <img src={company} alt="" />






   
    
        {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}


<motion.div 
 variants={containerVariants}
 initial="hidden"
 animate="visible"

className='navbar-items-left-icons'>

<div class="dropdown">
  <button class="dropbtn"> 
  <motion.p
  
  whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
             transition={{style:'spring', stiffness:100}}>Home</motion.p>
             
  {/* <img src={arrowdown} alt="" /> */}
  
  </button> 






  <motion.div
  variants={listVariants}
  animate="visible"

  class="dropdown-content">
    <a href="#"> <motion.p

  whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
  transition={{style:'spring', stiffness:100}}
    > Link 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minima quisquam vel blanditiis in eos sint ad, consectetur consequatur nam quod ipsum! Ipsa odit laboriosam qui. Esse dolor vero ad.</motion.p>  </a>
    
    <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </motion.div>
</div>


<div class="dropdown">
  <button class="dropbtn">
    <p>Services</p>


    </button>
    
  <div class="dropdown-content">
  <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </div>
</div>



<div class="dropdown">
  <button class="dropbtn">
    <p>Portfolio</p>
  

  </button>
  <div class="dropdown-content">
  <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </div>
</div>




<div class="dropdown">
  <button class="dropbtn">
    <p>Case Studies</p>
  

    </button>
  <div class="dropdown-content">
  <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </div>
</div>


</motion.div>




{/* 
     <button>Services</button>

    <button>Portfolio </button>

    <button>Case Studies </button>   */}
    </div>


    <div className='navbar-empty-middle'></div>

    <motion.div 
 variants={containerVariants}
 initial="hidden"
 animate="visible" className='navbar-items-right'>


    <div class="dropdown">
  <button class="dropbtn">
    <p>Services</p>
    </button>

</div>

<button>Talk to experts</button>
    </motion.div>

    <div className='hamburger-menu-icon'><MobileNavigation/></div>

        </div>


    </div>


  )
}

export default Navbar