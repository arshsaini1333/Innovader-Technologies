import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../public/Home.css';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
const lines = [
  "Attract Qualified Buyers & Sellers",
  "Capture Interested Prospects",
  "Nurture Leads into Clients",
  "Analyze & Optimize Your Performance",
];


const lineVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { x: 100, opacity: 0, transition: { duration: 0.8 } }
};

function HomeLeft({popUp}){
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000); // time per line (adjust as needed)

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="p-6 max-w-xl mx-auto text-center HomeLeft">
      <h2 className="text-2xl font-bold mb-6 heading">The Journey from  <span className="heads1">Website Traffic</span>  to <span className="heads2">Real Leads</span> Starts Here</h2>
      <div className="h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-lg absolute w-full line-text"
          >
            {lines[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <button onClick={()=>popUp()} className="enquire"> <PermPhoneMsgIcon style={{color:'#1b71eb'}}></PermPhoneMsgIcon> Enquire Now</button>
    </div>
  );
};

export default HomeLeft;
