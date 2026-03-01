import Countdown from "react-countdown";

function CountdownTimer() {
  const eventDate = new Date("2026-03-10T08:00:00");

  return (
    <div className="text-center text-blue-400 text-xl mt-6">
      <Countdown date={eventDate} />
    </div>
  );
}

export default CountdownTimer;