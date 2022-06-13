import "./App.css";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Services from "./components/Services";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";


function App() {
  return (
    <div className="App">


      <Navbar />
      <Cover />
      <Services />
      <Footer />

      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Cover />
            <Services />
          </Route>
        </Switch>
      </Router> */}




    </div>
  );
}

export default App;
