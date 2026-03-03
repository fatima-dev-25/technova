import ParticleBackground from "../components/ParticleBackground";
import StarField from "../components/StarField";
import PageWrapper from "../components/PageWrapper";
import bgImage from "../assets/Images/tech.jpg";
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

        <div className="event-date">
          Be There. 17th March 2026.
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;