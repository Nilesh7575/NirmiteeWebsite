import "./App.css";
import Cover from "./components/Cover";
import Services from "./components/Services";
import Navbar from "./components/Navbar";





function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover/>
      <Services />
    </div>
  );
}

export default App;
