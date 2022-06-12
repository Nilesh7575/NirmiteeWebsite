import React, {useState} from 'react'
import company from '../images/company.png'
import arrowdown from '../images/arrow-down.svg'
import './Navbar.css'
import MobileNavigation from './MobileNavigation'
import { Fade as Hamburger } from 'hamburger-react'


function Navbar() {


  const [isOpen, setOpen] = useState(true);




  return (
    <div className='navbar'>
    
    <div className='navbar-items'>
      
      <div className='navbar-items-left'>

      <Hamburger color="white"  toggled={isOpen} toggle={setOpen} />
     
        <img src={company} alt="" />
   
    
        {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}


<div className='navbar-items-left-icons'>

<div class="dropdown">
  <button class="dropbtn"> 
  <p>Home</p> 
  {/* <img src={arrowdown} alt="" /> */}
  
  </button> 
  <div class="dropdown-content">
    <a href="#">Link 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minima quisquam vel blanditiis in eos sint ad, consectetur consequatur nam quod ipsum! Ipsa odit laboriosam qui. Esse dolor vero ad.</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>


<div class="dropdown">
  <button class="dropbtn">
    <p>Services</p>


    </button>
    
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>



<div class="dropdown">
  <button class="dropbtn">
    <p>Portfolio</p>
  

  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>




<div class="dropdown">
  <button class="dropbtn">
    <p>Case Studies</p>
  

    </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>


</div>




{/* 
     <button>Services</button>

    <button>Portfolio </button>

    <button>Case Studies </button>   */}
    </div>


    <div className='navbar-empty-middle'></div>

    <div className='navbar-items-right'>
    <div class="dropdown">
  <button class="dropbtn">
    <p>Services</p>


    </button>

</div>
<button>Talk to experts</button>
    </div>

    <div className='hamburger'><MobileNavigation/></div>

        </div>


    </div>


  )
}

export default Navbar