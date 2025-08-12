import React from "react";
import { Link } from "react-router";
import {
  LocationOn,
  Phone,
  WhatsApp,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  HelpOutline,
  Campaign,
  Chat
} from "@mui/icons-material";
import "../public/Footer.css";

export default function Footer() {

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-about">
          <h2 className="footer-logo">INNOVADER TECHNOLOGIES</h2>
          <p className="footer-tagline">
            Driving Real Estate Growth Through Digital Excellence
          </p>
          <p className="footer-desc">
            At Innovader Technologies, we specialize in lead generation and
            performance marketing for the real estate industry. From smart ad
            campaigns to creative strategy, we help builders, brokers, and
            developers close deals faster.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/our-work'>Our Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-links">
          <h3>Our Solutions</h3>
          <ul>
            <li><Link to='/services/lead-generation'>Lead Generation</Link></li>
            <li><Link to='/services/social-media-markte'>Social Media Marketing</Link></li>
            <li><Link to='/services/web-development'>Website Design & Development</Link></li>
            <li><Link to='/services/seo'>Search Engine Optimization</Link></li>
            <li><Link to='/services/brand-stratergy'>Brand Strategy</Link></li>
            <li><Link to='/services/google-ads'>Google Ads</Link></li>
            <li><Link to='/services/meta-ads'>Meta Ads</Link></li>
           
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact Details</h3>
          <p><LocationOn /> E93/1 Chhatarpur extension, New Delhi - 110074</p>
          <p><Phone /> +91 8447149389</p>
          <p><WhatsApp /> +91 9211904059</p>
          <p><Email /> hr@innovader.in</p>
          <div className="footer-socials">
            <Link to='https://www.linkedin.com/company/innovader-technologiess/posts/?feedView=all'><LinkedIn /></Link>
            <Link to='https://www.instagram.com/innovader_technologies_'><Instagram /></Link>
            <Link to='https://www.facebook.com/profile.php?id=61556574402859&mibextid=wwXIfr&rdid=BZkKH1K3HKIVUcSb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F195spd5srR%2F%3Fmibextid%3DwwXIfr#'><Facebook /></Link>
            
          </div>
        </div>
      </div>

      {/* CTA Row */}
      <div className="footer-cta">
        <div>
          <HelpOutline /> Need Help? Call Us <br /> +91 8447149389
        </div>
        <div>
          <Campaign /> Join Innovader for Growth Today! <br /> 
        </div>
        <div>
          <Chat /> Send Us a Message <br />hr@innovader.in
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Innovader Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
