import '../public/Project.css'
import InstaPhotos from "../Components/InstaPhotos"
import F1HorizontalScroll from "../Components/Scrolling"
import WorkTop from '../Components/WorkTop'
export default function OurWork()
{
    return(
    <div className="project">
      <WorkTop/>
      <F1HorizontalScroll />
      <InstaPhotos/>    
    </div>
    )
}