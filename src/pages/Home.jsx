import ParticleBackground from "../components/ParticleBackground";
import StarField from "../components/StarField";
import PageWrapper from "../components/PageWrapper";
import bgImage from "../assets/Images/tech.jpg";
import eventLogo from "../assets/Images/eventlogo.png";
import partnerLogo from "../assets/Images/partnerlogo.png";
import "../index.css";

function Home() {
  return (
    <PageWrapper>
      <div
        className="home-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <StarField />
        <ParticleBackground />

        {/* Logos */}
        <div className="logo-section">
          <div className="logo-box">
            <img src={eventLogo} alt="Event Logo" />
            <p>TECHNOVA</p>
          </div>

          <div className="logo-box">
            <img src={partnerLogo} alt="Partner Logo" />
            <p>Organized by LICET IT</p>
          </div>
        </div>

        <div className="event-date">
          Be There. 17th March 2026.
        </div>

      </div>
    </PageWrapper>
  );
}

export default Home;