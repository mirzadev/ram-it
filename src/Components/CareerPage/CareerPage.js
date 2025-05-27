import React from "react";
import "./CareerPageStyles.css";
import { jobListings } from "./JobData";
import VdoAnimatedBackground from "../VdoAnimatedBackground/VdoAnimatedBackground";
import image1 from "../../Assets/Career/Innovations.png";
import image2 from "../../Assets/Career/Collaboration.png";
import image3 from "../../Assets/Career/Integrity.png";
import image4 from "../../Assets/Career/WhyWorkIcon.png";
import image5 from "../../Assets/Career/coreValue-3.png";
import image6 from "../../Assets/Career/coreValue-4.png";
import image7 from "../../Assets/Career/applyJobIcon.png";
import image8 from "../../Assets/Career/interviewIcon.png";
import image9 from "../../Assets/Career/job-offer.png";
import image10 from "../../Assets/Career/application-process.png";

function CareerPage() {
  return (
    <div className="career-container">
      <VdoAnimatedBackground />
      {/* Hero Section */}
      <div className="hero-section5">
        <div className="hero-overlay">
          <h1>Grow Your Career with Us</h1>
        </div>
      </div>

      {/* Culture and Values Section */}
      <section className="culture-section">
        <h2>Our Culture & Values</h2>
        <p>
          At RAM IT, we're shaping the future through innovation, collaboration
          and integrity. Join a workplace where your growth, values, and
          creativity matters.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-img">
              <img
                src={image1}
                alt="Backend Development"
                className="section-img"
                height="150"
                width="150"
              />
            </div>
            <div className="value-text">
              <h3>Innovation</h3>
              <p>
                We always embrace cutting-edge technologies and empower our team
                to innovate fearlessly.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-img">
              <img
                src={image2}
                alt="Team Augmentation"
                className="section-img"
                height="150"
                width="150"
              />
            </div>
            <div className="value-text">
              <h3>Collaboration</h3>
              <p>
                We traditionally work together, celebrate together, and support
                each other like a true team.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-img">
              <img
                src={image3}
                alt="Strategy & Planning"
                className="section-img"
                height="150"
                width="150"
              />
            </div>
            <div className="value-text">
              <h3>Integrity</h3>
              <p>
                We always believe in honesty, transparency, and doing the right
                thing always.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="WhyWork-section">
        <div className="header-title-wrapper">
          <img src={image4} alt="Icon" className="title-icon" />
          <h2 className="header-title">Why Work With Us</h2>
        </div>

        <div className="work_text">
          <ul>
            <li>
              <strong>Competitive salary and benefits:</strong> We offer a
              market-leading compensation package including health, dental, and
              vision insurance, retirement plans, and performance bonuses to
              reward your hard work.
            </li>
            <li>
              <strong>Opportunities for growth and learning:</strong> Access to
              continuous learning resources, mentorship programs, workshops, and
              career development plans to help you expand your skills and
              advance your career.
            </li>
            <li>
              <strong>Diverse and inclusive workplace:</strong> We celebrate
              diversity and foster an environment where all voices are heard and
              valued, ensuring a welcoming culture for everyone.
            </li>
            <li>
              <strong>Flexible work arrangements:</strong> Whether you prefer
              remote, hybrid, or onsite work, we support your work-life balance
              with flexible scheduling and remote-friendly policies.
            </li>
          </ul>
          <div className="work_image">
            <img src={image5} alt="workImg" className="work-imageFirst" />
            <img src={image6} alt="workImg" className="work-imageSecond" />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section">
        <h2>Open Positions</h2>
        <div className="career-grid">
          {jobListings.map((job, index) => (
            <div key={index} className="career-card">
              <h3>{job.title}</h3>
              <p className="job-meta">
                {job.type} | {job.location}
              </p>
              <p>{job.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="application-section">
        <h2 className="application-title">Our Application Process</h2>
        <div className="application-area">
          <div className="application-steps">
            <div className="step">
              <img src={image7} alt="Apply Icon" className="step-icon" />
              <div className="step-content">
                <h3>1. Apply</h3>
                <p>
                  Submit your resume and cover letter online through our careers
                  portal.
                </p>
              </div>
            </div>
            <div className="step">
              <img src={image8} alt="Interview Icon" className="step-icon" />
              <div className="step-content">
                <h3>2. Interview</h3>
                <p>
                  Participate in a virtual or in-person interview with our team.
                </p>
              </div>
            </div>
            <div className="step">
              <img src={image9} alt="Offer Icon" className="step-icon" />
              <div className="step-content">
                <h3>3. Offer</h3>
                <p>
                  Receive a job offer and begin your onboarding journey with us.
                </p>
              </div>
            </div>
          </div>
          <div className="application-image">
            <img src={image10} alt="Offer Icon" className="step-image" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="FAQ_Section">
        <h2 className="FAQ_Header">FAQs</h2>
        <ul className="FAQ_description">
          <li>
            <strong>Q:</strong> Do you offer remote work options? <br />
            <strong>A:</strong> Yes, we offer flexible work arrangements
            including remote and hybrid options.
          </li>
          <li>
            <strong>Q:</strong> How can I prepare for the interview? <br />
            <strong>A:</strong> Review our company values, practice coding
            problems, and be ready to discuss your projects.
          </li>
          <li>
            <strong>Q:</strong> What benefits do you offer? <br />
            <strong>A:</strong> We offer comprehensive health coverage, paid
            time off, 401(k) matching, and learning stipends.
          </li>
          <li>
            <strong>Q:</strong> How long does the hiring process take? <br />
            <strong>A:</strong> Our typical hiring process takes 2–3 weeks from
            application to offer.
          </li>
          <li>
            <strong>Q:</strong> Do you support visa sponsorship? <br />
            <strong>A:</strong> Yes, we support visa sponsorship for qualified
            candidates based on role and location.
          </li>
          <li>
            <strong>Q:</strong> Is there a probationary period? <br />
            <strong>A:</strong> Yes, new employees typically undergo a 90-day
            probationary period to ensure mutual fit.
          </li>
          <li>
            <strong>Q:</strong> Can I apply for multiple positions? <br />
            <strong>A:</strong> Absolutely! You are welcome to apply for all
            roles that match your skills and interests.
          </li>
        </ul>
      </section>

      {/* Contact / Get in Touch */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-gray-700">
          Questions? Reach out to us at{" "}
          <a
            href="mailto:careers@example.com"
            className="text-blue-600 underline"
          >
            ramitservice@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default CareerPage;
