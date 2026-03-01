import { useNavigate } from "react-router-dom";

function EventCard({ event, index }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div
        className="
      relative h-[420px] w-full max-w-4xl
      rounded-3xl overflow-hidden
      border border-red-900
      transition-all duration-300
      hover:border-red-500
      hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
      cursor-pointer
      "
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 p-16 max-w-2xl">
          <p className="text-red-400 tracking-widest mb-6 text-sm">
            EVENT {(index + 1).toString().padStart(2, "0")} —
          </p>

          <h2 className="text-4xl font-bold text-white mb-6">
            {event.title}
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            {event.description}
          </p>

  <button
  onClick={() => navigate(`/event/${event.id}`)}
  className="
    bg-blue-600
    text-white
    px-8 py-3
    rounded-xl
    font-semibold
    transition duration-300
    hover:bg-blue-800
    hover:scale-105
  "
>
  Register Now
</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;