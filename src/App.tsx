import "./App.css";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Cover from "./components/Cover";
import NavBar from "./components/NavBar";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Description />
      <Work />
 
      <Cover />
    </div>
  );
}

export default App;
