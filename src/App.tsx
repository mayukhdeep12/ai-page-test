import { Routes, Route } from "react-router-dom";

import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import ProjectDetail from "./components/ProjectDetail";




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
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      {/* Set of linear gradients for further use in the buttons */}
      <ButtonGradient />
    </>
  );
}

export default App;