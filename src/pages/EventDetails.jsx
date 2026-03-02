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
          style={{
            backgroundImage: `url(${event.image})`,
          }}
        >
          <div className="details-overlay"></div>

          <div className="details-content">
            <h1 className="details-title">{event.title}</h1>

            <p className="details-description">
              {event.description}
            </p>

            <div className="details-info">
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Head:</strong> {event.head}</p>
            </div>

            <ul className="details-guidelines">
              {event.guidelines.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>

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