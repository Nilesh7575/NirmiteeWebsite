import React from 'react'
import "./footer.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
  return (
    <div className="footer-div">
            <div className="container ">
                <div className="footer-main-div">
                    <div className="footer-inner-div">
                        <img src="https://www.nirmitee.io/static/media/Logo-02.8b282f50.png" alt="" height="150px" width="150px"/>
                        <div className="Footer_social">
                            <div>
                                <a href="https://www.facebook.com/advaithmarvar" target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon"/></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/cars4all-india-67b1921b6/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon"/></a>
                            </div>
                            <div>
                                <a href="https://twitter.com/cars4all3" target="_blank" rel="noopener noreferrer"><TwitterIcon className="social-icon"/></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/cars4all5?igshid=1sazol5nqdxhg" target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-inner-div">
                        <h3><span>Services</span></h3>
                        
                        <div className="footer_quick-links">
                            <div><a href="/contact_us"><span>Mobile App Developmen</span></a></div>
                            <div><a href="/sell_car"><span>Website Development</span></a></div>
                            <div><a href="/car_listings">UI/UX Design & Development</a></div>
                            <div><a href="/car_listings">DevOps</a></div>
                            <div><a href="/car_listings">Machine Learning</a></div>
                        </div>
                    </div>
                    <div className="footer-inner-div">
                        <h3><span>Resources</span></h3>
                        
                        <div>
                        <div><a href="/car_listings">Case Studies</a></div>
                        <div><a href="/car_listings">Team</a></div>
                        
                        </div>
                    </div>
                    <div className="footer-inner-div">
                        <h3><span>Contact Us</span></h3>
                        <div><a href="">Aundh Anand Park Road, 7, 5th Floor, Nirmitee.io, 
                        Rajyog Creations, above HDFC Bank, Pune, Maharashtra 411007, IN</a></div>
                        <div className="contact-us-div"><span><CallIcon /></span><p>9607930224</p></div>
                    </div>
                </div>
            </div>
            <div className="copyright-div">
            © 2020. All rights reserved by Nirmitee.io
            </div>
        </div>
  )
}

export default Footer