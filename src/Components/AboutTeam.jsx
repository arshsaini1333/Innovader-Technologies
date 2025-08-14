import React from 'react'
import founder from '../assets/arvinder.jpg'
import co from '../assets/tanya.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function AboutTeam() {
  return (
    <div className='about-team'>
      <div className="team-head">The Minds Behind Innovader Technologies</div>

      <div className="founders">
      <div className="founder">
        <div className="f-image">
        <img src={founder} alt="" />
        </div>
        <div className="f-content">
            <div className="f-name">
                <p className="name">Arvinder Singh</p>
                <p className="dest">Founder</p>
            </div>
            <p className='fc-content'>A certified expert in <strong>Google Ads and a master of performance marketing</strong>, Arvinder brings over 6 years of industry experience. He founded Innovader Technologies 4 years ago with a mission to help real estate brands generate high-converting leads through smart and result-driven ad strategies. Holding a PGDM and a Master’s in Performance Marketing, Arvinder has extensive hands-on experience running paid campaigns for top real estate clients. He is known for turning ad budgets into booked site visits with precision and measurable ROI.</p>
            <div className='f-links'>
              <a href="https://www.linkedin.com/in/saini-singh-arvinder/" target='_blank'><LinkedInIcon sx={{ fontSize: 35, color:'#1b70ef' }}/></a>
              <a href="https://www.instagram.com/_avi_saini_?igsh=MTVja2U3MXE3N3h0eQ==" target='_blank'><InstagramIcon sx={{ fontSize: 35, color:'#1b70ef' }}/></a>
            </div>
        </div>
      </div>
      <div className="founder co">
        <div className="f-image">
            <img src={co} alt="" />
        </div>
        <div className="f-content">
            <div className="f-name">
                <p className="name">Varsha</p>
                <p className="dest">Co Founder</p>
            </div>
            <p className='fc-content'>
            Varsha is a <strong>Meta Ads specialist</strong> with 2 years of experience in crafting high-performing campaigns exclusively for the real estate industry. She holds a BA in Marketing and a Master’s in Performance Marketing, combining academic knowledge with practical expertise. Her strength lies in creating engaging ad creatives and strategies that connect with the right property buyers. With a sharp eye for visuals, compelling messaging, and a deep understanding of buyer intent, Varsha ensures every campaign drives quality leads and maximizes ROI for real estate clients.
            </p>
            <div className='f-links'>
              <a href="https://www.instagram.com/tanya.k554/profilecard/?igsh=NHMxbzJ5ZWJndjZ0" target='_blank'><InstagramIcon sx={{ fontSize: 35, color:'#1b70ef' }}/></a>
              <a href="https://www.linkedin.com/in/devi-varsha/" target='_blank'><LinkedInIcon sx={{ fontSize: 35, color:'#1b70ef' }}/></a>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
