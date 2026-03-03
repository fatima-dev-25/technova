import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import events from "../data/events";
import "../index.css";

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center text-white text-2xl">
          Event not found
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="details-wrapper">
        <div
          className="details-card"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="details-overlay"></div>

          <div className="details-content">
            <h1 className="details-title">{event.title}</h1>

            <p className="details-description">{event.description}</p>

            <div className="details-info">
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Head:</strong> {event.head}</p>
              <p><strong>Team Size:</strong> {event.teamSize}</p>
            </div>

            {event.guidelines && (
              <>
                <h2 className="details-subtitle">Guidelines</h2>
                <ul className="details-guidelines">
                  {event.guidelines.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </>
            )}

            {event.flow && (
              <>
                <h2 className="details-subtitle">Event Flow</h2>
                <div className="details-flow">
                  {event.flow.map((step, index) => (
                    <div key={index} className="flow-item">
                      <h4>{step.title}</h4>
                      <p>{step.details}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <button
              className="details-button"
              onClick={() => window.open(event.formLink, "_blank")}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default EventDetails;