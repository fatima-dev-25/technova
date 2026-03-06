import { useNavigate } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import StarField from "../components/StarField";
import PageWrapper from "../components/PageWrapper";
import bgImage from "../assets/Images/tech.jpg";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      
      <div
        className="home-container"
        style={{ backgroundImage: `url(${bgImage})`,
      backgroundSize: "95%", }}
      >
    
        <StarField />
        <ParticleBackground />
        <div className="hero-conten">
      <p className="organizer-tex">
            <strong>Department of Information Technology</strong>
          </p>
          <p className="organizer-text">
            <strong>Association with CSI organizes</strong>
          </p>
          </div>
        {/* CENTER CONTENT */}
        <div className="hero-content">

          <p className="hero-tagline">
            <strong>Igniting innovation through technology, talent, and teamwork</strong>
          </p>

          <button
            className="join-button"
            onClick={() => navigate("/events")}
          >
            Join Us
          </button>
          
        </div>

        <div className="event-date">
          Be There. 17th March 2026.
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;