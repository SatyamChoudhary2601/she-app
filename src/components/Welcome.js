import React, { useEffect, useRef, useState } from "react";
import "./MainBody.css";
import welcome from "../components/video/welcome.mp4";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import IconButton from "@material-ui/core/IconButton";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const Welcome = () => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {}, []);
  const volumeHandler = () => {
    setIsMuted(true);
  };
  if (isMuted) {
    videoRef.current.muted = !isMuted;
  }
  console.log(isMuted);
  console.log(videoRef);
  return (
    <div
      className="col-sm-12"
      style={{ textAlign: "center", marginTop: "30%" }}
    >
      <video
        ref={videoRef}
        style={{ objectFit: "fill", borderRadius: "20px" }}
        loop
        autoPlay="true"
        controls
        muted="muted"
        width="100%"
        height="230"
        src={welcome}
      ></video>
      {isMuted ? (
        <>
          <IconButton>
            <VolumeUpIcon
              onClick={volumeHandler}
              fontSize="Large"
              className="vol-btn1"
            />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton>
            <VolumeOffIcon
              onClick={volumeHandler}
              fontSize="Large"
              className="vol-btn"
            />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default Welcome;
