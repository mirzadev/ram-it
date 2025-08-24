import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobListings } from "../../CareerPage/JobData";
import "./JobDescriptionStyles.css";

const FrontEndJobDesc = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const job = jobListings.find((j) => j.id === jobId);

  return (
    <div className="job-description-page">
      <h1>Front End Developer</h1>
      <div className="location-type">
        <p>
          <strong>Location:</strong> Hollywood, Florida
        </p>
        <p>| |</p>
        <p>
          <strong>Type:</strong> Contract
        </p>
      </div>
      <h2>About the Role</h2>
      <p>
        We're seeking a Front End Developer with a passion for building
        intuitive user experiences. You'll work closely with designers and
        backend developers to create responsive and engaging applications.
      </p>

      <h2>Responsibilities</h2>
      <ul>
        <li>
          Develop responsive web interfaces using React, HTML, CSS, and
          JavaScript.
        </li>
        <li>
          Collaborate with design and backend teams to implement features.
        </li>
        <li>Optimize performance and ensure cross-browser compatibility.</li>
        <li>Contribute to UI/UX design decisions and best practices.</li>
      </ul>

      <h2>Requirements</h2>
      <ul>
        <li>6+ years experience with React or similar frontend frameworks.</li>
        <li>Strong proficiency in HTML5, CSS3, JavaScript (ES6+).</li>
        <li>Experience with REST APIs and responsive design.</li>
        <li>Familiarity with Git and Agile workflows.</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Flexible hours & remote options</li>
        <li>Professional development allowance</li>
        <li>Medical, dental & vision insurance</li>
      </ul>

      <button
        className="apply-btn"
        onClick={() => navigate(`/apply/${job.id}`)}
      >
        Apply Now
      </button>
    </div>
  );
};

export default FrontEndJobDesc;
