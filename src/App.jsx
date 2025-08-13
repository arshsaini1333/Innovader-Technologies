import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
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
import EnquiryPopup from './Components/EnquiryPopup';
import Thankyou from './Pages/Thankyou'
function App() { 
  const [isShow, setShow] = useState(false);
  function popUp()
  {
      setShow(!isShow);
  }

  return (
    <>
    
      {/* <BrowserRouter> */}
      <Navbar />
        <Routes >
          <Route path="/" element={<Home popUp={popUp}/>} />
          <Route path="/about" element={<About popUp={popUp}/>} />
          <Route path="/our-work" element={<OurWork popUp={popUp}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/lead-generation" element={<LeadGeneration popUp={popUp}/>} />
          <Route path="/services/web-development" element={<WebDevelopment popUp={popUp}/>}  />
          <Route path="/services/brand-stratergy" element={<BrandStratergy popUp={popUp}/>} />
          <Route path='/services/social-media-markte' element={<SocialMedia popUp={popUp}/>} />
          <Route path='/services/meta-ads' element={<MetaAds popUp={popUp}/>} />
          <Route path='/services/google-ads' element={<GoogleAds popUp={popUp}/>} />
          <Route path="/services/seo" element={<SearchEngineOpti popUp={popUp}/>} />
          <Route path="thankyou" element={<Thankyou />} />
        </Routes>
        <EnquiryPopup isOpen={isShow} onClose={popUp} />
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
