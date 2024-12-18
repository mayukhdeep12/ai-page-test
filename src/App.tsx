import { Routes, Route } from "react-router-dom";

// import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Benefits from "./components/Benefits";

import Project1 from "./components/projects/project1";
import Project2 from "./components/projects/project2";
import Project3 from "./components/projects/project3";

import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  // Returned JSX
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Hero />
              <Collaboration />
              <Services />
              <Roadmap />
              {/* <Pricing /> */}
              <Benefits />
            </div>
            <Footer />
          </>
        } />
        <Route path="/projects/:id" element={<Benefits />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
      </Routes>

      {/* Set of linear gradients for further use in the buttons */}
      <ButtonGradient />
    </>
  );
}

export default App;