import "./App.css";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Services from "./components/Services";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Service from "./components/Service";


function App() {
  return (
    <div className="App">


      <Navbar />
      <Service/>
      {/* <Cover />
      <Services /> */}
      <Footer />

      




    </div>
  );
}

export default App;
