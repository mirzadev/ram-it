import React from "react";
import "./WebDevelopmentStyle.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import StatsSection from "../PerformanceCount/StatisticSection";
import image1 from "../../Assets/WebDevelopment/Web_Dev_1.png";
import image2 from "../../Assets/WebDevelopment/Web_Dev_2.png";
import image3 from "../../Assets/WebDevelopment/focus-area.png";
import image4 from "../../Assets/AppDevelopment/img-android.jpg";
import image5 from "../../Assets/AppDevelopment/img-ios.png";
import image6 from "../../Assets/AppDevelopment/img-windows.png";
import image7 from "../../Assets/AppDevelopment/img-chrome.png";
import image8 from "../../Assets/WebDevelopment/BackendDevelopment.png";
import image9 from "../../Assets/WebDevelopment/TeamAugmentation.png";
import image10 from "../../Assets/WebDevelopment/StrategyPlanning.png";
import image11 from "../../Assets/WebDevelopment/QualityAssurance.png";
import image12 from "../../Assets/WebDevelopment/UI-UXDesign.png";
import image13 from "../../Assets/WebDevelopment/CustomDevelopment.png";
import image14 from "../../Assets/WebDevelopment/e-commerce.png";
import image15 from "../../Assets/WebDevelopment/CyberSecurity.png";
import image16 from "../../Assets/WebDevelopment/AIDevelopment.png";
import image17 from "../../Assets/WebDevelopment/FinancialSector.png";
import image18 from "../../Assets/WebDevelopment/InsuranceSector.png";
import image19 from "../../Assets/WebDevelopment/HealthCare.png";
import image20 from "../../Assets/WebDevelopment/OurSkills.jpg";

const WebDevelopment = () => {
  return (
    <div className="web-development-container">
      <AnimatedBackground />
      <div className="hero-section3">
        <div className="hero-overlay">
          <h1>Web Development</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="web-solution">
        <div className="web-solution-header">
          <h2>Web Solutions</h2>
          <h1>Crafting Digital Experiences Matters</h1>
          <p>
            Your website is often the first impression customers have of your
            business. At RAM IT, we build responsive, scalable, and visually
            stunning websites that drive results. Whether it's an e-commerce
            platform, corporate website, or custom web app, we tailor every
            project to meet your business goals and captivate your audience.
          </p>
        </div>
        <div className="web-solution-image">
          <img src={image1} alt="Web Development" className="section-image" />
          <img src={image2} alt="Web Development" className="section-image" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="Focus-Area">
        <img src={image3} alt="focus" className="sectionImage" />
        <div className="Focus-text">
          <h2>Our Focus Areas</h2>
          <h1>Business Process Re-Engineering</h1>
          <p>
            We develop and implement custom web applications that improve the
            efficiency of business processes. Such efficiencies largely benefit
            business operations in reducing time and effort in completing
            everyday tasks. Our solutions enable businesses to integrate
            applications and create a connected software ecosystem. This helps
            to streamline business processes and organise data flow for better
            efficiency & collaboration.
          </p>
          <p>
            We deliver end-to-end mobile application development across popular
            mobile platforms and mobile-enabled technologies. Our team
            specializes in creating applications that involve mobile, web,
            embedded, and cloud technologies, assisting businesses to benefit
            from a set-up that is focused on integrated and streamlined
            technology ecosystems.
          </p>
        </div>
      </section>

      <section className="WebPortfolio">
        <div>
          <img
            src={image4}
            alt="Web Development"
            className="section-image2"
            height="150"
            width="150"
          />
          <img
            src={image5}
            alt="Web Development"
            className="section-image2"
            height="150"
            width="150"
          />
          <img
            src={image6}
            alt="Web Development"
            className="section-image2"
            height="150"
            width="150"
          />
          <img
            src={image7}
            alt="Web Development"
            className="section-image2"
            height="150"
            width="150"
          />
        </div>
        <p className="Webportfolio-para">
          Developing custom web applications that improve the efficiency of
          business processes.
        </p>
      </section>
      <StatsSection />
      {/* Working Progress Section */}
      <section className="working-progress">
        <div className="working-progress-headers">
          <h2>Working Progress</h2>
          <h1>Full-Cycle Web Development Services</h1>
          <p>
            Transform your ideas into reality with our dedicated web development
            lifecycle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="Webservices">
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image8}
              alt="Backend Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Backend Development</h3>
            <p>
              Robust, scalable, and secure backend systems tailored for your
              business needs.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image9}
              alt="Team Augmentation"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="service-text">
            <h3>Team Augmentation</h3>
            <p>
              Boost your project with skilled developers who seamlessly
              integrate into your team.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image10}
              alt="Strategy & Planning"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Strategy & Planning</h3>
            <p>
              Comprehensive project planning and execution strategies for
              guaranteed success.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image11}
              alt="Quality Assurance"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Quality Assurance</h3>
            <p>
              Rigorous QA processes ensuring your website performs flawlessly on
              all devices.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image12}
              alt="UI/UX Design"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>UI/UX Design</h3>
            <p>
              Engaging and intuitive designs that enhance user interaction and
              retention.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image13}
              alt="Custom Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Custom Development</h3>
            <p>
              Tailor-made web applications designed to fit your unique business
              requirements.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image14}
              alt="Custom Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>E-Commerce</h3>
            <p>
              Scalable online store platforms with integrated payment gateways,
              inventory management, and seamless UX to maximize conversions.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image15}
              alt="Custom Development"
              className="section-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Cyber Security</h3>
            <p>
              Robust cybersecurity solutions to safeguard your digital assets,
              ensure compliance, and mitigate threats proactively.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image16}
              alt="Custom Development"
              className="Websection-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>AI Development</h3>
            <p>
              Intelligent AI-powered systems for automation, data analytics, and
              personalized experiences that drive innovation.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image17}
              alt="Custom Development"
              className="Websection-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Financial Institutions</h3>
            <p>
              Secure, compliant financial solutions that enhance transaction
              processing, customer experience, and operational efficiency.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image18}
              alt="Custom Development"
              className="Websection-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Insurance</h3>
            <p>
              Streamlined digital platforms for policy management, claims
              automation, and customer engagement in the insurance sector.
            </p>
          </div>
        </div>
        <div className="Webservice">
          <div className="Webservice-img">
            <img
              src={image19}
              alt="Custom Development"
              className="Websection-img"
              height="150"
              width="150"
            />
          </div>
          <div className="Webservice-text">
            <h3>Health Care</h3>
            <p>
              HIPAA-compliant solutions for patient records, appointment
              scheduling, telehealth, and improved care coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="Webskills">
        <div className="Webskills-section-img">
          <img src={image20} alt="Web Development" className="Webskill-img" />
        </div>
        <div className="Webskill-text">
          <h2>Our Skills</h2>
          <h1>Driving Digital Success with Expertise</h1>
          <p>
            Our expert web developers bring your ideas to life with modern
            technologies and agile methodologies. From front-end brilliance to
            back-end robustness, we ensure that every layer of your website is
            optimized for performance, scalability, and user engagement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
