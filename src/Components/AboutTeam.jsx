import React from 'react'
import founder from '../assets/arvinder.jpg'
import co from '../assets/tanya.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function AboutTeam() {
  return (
    <div className='about-team'>
      <div className="team-head">The Minds Behind Innovader Technology</div>

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
            <p className='fc-content'>A certified expert in <strong>Google Ads</strong> and a master of performance marketing, Arvinder started Innovader Technology 3 years ago with a mission to help real estate brands generate high-converting leads through smart ad strategies. He holds a PGDM and a Master’s in Performance Marketing. With hands-on experience running paid campaigns for top real estate clients, Arvinder is known for turning ad budgets into booked site visits.</p>
            <div className='f-links'>
              <a href="https://www.linkedin.com/in/saini-singh-arvinder/" target='_blank'><LinkedInIcon sx={{ fontSize: 35, color:'#1b70ef' }}/></a>
              <a href="" target='_blank'><InstagramIcon sx={{ fontSize: 35, color:'#1b70ef' }}/></a>
            </div>
        </div>
      </div>
      <div className="founder co">
        <div className="f-image">
            <img src={co} alt="" />
        </div>
        <div className="f-content">
            <div className="f-name">
                <p className="name">Tanya</p>
                <p className="dest">Co Founder</p>
            </div>
            <p className='fc-content'>
            Tanya is a specialist in <strong> Meta Ads</strong> and brings strong creative direction to the team. She holds a BA in Marketing and a Master’s in Performance Marketing. Her strength lies in creating high-engagement campaigns that connect with the right audience. With a sharp eye for visuals and messaging, Tanya ensures that every campaign stands out and delivers.
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
