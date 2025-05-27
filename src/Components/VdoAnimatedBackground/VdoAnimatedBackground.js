import React from "react";
import "./VdoAnimatedBackgroundStyle.css";
// import bgVideo from "../../Assets/AnimatedBackground.mp4";

const VdoAnimatedBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/videos/AnimatedBackground.mp4" type="video/mp4" />
        {/* <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VdoAnimatedBackground;
