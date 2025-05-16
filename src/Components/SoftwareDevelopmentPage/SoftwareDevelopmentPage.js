import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./SoftwareDevelopmentPage.css";
// install   npm install react-tsparticles tsparticles
import image1 from "../../Assets/SoftwareDevelopment/dev-1.jpg";
import image2 from "../../Assets/SoftwareDevelopment/dev-2.png";
import image3 from "../../Assets/SoftwareDevelopment/dev-3.jpg";
import image4 from "../../Assets/SoftwareDevelopment/dev-4.jpg";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
function SoftwareDevelopmentPage() {
  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  return (
    <div className="software-container">
      <AnimatedBackground />
      {/* <AnimatedBackground /> */}
      <div className="hero-section1">
        <div className="hero-overlay">
          <h1>Software Development</h1>
        </div>
      </div>
      <p className="software-subtitle">
        Empowering your business with innovative technology solutions tailored
        for growth and efficiency.
      </p>
      <div className="software-content">
        <section className="software-section">
          <div className="software-text-image">
            <img src={image1} alt="App Development" className="section-image" />
            <div className="text-block">
              <h2>App Development</h2>
              <p>
                Our mobile app development team delivers intuitive and robust
                applications for iOS and Android platforms. From idea validation
                to UI/UX design and development, we ensure high performance,
                security, and a user-centered experience.
              </p>
              <p>
                We utilize modern frameworks like React Native, Flutter, and
                Swift to develop native and cross-platform apps, ensuring
                maximum reach and impact.
              </p>
            </div>
          </div>
        </section>

        <section className="software-section">
          <div className="software-text-image reverse">
            <img src={image2} alt="Web Development" className="section-image" />
            <div className="text-block">
              <h2>Web Development</h2>
              <p>
                We build responsive and dynamic websites tailored to your brand
                and business goals. Whether it's a corporate website, eCommerce
                platform, or web application, our developers deliver seamless
                functionality and elegant design.
              </p>
              <p>
                We work with React, Node.js, WordPress, and other modern tools
                to deliver scalable, SEO-optimized, and secure solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="software-section">
          <div className="software-text-image">
            <img src={image3} alt="Tech Strategy" className="section-image" />
            <div className="text-block">
              <h2>Technology Consulting</h2>
              <p>
                We guide businesses through the complex landscape of digital
                transformation. From IT strategy and process automation to cloud
                integration, our consultants align your technology with your
                business vision.
              </p>
              <p>
                Our team ensures that your investment in technology delivers
                long-term benefits, helping you stay competitive and agile.
              </p>
            </div>
          </div>
        </section>

        <section className="software-section">
          <div className="software-text-image reverse">
            <img src={image4} alt="Support" className="section-image" />
            <div className="text-block">
              <h2>Ongoing Support</h2>
              <p>
                Our commitment doesn’t end at deployment. We provide
                comprehensive post-launch support, regular updates, security
                monitoring, and performance optimization to ensure your
                solutions stay up-to-date.
              </p>
              <p>
                Our 24/7 support team is always available to assist you and
                resolve any issues promptly.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SoftwareDevelopmentPage;
