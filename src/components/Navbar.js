import React, { useState } from "react";
import company from "../images/company1.png";
import arrowdown from "../images/arrow-down.svg";
import "./Navbar.css";
import MobileNavigation from "./MobileNavigation";
import { Fade as Hamburger } from "hamburger-react";
import Services from "./Services-Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar(props) {
  const scrollBottom = (e) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollTop = (e) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,

  //   },
  //   visible: {
  //     opacity: 1,
  //     transition:
  //       {delay:1.0, duration:1.5}
  //     },
  //   }

  const listVariants = {
    visible: {
      transition: { type: "tween" },
    },
  };

  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-items-left">
          <Link className="navbar-items-left" to="/">
            <img src={company} alt="" />
          </Link>

          {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}

          <motion.div
            //  variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="navbar-items-left-icons"
          >
            <Link to="/">
              <div class="dropdown">
                <button
                  class="dropbtn"
                  onClick={() => scrollTop(props.scrollHome)}
                >
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Home
                  </motion.p>

                  {/* <img src={arrowdown} alt="" /> */}
                </button>
              </div>
            </Link>

            <div className="dropdown">
              <button class="dropbtn">
                <motion.p
                  whileHover={{ color: "	#F0FFF0", originX: 0 }}
                  transition={{ style: "spring", stiffness: 100 }}
                >
                  Services
                </motion.p>
              </button>

              {/* <div class="dropdown-content">
  <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </div> */}

              <div className="dropdown1-content">
                <div className="row">
                  <div className="column">
                    <h4>PRODUCT DEVELOPMENT</h4>
                    <Link to="/mobileappDevelopment">
                      <a href="#">Mobile App Development</a>
                    </Link>
                    <a href="#">Web App Development</a>
                    <a href="#">Internet of Things</a>
                    <a href="#">MVP Learn Startup</a>
                    <a href="#">UI/UX Design and Development</a>
                  </div>
                  <div class="column">
                    <h4>GROWTH HACKING TECHNOLOGIES</h4>
                    <a href="#">DevOps</a>
                    <a href="#">Data Science</a>
                    <a href="#">Big Data Technologies</a>
                    <a href="#">Machnine Learning</a>
                    <a href="#">Arficial Intelligence</a>
                  </div>
                  <div className="column">
                    <h4>CLOUD SERVICES</h4>
                    <a href="#">Cloud Services</a>
                    <a href="#">AWS Serverless Architecture</a>
                    <a href="#">Google Cloud Services</a>
                  </div>
                  <div className="column">
                    <h4>INTEGRATIONS</h4>
                    <a href="#">Phonepe-switch Intergrations</a>
                    <a href="#">Paytm Mini-apps Integrations</a>
                    <a href="#">Payment Gateway Integrations</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <button
                class="dropbtn"
                onClick={() => scrollBottom(props.scrollRef)}
              >
                <motion.p
                  whileHover={{ color: "	#F0FFF0", originX: 0 }}
                  transition={{ style: "spring", stiffness: 100 }}
                >
                  Portfolio
                </motion.p>
              </button>
              {/* <div class="dropdown-content">
  <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </div> */}
            </div>

            <div class="dropdown">
              <button class="dropbtn">
                <motion.p
                  whileHover={{ color: "	#F0FFF0", originX: 0 }}
                  transition={{ style: "spring", stiffness: 100 }}
                >
                  Case Studies
                </motion.p>
              </button>

              <div class="dropdown-content">
                <a href="#">
                  <motion.h4
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    ALL CASE STUDIES
                  </motion.h4>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Fintech
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Logistics
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Advertisement
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Health Care
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    E-Commerce
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Agriculture
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Last Mile Delivery
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Last Mile Delivery
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Retail
                  </motion.p>{" "}
                </a>

                <a href="#">
                  <motion.p
                    whileHover={{ color: "	#F0FFF0", originX: 0 }}
                    transition={{ style: "spring", stiffness: 100 }}
                  >
                    Real Estate
                  </motion.p>{" "}
                </a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn">
                <Link to="/team">
                  <a>
                    <motion.p
                      whileHover={{ color: "	#F0FFF0", originX: 0 }}
                      transition={{ style: "spring", stiffness: 100 }}
                    >
                      Team
                    </motion.p>
                  </a>
                </Link>
              </button>
              {/* <div class="dropdown-content">
  <a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>

<a href="#"><motion.p

whileHover={{scale:1.05, color:'	#F0FFF0', originX: 0}}
transition={{style:'spring', stiffness:100}}>Link2</motion.p> </a>


  </div> */}
            </div>
          </motion.div>

          {/* 
     <button>Services</button>

    <button>Portfolio </button>

    <button>Case Studies </button>   */}
        </div>

        <div className="navbar-empty-middle"></div>

        <motion.div
          //  variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="navbar-items-right"
        >
          {/* 
    <div class="dropdown">
  <button class="dropbtn">
    <p>Services</p>
    </button>

</div> */}

          <button>TALK TO OUR EXPERT</button>
        </motion.div>

        <div className="hamburger-menu-icon">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
