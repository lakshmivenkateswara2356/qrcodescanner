import socialLinks from "../data/socialLinks";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      {/* Animated Background Shapes */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">CH</div>

          <h1>Calorye Hive</h1>

          <p>
            Nutrition • Fitness • Wellness <br />
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
              <span>{link.platform}</span>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}