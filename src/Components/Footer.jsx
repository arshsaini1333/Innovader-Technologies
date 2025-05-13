import '../public/Footer.css'
import logo from '../assets/logo.png'
export default function Footer()
{
    return ( 
        <div className="footer">
        <div className="footer-brand">
            <img src={logo} alt=""/>
            <p className="fb-brand">Innovader Technologies</p>
        </div>
        <p className="foot-add"> E-93/1, SOUTH, near SUMAN CHOWK, <br/> Block D, Chhatarpur Extension, Chhatarpur <br/> New Delhi Delhi 110074 &nbsp;
            <a href="https://www.google.com/maps/dir//INNOVADER+TECHNOLOGIES+E-93%2F1,+SOUTH+near+SUMAN+CHOWK,+Block+D,+Chhatarpur+Extension,+Chhatarpur+New+Delhi,+Delhi+110074/@28.4940879,77.1802286,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1f19b1fa9737:0x622e33744b113863!2m2!1d77.1802286!2d28.4940879?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </p>
        <div className="footer-ico">
            <a href="https://www.linkedin.com/company/innovader-technologiess/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/innovader_technologies_/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
        </div>
        <p className="footer-cr">Copyright © 2025 Innovader Technologies | Powered by Innovader Technolgies</p>
    </div>
    )
}