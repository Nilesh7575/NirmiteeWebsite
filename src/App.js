import React, { useState, useEffect } from 'react';
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
import CloudServices from './components/CloudServices';
import AwsServerlessArchitecture from './components/AwsServerlessArchitecture';
import GoogleCloudServices from './components/GoogleCloudServices';
import PhonepeSwitchIntegrations from './components/PhonepeSwitchIntegrations';
import PaytmMiniAppsIntegrations from './components/PaytmMiniAppsIntegrations'
import PaymentGatewayIntegrations from './components/PaymentGatewayIntegrations'

function App() {
  const [chatBot, setChatBot] = useState(false)
  const scrollRef = useRef()
  const scrollHome = useRef()


  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/62a96584b0d10b6f3e776723/1g5ir93li";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);


  useEffect(() => {
    if (window.Tawk_API) {
      window.Tawk_API.hideWidget();
    }
    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.showWidget();
      }
    };
  }, []);

  const toggle = () => {
    console.log('Chat-Bot');
  }

  return (
    <div className="App">

      {/* <Navbar  />
      <Cover />
      <Services />
      <Service/>
      <PortfolioComponent/>
      <Footer /> */}

      <Router>
        <Navbar scrollRef={scrollRef} scrollHome={scrollHome} toggle={toggle} />
        <Switch>
          <Route path="/mobileAppDevelopment">
            <Service />
          </Route>
          <Route path="/cloudServices">
            <CloudServices />
          </Route>
          <Route path="/awsServerlessArchitecture">
            <AwsServerlessArchitecture />
          </Route>
          <Route path="/googleCloudServices">
            <GoogleCloudServices />
          </Route>
          <Route path="/phonepeSwitchIntegrations">
            <PhonepeSwitchIntegrations />
          </Route>
          <Route path="/paytmMiniAppsIntegrations">
            <PaytmMiniAppsIntegrations />
          </Route>
          <Route path="/paymentGatewayIntegrations">
            <PaymentGatewayIntegrations />
          </Route>

          <Route path="/">
            <div ref={scrollHome}><Cover scrollRef={scrollRef} /></div>
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