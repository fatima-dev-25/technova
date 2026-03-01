import ParticleBackground from "../components/ParticleBackground";
import StarField from "../components/StarField";
import CountdownTimer from "../components/CountdownTimer";
import PageWrapper from "../components/PageWrapper";

function Home() {
  return (
    <PageWrapper>
      <div className="h-screen flex flex-col justify-center items-center relative text-white">
        <StarField />
        <ParticleBackground />

        <h1 className="text-7xl font-extrabold text-blue-400 tracking-widest animate-pulse">
          TECHNOVA
        </h1>

        <p className="mt-4 text-gray-300 text-xl">
          Enter The Future Of Innovation
        </p>

        <CountdownTimer />

        <div className="mt-10 w-[600px] h-[200px] glass neon-border rounded-xl" />
      </div>
    </PageWrapper>
  );
}

export default Home;