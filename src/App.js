import "./App.css";
import Cover from "./components/Cover";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Cover />
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
