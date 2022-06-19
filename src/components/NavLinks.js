import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function NavLinks({props}) {

    const animatieFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y:0}



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
    transition={{delay:0.05}}
    

    onClick={() => props.isMobile && props.closeMobileMenu()}> <a href="/">Home</a></motion.li>
    <motion.li 
     initial={animatieFrom}
     animate={animateTo}
     transition={{delay:0.10}}

    onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/">Services</a></motion.li>
    <motion.li
     initial={animatieFrom}
     animate={animateTo}
     transition={{delay:0.20}}
     className="services-menu"
    
    onClick={() => props.isMobile && props.closeMobileMenu()}> 
        <a href="/">Home</a></motion.li> 
        <motion.li
         initial={animatieFrom}
         animate={animateTo}
         transition={{delay:0.30}}

        onClick={() => props.isMobile && props.closeMobileMenu()}> <a href="/">Portfolio</a></motion.li>
        <motion.li 
         initial={animatieFrom}
         animate={animateTo}
         transition={{delay:0.40}}
         className="casestudies-menu"

        onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/">Case Studies</a></motion.li>







        <div className='remaning-mobile-links'>
        <motion.li 
    initial={animatieFrom}
    animate={animateTo}
    transition={{delay:0.05}}

    onClick={() => props.isMobile && props.closeMobileMenu()}> <a href="/">Team</a></motion.li>

<motion.li 
    initial={animatieFrom}
    animate={animateTo}
    transition={{delay:0.05}}

    onClick={() => props.isMobile && props.closeMobileMenu()}> <a href="/">Talk to Experts</a></motion.li>

        </div>





        <div className="casestudies-content">
               
               <motion.h4
                 whileHover={{ color: "	#F0FFF0", originX: 0 }}
                 transition={{ style: "spring", stiffness: 100 }}
               >
                 ALL CASE STUDIES
               </motion.h4>{" "}
         
             <Link to="/fintech">
              
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Fintech
                 </motion.p>{" "}
             
             </Link>

             <Link to="/logistics">
               
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Logistics
                 </motion.p>{" "}
             
             </Link>

             <Link to="/advertisement">
               
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Advertisement
                 </motion.p>{" "}
              
             </Link>

             <Link to="/healthcare">
             
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Health Care
                 </motion.p>{" "}
              
             </Link>

             <Link to="ecommerce">
             
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   E-Commerce
                 </motion.p>{" "}
               
             </Link>

             <Link to="/agriculture">
              
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Agriculture
                 </motion.p>{" "}
               
             </Link>

             <Link to="/lastmiledelivery">
              
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Last Mile Delivery
                 </motion.p>{" "}
               
             </Link>

             <Link to="/retail">
              
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Retail
                 </motion.p>{" "}
            
             </Link>

             <Link to="/realestate">
             
                 <motion.p
                   whileHover={{ color: "	#F0FFF0", originX: 0 }}
                   transition={{ style: "spring", stiffness: 100 }}
                 >
                   Real Estate
                 </motion.p>{" "}
             
             </Link>
           </div>

       

        
</ul>
</div>
  )
}

export default NavLinks