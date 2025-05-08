import "./FooterStyles.css";
import FaceBook from "../../Assets/footerItem/Facebook.png";
import Twiter from "../../Assets/footerItem/Twiter.png";
import YouTube from "../../Assets/footerItem/YouTube.png";
import Location from "../../Assets/footerItem/Location_Symbol.png";
import Telephone from "../../Assets/footerItem/Telephone_Logo.png";
import Email from "../../Assets/footerItem/Email_Logo.png";
import pspTechLogo from "../../Assets/footerItem/pspTech-logo.png";
import RAMITLogo from "../../Assets/Home/RAM_IT_LOGO.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="social-media-div">
          <h4>Social Media</h4>
          <div className="social-media">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </Link>
            <Link to="/" target="_blank" rel="noreferrer">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </Link>
            <Link
              to="https://www.youtube.com/@pspmusic-florida1643"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </Link>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div className="link-menues">
            <div className="link-menu-1">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/Career">Career</Link>
            </div>
            <div className="link-menu-2">
              <Link to="/software">Software Development</Link>
              <Link to="/appDev">App Development</Link>
              <Link to="/webDev">Web Development</Link>
            </div>
            <div className="link-menu-3">
              <Link to="/contact">Contact Us</Link>
              <Link to="/about">Explore RAM IT</Link>
            </div>
          </div>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="contact-footer_items">
            <div className="location-address">
              <Link
                to="https://www.google.com/maps/place/Stirling+Town+Center,+8861+striling+Road,+Cooper+City,+FL+33328/@26.0455298,-80.2637054,17z/data=!4m15!1m8!3m7!1s0x88d9a863cb3bfb5b:0x9bdf6980250947ce!2s8661+Stirling+Rd,+Cooper+City,+FL+33328!3b1!8m2!3d26.045525!4d-80.2611305!16s%2Fg%2F11cslvk1k1!3m5!1s0x88d9a86252b7996f:0xe1458e369dccd893!8m2!3d26.0454557!4d-80.2622747!16s%2Fg%2F11bvt860qh?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <div className="loc_address_cont">
                  <img
                    src={Location}
                    alt="location"
                    className="location-image"
                  />
                  <p className="location-address">
                    3630 NW 89th Terrace, Cooper City, FL-33024
                  </p>
                </div>
              </Link>
              <div className="telephone">
                <img
                  src={Telephone}
                  alt="telephone"
                  className="telephone-image"
                />
                <p className="telephone-number">1(754) 457 3667 (Cell)</p>
              </div>
              <Link
                to="mailto:ramitservice@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="email">
                  <img src={Email} alt="email" className="email-image" />
                  <p className="email-address">ramitservice@gmail.com</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <div>
          <img src={RAMITLogo} alt="psptech" height="70" width="200" />
        </div>
        <div>
          <p>Copyright @ 2024 RAM IT Inc</p>
        </div>
        <div className="copyright-note">
          <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
            <p>Tech Support:</p>
            <img src={pspTechLogo} alt="psptech" height="35" width="35" />
            <p>PSP Technology Inc</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
