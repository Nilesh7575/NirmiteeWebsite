import "./App.css";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { useRef } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PortfolioComponent from "./components/PortfolioComponent/PortfolioComponent ";
import Service from './components/pages/Service'
import Fintech from './components/pages/Case Studies/Fintech'
import Logistics from "./components/pages/Case Studies/Logistics";
import Advertisement from "./components/pages/Case Studies/Advertisement";
import Healthcare from "./components/pages/Case Studies/Healthcare";
import Ecommerce from "./components/pages/Case Studies/Ecommerce";
import Agriculture from "./components/pages/Case Studies/Agriculture";


function App() {
  const scrollRef = useRef()
  const scrollHome = useRef()
  
  return (
    <div> <Agriculture/></div>
    // <div className="App">


    //   {/* <Navbar  />
    //   <Cover />
    //   <Services />
    //   <Service/>
    //   <PortfolioComponent/>
    //   <Footer /> */}

    //   <Router>
    //     <Navbar scrollRef = {scrollRef} scrollHome = {scrollHome} />
    //     <Switch>
    //     <Route path="/mobileAppDevelopment">
    //         <Service/>
    //       </Route>
    //       <Route path="/">
    //         <div ref = {scrollHome}><Cover scrollRef = {scrollRef}/></div>
    //         <Services />
    //         <div ref={scrollRef}>
            
    //         <PortfolioComponent/></div>
    //       </Route>

    //       <Route path="/fintech">
    //         <Fintech/>
    //       </Route>


    //     </Switch>
    //     <Footer/>
    //   </Router>


  


    // </div>
  );
}

export default App;