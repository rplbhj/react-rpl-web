import logo from "./logo.svg";
import "./App.css";
import Navbar from "./commponets/Navbar";
import Hero from "./commponets/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
}

export default App;
