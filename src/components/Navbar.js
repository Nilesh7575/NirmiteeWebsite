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

  const listVariants = {
    visible: {
      transition: { type: "tween" },
    },
  };

  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-items-left">
          <img src={company} alt="" />

          <div className="navbar-items-left-icons">
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

              <div className="dropdown1-content">
                <div className="row">
                  <div className="column">
                    <h4>PRODUCT DEVELOPMENT</h4>
                    <Link to="/mobileappDevelopment">
                      <a href="#">Mobile App Development</a>
                    </Link>
                    <Link to="/websiteDevelopment">
                      <a href="#">Website Development</a>
                    </Link>
                    <Link to="/internetOfThings">
                      <a href="#">Internet of Things</a>
                    </Link>
                    <Link to="/mvp">
                      <a href="#">MVP Learn Startup</a>
                    </Link>
                    <Link to="/uiux">
                      <a href="#">UI/UX Design and Development</a>
                    </Link>
                  </div>
                  <div class="column">
                    <h4>GROWTH HACKING TECHNOLOGIES</h4>
                    <Link to="/devops">
                      <a href="#">DevOps</a>
                    </Link>
                    <Link to="/datascience">
                      <a href="#">Data Science</a>
                    </Link>
                    <Link to="/bigdata">
                      <a href="#">Big Data Technologies</a>
                    </Link>
                    <Link to="/machinelearning">
                      <a href="#">Machine Learning</a>
                    </Link>
                    <Link to="/ai">
                      <a href="#">Arficial Intelligence</a>
                    </Link>
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
            </div>
          </div>
        </div>

        <div className="navbar-empty-middle"></div>

        <div className="navbar-items-right">
          <button>TALK TO OUR EXPERT</button>
        </div>

        <div className="hamburger-menu-icon">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
