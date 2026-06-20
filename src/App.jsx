import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/Welcomesection";
import ServiceStrip from "./components/Servicestrip";
import VisitPage from "./pages/VisitPage";
import SermonsPage from "./pages/SermonsPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer"; 
import GivingPage from "./pages/GivingPage";
import WhatsappCta from "./components/Whatsappcta";
import NewHerePage from "./pages/NewherePage";
import ServicePage from "./pages/ServicePage";

function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <WhatsappCta />
      <Footer />
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
        <Route path="/giving" element={<GivingPage />} />
        <Route path="/new-here" element={<NewHerePage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;