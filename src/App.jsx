import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import ServiceStrip from "./components/ServiceStrip";
import VisitPage from "./pages/VisitPage";
import SermonsPage from "./pages/SermonsPage";
import AboutPage from "./pages/AboutPage";

function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      {/* <ServiceStrip /> */}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;