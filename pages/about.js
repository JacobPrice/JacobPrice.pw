import ParticlesAnimation from "../components/ParticlesAnimation";

export default function About() {
  return (
    <div className="flex flex-col mt-10 layout">
      <h1 className="text-4xl pb-1">About</h1>
      <div className="h-1 w-auto bg-gradient-to-r from-teal-300 to-teal-50"></div>
      <p className="mt-5">Coming Soon! I'm currently working on this page.</p>
      <ParticlesAnimation />
    </div>
  );
}
