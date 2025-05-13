import '../public/Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
export default function Contact(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: false,     // Animation only happens once when scrolled into view
        });
      }, []);
    return(
        <>
        <div class="container">
        <h2 class="c-heads">Contact Us</h2>

        <div class="contact-wrapper" >
            <div class=" contact-info " data-aos="zoom-in">
                <div class="info-box">
                    <i class="fas fa-home icon "></i>
                    <div>
                        <h4>Address</h4>
                        <p><strong>INNOVADER TECHNOLOGIES</strong> <br/> E-93/1, SOUTH, near SUMAN CHOWK <br/> Block D, Chhatarpur Extension, Chhatarpur <br/> New Delhi, Delhi 110074</p>
                    </div>
                </div>

                <div class="info-box ">
                    <i class="fa-solid fa-location-dot icon"></i>
                    <div>
                        <h4>Find Us</h4>
                        <p>
                            <a href="https://www.google.com/maps/dir//INNOVADER+TECHNOLOGIES+E-93%2F1,+SOUTH+near+SUMAN+CHOWK,+Block+D,+Chhatarpur+Extension,+Chhatarpur+New+Delhi,+Delhi+110074/@28.4940879,77.1802286,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1f19b1fa9737:0x622e33744b113863!2m2!1d77.1802286!2d28.4940879?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D "
                                target="_blank ">
                                <p>Find us on <span>Google Maps</span></p>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="info-box ">
                    <i class="fas fa-phone icon "></i>
                    <div>
                        <h4>Phone</h4>
                        <p>+91 9773878376
                        </p>
                    </div>
                </div>

                <div class="info-box ">
                    <i class="fas fa-envelope icon "></i>
                    <div>
                        <h4>Email</h4>
                        <p>hr@innovader.in
                        </p>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <h3>Send Message</h3>
                <form id="messageForm" method="get">
                    <input type="text " placeholder="Full Name " name="name" id="name" required />
                    <input type="text " placeholder="Phone" name="phone" id="phone" required />
                    <input type="email " placeholder="Email " name="email" id="email" required />
                    <textarea placeholder="Type your Message... " name="message" id="message" required></textarea>
                    <button type="submit" id="sbt-btn">Send</button>
                </form>
            </div>
        </div>
    </div>

  <Footer/>
    </>

    )
}