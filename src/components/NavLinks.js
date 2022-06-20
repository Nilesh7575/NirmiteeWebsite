import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavLinks({ props }) {
  const animatieFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className="nav-links" style={{ border: "1px solid red" }}>
      <ul>
        <motion.li
          initial={animatieFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          {" "}
          <a href="/">Home</a>
        </motion.li>
        <motion.li
          initial={animatieFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/">Services</a>
        </motion.li>
        <motion.li
          initial={animatieFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          className="services-menu"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/">Home</a>
        </motion.li>
        <motion.li
          initial={animatieFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          {" "}
          <a href="/">Portfolio</a>
        </motion.li>
        <motion.li
          initial={animatieFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          className="casestudies-menu"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/">Case Studies</a>
        </motion.li>

        <div className="remaning-mobile-links">
          <motion.li
            initial={animatieFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            {" "}
            <a href="/">Team</a>
          </motion.li>

          <motion.li
            initial={animatieFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            {" "}
            <a href="/">Talk to Experts</a>
          </motion.li>
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
  );
}

export default NavLinks;
