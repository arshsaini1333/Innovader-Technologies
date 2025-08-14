import React, { useRef, useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import "../public/Project.css";
import reel1 from "../assets/reel1.mp4";
import reel2 from "../assets/reel2.mp4";
import reel3 from "../assets/reel3.mp4";
import reel4 from "../assets/reel4.mp4";
import reel5 from "../assets/reel5.mp4";
import reel6 from "../assets/reel6.mp4";

const VideoPlayer = ({ src, currentPlaying, setCurrentPlaying }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!isPlaying) {
      // Pause any other playing video
      if (currentPlaying && currentPlaying !== videoRef.current) {
        currentPlaying.pause();
      }
      videoRef.current.play();
      setCurrentPlaying(videoRef.current);
    } else {
      videoRef.current.pause();
      setCurrentPlaying(null);
    }
  };

  // Sync play state when another video starts
  useEffect(() => {
    if (currentPlaying !== videoRef.current) {
      setIsPlaying(false);
    }
  }, [currentPlaying]);

  // Update isPlaying when video plays/pauses
  useEffect(() => {
    const vid = videoRef.current;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    vid.addEventListener("play", onPlay);
    vid.addEventListener("pause", onPause);

    return () => {
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <div className="video-container" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        src={src}
        width="400"
        className="video-element"
      />
      {!isPlaying && (
        <div className="play-icon-overlay">
          <PlayArrowIcon style={{ fontSize: 60, color: "white" }} />
        </div>
      )}
      {isPlaying && (
        <div className="pause-icon-overlay">
          <PauseIcon style={{ fontSize: 60, color: "white" }} />
        </div>
      )}
    </div>
  );
};

export default function ReelInsta() {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const videos = [reel1, reel2, reel4, reel5, reel6, reel3];

  return (
    <div className="ReelInsta">
      <div className="reel-head">Crafting Reels That Get Results</div>
      <div className="reel-sub">Because it’s not just about views – it’s about connection, engagement, and conversions</div>

     <div className="reels">
     {videos.map((video, index) => (
        <VideoPlayer
          key={index}
          src={video}
          currentPlaying={currentPlaying}
          setCurrentPlaying={setCurrentPlaying}
        />
      ))}
     </div>
    </div>
  );
}
