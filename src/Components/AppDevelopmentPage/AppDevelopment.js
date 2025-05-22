import React from "react";
import "./AppDevelopmentStyle.css"; // Create this for custom styling or replace with a CSS framework
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import StatsSection from "../PerformanceCount/StatisticSection";
import image1 from "../../Assets/AppDevelopment/mobile-app-1.webp";
import image2 from "../../Assets/AppDevelopment/img-android.jpg";
import image3 from "../../Assets/AppDevelopment/img-ios.png";
import image4 from "../../Assets/AppDevelopment/img-windows.png";
import image5 from "../../Assets/AppDevelopment/img-chrome.png";
import image6 from "../../Assets/AppDevelopment/quality-assuranc.png";
import image7 from "../../Assets/AppDevelopment/idea-w.png";
import image8 from "../../Assets/AppDevelopment/progress-w.png";
import image9 from "../../Assets/AppDevelopment/quality-assuranc.png";
import image10 from "../../Assets/AppDevelopment/ux-design-w-2.png";
import image11 from "../../Assets/AppDevelopment/soft-app-dev-2-w.png";
import image12 from "../../Assets/AppDevelopment/AppDev-3.png";

const AppDevelopment = () => {
  return (
    <div className="app-development-container">
      <AnimatedBackground />
      {/* <AnimatedBackground /> */}
      <div className="hero-section4">
        <div className="hero-overlay">
          <h1>App Development</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="app-solution">
        <div className="app-solution-header">
          <h3>App Solutions</h3>
          <h2>A Great Idea Turned Into an App</h2>
          <p>
            Make your awesome business idea a reality with RAM IT. In today's
            fast-paced digital world, having a mobile app is no longer a
            luxury—it's a necessity. Mobile apps enhance user engagement,
            increase customer retention, and offer seamless accessibility on the
            go. Whether you're running an e-commerce site, a service-based
            business, or a content platform, an app can transform the way
            customers interact with you. Let RAM IT help you bridge the gap
            between your website and your users with intuitive, high-performing
            mobile apps tailored to your business goals.
          </p>
        </div>
        <div className="app-solution-image">
          <img src={image1} alt="App Development" className="section-image" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        <h1>
          Our Areas Of Excellence And Expertise In Custom Mobile App Development
        </h1>
        <div>
          <img
            src={image2}
            alt="App Development"
            className="section-image1"
            height="150"
            width="150"
          />
          <img
            src={image3}
            alt="App Development"
            className="section-image1"
            height="150"
            width="150"
          />
          <img
            src={image4}
            alt="App Development"
            className="section-image1"
            height="150"
            width="150"
          />
          <img
            src={image5}
            alt="App Development"
            className="section-image1"
            height="150"
            width="150"
          />
        </div>
      </section>

      {/* Working Progress Section */}
      <section className="working-progress">
        <div className="working-progress-headers">
          <h2>Working Progress</h2>
          <h1>Start-to-End App Development Agency</h1>
          <p>Make your awesome business idea a reality with RAM IT.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service">
          <div className="service-img">
            <img
              src={image6}
              alt="App Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Quality assurance</h3>
            <p>
              Validate every aspect of your software: functional, integration,
              performance, usability, and security.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img
              src={image7}
              alt="App Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Team augmentation</h3>
            <p>
              Scale your in-house development team effortlessly with
              cost-efficient and flexible technology staff augmentation.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img
              src={image8}
              alt="App Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Salesforce® development</h3>
            <p>
              End-to-end Salesforce® Development, Consulting, and Staffing
              services. We are a Salesforce® Consulting Partner.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img
              src={image9}
              alt="App Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Ideation & discovery</h3>
            <p>
              Validate your solution idea, target and get answers to critical
              business questions early on to reduce the risk of failure.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img
              src={image10}
              alt="App Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Product design</h3>
            <p>
              Build impeccable UX designs to attract and retain users, boost
              conversion rates and enhance user engagement.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img
              src={image11}
              alt="App Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Software development</h3>
            <p>
              Engineer revolutionary products and software solutions with an
              experienced custom software development partner.
            </p>
          </div>
        </div>
      </section>
      <StatsSection />

      {/* Skills Section */}
      <section className="skills">
        <div className="skills-section-img">
          <img src={image12} alt="App Development" className="skill-img" />
        </div>
        <div className="skill-text">
          <h2>Our Skills</h2>
          <h1>Bringing Technology To Business</h1>
          <p>
            Our skills & technical expertise enable us to drive business ahead.
            We offer full stack development services across various technologies
            and platforms using agile methodology, ensuring that your business
            stays ahead of competition.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
