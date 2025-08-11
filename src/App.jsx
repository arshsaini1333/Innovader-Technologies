import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import OurServices from './Pages/OurServices';
import OurWork from './Pages/OurWork';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import BrandStratergy from './Pages/Services/BrandStratergy';
import WebDevelopment from './Pages/Services/WebDevelopment';
import LeadGeneration from './Pages/Services/LeadGeneration';
import MetaAds from './Pages/Services/MetaAds';
import SearchEngineOpti from './Pages/Services/SearchEngineOpti';
import GoogleAds from './Pages/Services/GoogleAds';
import SocialMedia from './Pages/Services/SocialMedia';
function App() { 
  return (
    <>
    
      {/* <BrowserRouter> */}
      <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/brand-stratergy" element={<BrandStratergy />} />
          <Route path='/services/social-media-markte' element={<SocialMedia />} />
          <Route path='/services/meta-ads' element={<MetaAds />} />
          <Route path='/services/google-ads' element={<GoogleAds />} />
          <Route path="/services/seo" element={<SearchEngineOpti />} />
        </Routes>
     
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
