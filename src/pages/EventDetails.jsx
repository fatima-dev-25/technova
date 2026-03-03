import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import events from "../data/events";
import "../index.css";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <PageWrapper>
        <div className="not-found">Event not found</div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      
      {/* 🔙 Back Button OUTSIDE */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-wrapper">
        <div
          className="details-card"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="details-overlay"></div>

          <div className="details-content">

            {/* Title + Register Button Row */}
            <div className="top-section">
              <h1 className="details-title">{event.title}</h1>

              <button
                className="register-button"
                onClick={() => window.open(event.formLink, "_blank")}
              >
                Register Now
              </button>
            </div>

            {/* Guidelines + Event Flow Row */}
<div className="info-row">

  <div className="info-box">
    <h2>Guidelines</h2>
    <ul>
      {event.guidelines.map((g, i) => (
        <li key={i}>{g}</li>
      ))}
    </ul>
  </div>

  <div className="info-box">
    <h2>Event Flow</h2>
    {event.flow.map((step, index) => (
      <div key={index} className="flow-item">
        <p><strong>{step.title} :</strong> {step.details}</p>
      </div>
    ))}
  </div>

</div>

            <div className="bottom-row">
  <div className="bottom-box">
    <p><strong>Time : </strong>
    {event.time}</p>
  </div>

  <div className="bottom-box">
    <p><strong>Venue : </strong>
    {event.venue}</p>
  </div>

  <div className="bottom-box">
    <p><strong>Head : </strong>
    {event.head}</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default EventDetails;