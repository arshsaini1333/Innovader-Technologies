import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'
import Services from '../Components/Services.jsx'
export default function Home()
{
    return (
        <>
        <div className='Home'>
        <HomeLeft/>  
        <HomeRight/>      
        </div>
        <Services/>
        </>
    )
}