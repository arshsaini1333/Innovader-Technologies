import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'
export default function Home()
{
    return (
        <div className='Home'>
        <HomeLeft/>  
        <HomeRight/>      
        </div>
    )
}