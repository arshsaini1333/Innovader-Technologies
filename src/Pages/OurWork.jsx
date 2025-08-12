import '../public/Project.css'
import InstaPhotos from "../Components/InstaPhotos"
import F1HorizontalScroll from "../Components/Scrolling"
import WorkTop from '../Components/WorkTop'
import ReelInsta from '../Components/ReelInsta'
export default function OurWork({popUp})
{
    return(
    <div className="project">
      <WorkTop popUp={popUp}/>
      <ReelInsta/>
      {/* <F1HorizontalScroll /> */}
      <InstaPhotos/>    
    </div>
    )
}