import '../public/Project.css'
import InstaPhotos from "../Components/InstaPhotos"
import WorkTop from '../Components/WorkTop'
import ReelInsta from '../Components/ReelInsta'
import ImageScrollCard from '../Components/WebsiteHover'
export default function OurWork({popUp})
{
    return(
    <div className="project">
      <WorkTop popUp={popUp}/>
      <ReelInsta/>
      <ImageScrollCard/>
      
      <InstaPhotos/>    
    </div>
    )
}