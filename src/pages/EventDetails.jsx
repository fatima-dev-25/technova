import { useParams } from "react-router-dom";
import events from "../data/events";
import PageWrapper from "../components/PageWrapper";

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  return (
    <PageWrapper>
      <div className="pt-28 max-w-4xl mx-auto glass neon-border p-8 rounded-xl">
        <h1 className="text-4xl text-blue-400 mb-4">
          {event.title}
        </h1>
        

        <p className="mb-4">{event.description}</p>

        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Head:</strong> {event.head}</p>

        <ul className="mt-4 list-disc ml-6">
          {event.guidelines.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>

        <button
          onClick={() => window.open(event.formLink, "_blank")}
          className="mt-6 bg-blue-500 px-6 py-2 rounded hover:shadow-[0_0_20px_#0ea5e9]"
        >
          Register Now
        </button>
      </div>
    </PageWrapper>
  );
}

export default EventDetails;