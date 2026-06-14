import socialLinks from "../data/socialLinks";
import "./Profile.css";
import Caloryehive from "../Assets/chlo.png";

import {
  FaYoutube,
  FaLinkedin,
  FaPinterest,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Profile() {
  const getIcon = (platform) => {
    switch (platform) {
      case "YouTube":
        return <FaYoutube className="social-icon" />;

      case "LinkedIn":
        return <FaLinkedin className="social-icon" />;

      case "X (Twitter)":
        return <FaXTwitter className="social-icon" />;

      case "Pinterest":
        return <FaPinterest className="social-icon" />;

      case "Facebook":
        return <FaFacebook className="social-icon" />;

      case "Instagram":
        return <FaInstagram className="social-icon" />;

      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src={Caloryehive}
              alt="Calorye Hive"
              className="logosize"
            />
          </div>

          <h1>Calorye Hive</h1>

          <p>
            Nutrition • Fitness • Wellness
            <br />
            Transforming Healthy Living
          </p>
        </div>

        <div className="links-container">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <div className="social-left">
                {getIcon(link.platform)}
                <span>{link.platform}</span>
              </div>

              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}