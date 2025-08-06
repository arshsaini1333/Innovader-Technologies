import InstagramEmbed from "../Components/Iframe"
import '../public/Project.css'
import InstaPhotos from "../Components/InstaPhotos"
import ScrollControlledHorizontal from "../Components/Scrolling"
export default function OurWork()
{
    return(
    <div className="project">
        <InstaPhotos/>    
        <ScrollControlledHorizontal/>    
    </div>
    )
}