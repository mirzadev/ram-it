import React from "react";
import "./AboutPageStyle.css";
import visionIcon from "../../Assets/About/vision.png";
import valueIcon from "../../Assets/About/values.png";
import serviceIcon from "../../Assets/About/services.png";
import teamIcon from "../../Assets/About/team.png";
import cybersecurityIcon from "../../Assets/About/cybersecurity.png";
import cloudIcon from "../../Assets/About/cloud.png";
import aiIcon from "../../Assets/About/artificial-intelligence.png";
import networkIcon from "../../Assets/About/network.png";
import whoIcon from "../../Assets/About/info.png";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
// import VdoAnimatedBackground from "../VdoAnimatedBackground/VdoAnimatedBackground";
import value1 from "../../Assets/About/coreValue-1.png";
import value2 from "../../Assets/About/coreValue-2.png";
import value3 from "../../Assets/About/coreValue-3.png";
import teamPhoto from "../../Assets/About/teamPhoto.png";
import WhoWeArePhoto from "../../Assets/About/aboutUsPhoto.png";
const About = () => {
  return (
    <div className="about-page" style={{ position: "relative", zIndex: 1 }}>
      {/* <VdoAnimatedBackground /> */}
      <AnimatedBackground />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Who We Are */}
        <section className="about-section">
          <img src={whoIcon} alt="Who We Are" className="icon" />
          <h2>Who We Are</h2>

          <div className="core-row">
            <div className="core-text">
              <p>
                We grow when our customers grow. At RAM IT, we’ve earned
                recognition and awards for delivering top-notch software and
                applications that gained global popularity. Every day at RAM IT
                starts with coffee and a stand-up meeting. Team discussions are
                at the heart of our process, leading to innovative ideas and
                inspiring solutions.
              </p>
            </div>
            <div className="core-image">
              <img
                src={WhoWeArePhoto} // replace with your imported image
                alt="Team Culture"
                className="animated-image-strong"
              />
            </div>
          </div>
          <p>
            We work with renewed energy, passion, and creativity — and we’re
            never bored. We take pride in fostering a collaborative work
            environment where every team member’s voice is heard. Continuous
            learning and adaptability are key to our success. At RAM IT, we
            don’t just build technology — we build trust, partnerships, and
            lasting value.
          </p>
        </section>

        {/* Vision */}
        <section className="about-section">
          <img src={visionIcon} alt="Vision" className="icon" />
          <h2>Our Vision</h2>
          <p>
            To become a global technology leader, delivering innovative, secure,
            and scalable digital products that transform businesses and empower
            people.
          </p>
        </section>

        {/* What We Offer */}
        <section className="about-section">
          <img src={serviceIcon} alt="What We Offer" className="icon" />
          <h2>What We Offer</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <img src={cybersecurityIcon} alt="Cybersecurity" />
              <p>Cybersecurity</p>
            </div>
            <div className="offer-card">
              <img src={cloudIcon} alt="Cloud Service" />
              <p>Cloud Services</p>
            </div>
            <div className="offer-card">
              <img src={aiIcon} alt="AI Development" />
              <p>AI Development</p>
            </div>
            <div className="offer-card">
              <img src={networkIcon} alt="Networking" />
              <p>Networking</p>
            </div>
          </div>
        </section>

        {/* Core Values */}

        <section className="about-section">
          <img src={valueIcon} alt="Core Values" className="icon" />
          <h2>Our Core Values</h2>

          {/* Row 1: Text Left, Image Right */}
          <div className="core-row">
            <div className="core-text">
              <p>
                Our Clients Love Us – Here’s Why. Strong ethics, human rights,
                and corporate governance are the main pillars of the company.
                Our leaders can make timely decisions and we always respect the
                value of our clients.
              </p>
            </div>
            <div className="core-image">
              <img
                src={value1}
                alt="Ethical Leadership"
                className="animated-image-strong"
              />
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="core-row reverse">
            <div className="core-text">
              <p>
                We always endeavor to stand in a culture of integrity,
                transparency, inclusivity, and respect for all people. We
                believe in innovation, integrity, and impact.
              </p>
            </div>
            <div className="core-image">
              <img
                src={value2}
                alt="Teamwork"
                className="animated-image-strong"
              />
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="core-row">
            <div className="core-text">
              <p>
                Our team is committed to delivering cutting-edge software
                solutions with a human touch. At RAM IT, we foster a culture of
                collaboration and continuous growth, ensuring that our core
                values shine through in every line of code.
              </p>
            </div>
            <div className="core-image">
              <img
                src={value3}
                alt="Innovation"
                className="animated-image-strong"
              />
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="about-section">
          <img src={teamIcon} alt="Team" className="icon" />
          <h2>Our Team</h2>

          <div className="core-row reverse">
            <div className="core-image">
              <img
                src={teamPhoto} // Replace this with your actual image import
                alt="Our Team"
                className="animated-image-strong"
              />
            </div>
            <div className="core-text">
              <p>
                Our team is a diverse group of passionate developers, designers,
                project managers, and strategists who are dedicated to crafting
                excellence. We come from various backgrounds and bring a unique
                set of skills to the table, united by our passion for innovation
                and collaboration.
              </p>
            </div>
          </div>
          <p>
            At RAM IT, we believe in continuous learning, open communication,
            and a shared vision for success. Every project is a team effort
            where creativity meets precision, and every team member plays a
            critical role in delivering world-class digital experiences.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
