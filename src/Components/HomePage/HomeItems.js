// npm install framer-motion
import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import { motion, AnimatePresence } from "framer-motion";
// import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import image1 from "../../Assets/Home/CyberSecurity.png";
import image2 from "../../Assets/Home/CloudService.png";
import image3 from "../../Assets/Home/AiDevelopment.png";
import image4 from "../../Assets/Home/Networking.png";
import OfficeImg1 from "../../Assets/Home/OfficeImg-1.jpg";
import OfficeImg2 from "../../Assets/Home/OfficeImg-2.jpg";
import OfficeImg3 from "../../Assets/Home/OfficeImg-3.jpg";
import OfficeImg4 from "../../Assets/Home/OfficeImg-4.png";
import OfficeImg5 from "../../Assets/Home/OfficeImg-5.jpg";
import OfficeImg6 from "../../Assets/Home/OfficeImg-6.jpg";
import OfficeImg7 from "../../Assets/Home/OfficeImg-7.jpg";
import OfficeImg8 from "../../Assets/Home/OfficeImg-8.jpg";
import OfficeImg9 from "../../Assets/Home/OfficeImg-9.jpg";
import OfficeImg10 from "../../Assets/Home/OfficeImg-10.jpg";

const services = [
  {
    title: "Cyber Security",
    img: image1,
    description:
      "We protect your digital infrastructure with cutting-edge cybersecurity solutions including threat detection, vulnerability assessments, and incident response.",
  },
  {
    title: "Cloud Services",
    img: image2,
    description:
      "Our cloud experts help you migrate, manage, and optimize cloud infrastructure for performance, security, and scalability.",
  },
  {
    title: "AI Development",
    img: image3,
    description:
      "We build intelligent AI solutions including automation, data modeling, and decision support systems for modern enterprises.",
  },
  {
    title: "Networking",
    img: image4,
    description:
      "RAM IT designs and maintains secure, reliable, and scalable networks tailored to your operational needs.",
  },
];

function HomeItems() {
  const missionImages = [
    OfficeImg1,
    OfficeImg2,
    OfficeImg3,
    OfficeImg4,
    OfficeImg5,
    OfficeImg6,
    OfficeImg7,
    OfficeImg8,
    OfficeImg9,
    OfficeImg10,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % missionImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* <AnimatedBackground /> */}
      <header className="hero-section-Home">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="homepage-header">
            <h1>WELCOME TO RAM IT</h1>
            <p>Empowering Business Through Technology</p>
          </div>
        </motion.div>
      </header>
      <div className="home-mission">
        <h1>OUR MISSION</h1>
      </div>

      <section className="mission-section">
        <motion.div
          className="mission-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            To empower businesses with reliable, innovative technology. We aim
            to:
          </p>

          <ul>
            <li>Deliver robust and proactive cybersecurity solutions.</li>
            <li>Enable scalable and secure cloud architecture.</li>
            <li>Integrate AI for intelligent business automation.</li>
            <li>
              Design reliable networking solutions for seamless communication.
            </li>
            <li>
              Empower our clients with people-focused IT support and
              partnerships.
            </li>
          </ul>
          <p>
            We don’t just build software, we build trust, transformation, and
            future-ready technology.
          </p>
        </motion.div>

        <motion.div
          key={currentImage}
          className="mission-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <img src={missionImages[currentImage]} alt="Office team" />
        </motion.div>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeItems;
