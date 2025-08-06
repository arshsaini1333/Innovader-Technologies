
import '../public/Project.css'

import React, { useRef, useState } from "react";

const VideoHover = ({ videoSrc, poster, cat, plat }) => {
    const videoRef = useRef(null);
    const [pausedTime, setPausedTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = pausedTime; // Resume from last paused time
            videoRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => console.log("Playback error:", error));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            setPausedTime(videoRef.current.currentTime); // Save current time
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="innerBlock" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="image">
                <video 
                    ref={videoRef} 
                    className="project-video" 
                    muted 
                    loop 
                    playsInline 
                    poster={poster} 
                    style={{ display: isPlaying ? "block" : "none" }}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && <img src={poster} alt="Project Thumbnail" className="project-image" />}
            </div>
            <div className="pj-info">
            <div className="headings"><span>Category: </span>{cat}</div>
            <div className="textInfo"><span>Platform:</span> {plat}</div>
            </div>
        </div>
    );
};

export default VideoHover;