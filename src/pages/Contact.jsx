import PageWrapper from "../components/PageWrapper";
import "../index.css";

function Contact() {
  return (
    <PageWrapper>
       <div className="hero-conte">
      <p className="organizer-te">
            <strong>Department of Information Technology</strong>
          </p>
          </div> 
      <div className="contact-wrapper">

        {/* Title Section */}
        <h1 className="contact-title">CONTACT US</h1>
        <p className="contact-subtitle">
          Reach out to us for any TechNova-related inquiries. We're here to help!
        </p>

        {/* Contact Cards Row */}
        <div className="contact-row">

          {/* Left Card */}
          <div className="contact-card">
            <div className="contact-card-content">
              <h2 className="card-heading">TECH NOVA</h2>
              <p className="card-text">
                Dive into TechNova, where technology meets imagination and ideas become reality.
              </p>

              <div className="card-info">
                <p>📍 LICET, Loyola Campus, Chennai </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="contact-card">
            <div className="contact-card-content">
              <h2 className="card-heading">CONTACT INFORMATION</h2>

              <div className="contact-section">
                <h4>FOR QUERIES CONTACT</h4>
                <p>👤 Fatima Theresa - III Year</p>
                <p>👤 Narayani - II Year</p>
              </div>

              

            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}

export default Contact;