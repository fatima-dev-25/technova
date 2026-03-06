import { useNavigate } from "react-router-dom";
import "../index.css";

function EventCard({ event, index }) {
  const navigate = useNavigate();

  return (
    <div className="event-wrapper">
      <div
        className="event-card"
        style={{
          backgroundImage: `url(${event.image})`,
        }}
      >
        <div className="overlay"></div>

        <div className="event-content">
          <p className="event-number">
            EVENT {(index + 1).toString().padStart(2, "0")} 
          </p>

          <h2 className="event-title">{event.heading}</h2>

          <p className="event-description">{event.description}</p>

          <button
            className="event-button"
            onClick={() => navigate(`/event/${event.id}`)}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;