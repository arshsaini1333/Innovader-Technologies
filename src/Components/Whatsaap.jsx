import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';import '../public/Whatsaap.css'; // Import CSS

const WhatsAppButton = () => {
  const phoneNumber = '919211904059'; 
  // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <WhatsAppIcon className="whatsapp-icon" sx={{ fontSize: 40 }}/>
    </div>
  );
};

export default WhatsAppButton;