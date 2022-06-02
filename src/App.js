import "./App.css";
import Navbar from "./commponets/Navbar";
import Hero from "./commponets/Hero";
import About from "./commponets/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
}

export default App;
