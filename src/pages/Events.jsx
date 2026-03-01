import events from "../data/events";
import EventCard from "../components/EventCard";
import PageWrapper from "../components/PageWrapper";

function Events() {
  return (
   <PageWrapper>
  <div className="min-h-screen flex justify-center items-start py-24 px-8">
    <div className="w-full max-w-5xl space-y-32">

      <h1 className="text-6xl text-red-500 text-center tracking-widest">
        EVENTS
      </h1>

      <div className="flex flex-col gap-32">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>

    </div>
  </div>
</PageWrapper>
  );
}

export default Events;