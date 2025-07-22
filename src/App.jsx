import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import OurServices from './Pages/OurServices';
import OurWork from './Pages/OurWork';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { Toolbar } from '@mui/material';
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
        </Routes>
     
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
