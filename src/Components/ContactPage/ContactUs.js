import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./ContactUsStyles.css";
import MapComponent from "./MapLocation";
// install email js --   npm install emailjs-com
// email.js is connected using fashionrk212@gmail.com tamplate. Mail going to fobanac@gmail.com

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 10000); // Clear message after 10 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "All fields are required!" });
      return;
    }

    // Send email using EmailJS service
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_xveaxc8",
        "template_1uiimuo",
        templateParams,
        "_t_P0TmfiikdmOs0q"
      )
      .then(
        (response) => {
          setStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <div>
      <div className="contact-us-container">
        <div className="contactUs_header">
          <h1>CONTACT US</h1>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
              maxLength="1000"
              rows="6"
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>

        {status && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
        <div className="ContactInfo">
          <div className="office-loc">
            <div
              className="fa-solid fa-thumbtack"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Our Office</h2>
            <Link
              to="https://maps.app.goo.gl/AXUV3vrgV4EmZSjG9"
              target="_blank"
              rel="noreferrer"
            >
              <div>3630 NW 89th Terrace,</div>
              <div>Cooper City, FL-33024</div>
            </Link>
          </div>
          <div className="tel-contact">
            <div
              className="fa-solid fa-phone"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Phone</h2>
            <div className="phoneNumber">1(754) 457-3667 (Cell)</div>
            <div className="phoneNumber">1(954) 391-9207 (Office)</div>
          </div>
          <div className="email-contact">
            <div
              className="fa-solid fa-envelope"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Email</h2>
            <Link
              to="mailto:fobanac@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="email-address">ramitservice2024@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="Official_Contact">
        <div className="map_header">
          <h1>ON YOUR MAP</h1>
        </div>
        <div className="map-location">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
