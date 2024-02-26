import "./App.css";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Cover from "./components/Cover";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Description />
      <AboutMe />
      <Work />
      <Service />
      <Contact />
      <Cover />
    </div>
  );
}

export default App;
