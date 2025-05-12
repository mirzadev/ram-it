import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Repeated + Varied shapes */}
      <div className="shape circle" style={{ top: "10%", left: "20%" }}></div>
      <div className="shape square" style={{ top: "40%", left: "70%" }}></div>
      <div className="shape triangle" style={{ top: "60%", left: "35%" }}></div>
      <div className="shape oval" style={{ top: "80%", left: "10%" }}></div>
      <div className="shape square" style={{ top: "25%", left: "50%" }}></div>
      <div className="shape circle" style={{ top: "15%", left: "80%" }}></div>
      <div className="shape triangle" style={{ top: "75%", left: "25%" }}></div>
      <div className="shape square" style={{ top: "5%", left: "60%" }}></div>
      <div className="shape oval" style={{ top: "55%", left: "15%" }}></div>
      <div className="shape star" style={{ top: "30%", left: "90%" }}></div>
      <div className="shape star" style={{ top: "85%", left: "70%" }}></div>
      <div className="shape circle" style={{ top: "45%", left: "40%" }}></div>
      <div className="shape oval" style={{ top: "20%", left: "10%" }}></div>
    </div>
  );
};

export default AnimatedBackground;
