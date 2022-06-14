import "./App.css";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Services from "./components/Services";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PortfolioComponent from "./components/PortfolioComponent ";
import Service from './components/pages/Service'


function App() {
  return (
    <div className="App">


      {/* <Navbar  />
      <Cover />
      <Services />
      <Service/>
      <PortfolioComponent/>
      <Footer /> */}

      <Router>
        <Navbar />
        <Switch>
        <Route path="/appDevelopment">
            <Service/>
          </Route>
          <Route path="/">
            <Cover />
            <Services />
            <PortfolioComponent/>
          </Route>
        </Switch>
        <Footer/>
      </Router>


  


    </div>
  );
}

export default App;
