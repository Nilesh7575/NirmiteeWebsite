import "./App.css";
import Cover from "./components/Cover";
import Services from "./components/Services";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Cover />
            <Services />
          </Route>
        </Switch>
      </Router> */}

      <Navbar />

      <Banner/>
      <Services/>

    </div>
  );
}

export default App;
