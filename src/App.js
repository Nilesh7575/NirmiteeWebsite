import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRef } from "react";
import "./App.css";

import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Services from "./components/Services/Services";
import Navbar from "./components/Navbar";
import PortfolioComponent from "./components/PortfolioComponent/PortfolioComponent ";
import Service from "./components/pages/Service";
import TeamComponent from "./components/TeamComponent/TeamComponent";
import Fintech from "./components/pages/Case Studies/Fintech";
import Agriculture from "./components/pages/Case Studies/Agriculture";
import Ecommerce from "./components/pages/Case Studies/Ecommerce";
import Advertisement from "./components/pages/Case Studies/Advertisement";
import Logistics from "./components/pages/Case Studies/Logistics";
import Healthcare from "./components/pages/Case Studies/Healthcare";
import LastMileDelivery from "./components/pages/Case Studies/LastMileDelivery";
import Retail from "./components/pages/Case Studies/Retail";
import RealEstate from "./components/pages/Case Studies/RealEstate";

function App() {
  const scrollRef = useRef();
  const scrollHome = useRef();

  return (
    <div className="App">
      {/* <Navbar  />
      <Cover />
      <Services />
      <Service/>
      <PortfolioComponent/>
      <Footer /> */}

      <Router>
        <Navbar scrollRef={scrollRef} scrollHome={scrollHome} />
        <Switch>
          <Route path="/realestate">
            <RealEstate />
          </Route>

          <Route path="/retail">
            <Retail />
          </Route>

          <Route path="/lastmiledelivery">
            <LastMileDelivery />
          </Route>

          <Route path="/agriculture">
            <Agriculture />
          </Route>
          <Route path="/ecommerce">
            <Ecommerce />
          </Route>
          <Route path="/healthcare">
            <Healthcare />
          </Route>

          <Route path="/advertisement">
            <Advertisement />
          </Route>

          <Route path="/logistics">
            <Logistics />
          </Route>
          <Route path="/fintech">
            <Fintech />
          </Route>
          <Route path="/team">
            <TeamComponent />
          </Route>
          <Route path="/mobileAppDevelopment">
            <Service />
          </Route>
          <Route path="/">
            <div ref={scrollHome}>
              <Cover scrollRef={scrollRef} />
            </div>
            <Services />
            <div ref={scrollRef}>
              <PortfolioComponent />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
