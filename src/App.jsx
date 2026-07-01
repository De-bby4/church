import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/Welcomesection";
import ScriptureStrip from "./components/Scripturestrip";
// import VisitPage from "./pages/VisitPage";
import SermonsPage from "./pages/SermonsPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer"; 
import GivingPage from "./pages/GivingPage";
import WhatsappCta from "./components/Whatsappcta";
import NewHerePage from "./pages/NewherePage";
import ServicePage from "./pages/ServicePage";
import WhatToExpect from "./components/WhatToExpect";
import ScrollToTop from "./components/ScrollToTop";
// import GalleryPage from "./pages/GalleryPage";

  function Home() {
    return (
      <>
        <Hero />
        <WelcomeSection />
        <ScriptureStrip />
        <WhatToExpect />
        <WhatsappCta />
        <Footer />
        
      </>
    );
  }

  function App() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/new-here" element={<NewHerePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/quick-links" element={<WelcomeSection />} />
          {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        </Routes>
      </div>
  );
}

export default App;