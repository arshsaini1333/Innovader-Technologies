import '../public/About.css'
import AboutTop from '../Components/AboutTop'
import AboutTeam from '../Components/AboutTeam'
export default function About({popUp})
{
    return (
        <div className="About">
            <AboutTop popUp={popUp}/>
            <AboutTeam/>
        </div>
    )
}