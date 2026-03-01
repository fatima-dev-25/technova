import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 80 },
          color: { value: "#0ea5e9" },
          links: {
            enable: true,
            color: "#0ea5e9",
          },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticleBackground;