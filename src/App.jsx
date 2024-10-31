/**
 * Node Modules
 */
import { ReactLenis } from "lenis/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

const Home = () => (
  <>
    <main>
      <Hero />
      <About />
      <Skill />
      <Contact />
    </main>
  </>
);

const App = () => {
  return (
    <ReactLenis root>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
};

export default App;
