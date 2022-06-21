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
import ArtificialIntelligence from "./components/pages/ArtificialIntelligence";
import WebsiteDevelopment from "./components/pages/WebsiteDevelopment";
import IOT from "./components/pages/IOT";
import MVP from "./components/pages/MVP";
import UIUX from "./components/pages/UIUX";
import DevOps from "./components/pages/DevOps";
import DataScience from "./components/pages/DataScience";
import BigData from "./components/pages/BigData";
import MachineLearning from "./components/pages/MachineLearning";
import CloudServices from "./components/pages/CloudServices";
import AwsServerlessArchitecture from './components/pages/AwsServerlessArchitecture';
import GoogleCloudServices from './components/pages/GoogleCloudServices';
import PhonepeSwitchIntegrations from './components/pages/PhonepeSwitchIntegrations';
import PaytmMiniAppsIntegrations from './components/pages/PaytmMiniAppsIntegrations'
import PaymentGatewayIntegrations from './components/pages/PaymentGatewayIntegrations'
import { useEffect } from "react";

function App() {
  const scrollRef = useRef();
  const scrollHome = useRef();

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

  return (
    <div className="App">
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
          <Route path="/websiteDevelopment">
            <WebsiteDevelopment />
          </Route>
          <Route path="/internetOfThings">
            <IOT />
          </Route>
          <Route path="/mvp">
            <MVP />
          </Route>
          <Route path="/uiux">
            <UIUX />
          </Route>
          <Route path="/devops">
            <DevOps />
          </Route>
          <Route path="/datascience">
            <DataScience />
          </Route>
          <Route path="/bigdata">
            <BigData />
          </Route>
          <Route path="/machinelearning">
            <MachineLearning />
          </Route>
          <Route path="/ai">
            <ArtificialIntelligence />
          </Route>
          <Route path="/cloudservices">
            <CloudServices />
          </Route>
          <Route path="/aws">
            <AwsServerlessArchitecture />
          </Route>
          <Route path="/googlecloudservices">
            <GoogleCloudServices />
          </Route>
          <Route path="/phonepe">
            <PhonepeSwitchIntegrations />
          </Route>
          <Route path="/paytm">
            <PaytmMiniAppsIntegrations />
          </Route>
          <Route path="/payment">
            <PaymentGatewayIntegrations />
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
