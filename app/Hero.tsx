export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/grid-bg.svg')] bg-cover">
      <h1 className="text-5xl md:text-6xl font-extrabold text-neonGreen leading-tight">
        Welcome <br /> to my <br /> portfolio
      </h1>
      <p className="mt-4 text-lg text-white/80">Arianna Hernandez</p>
    </section>
  );
}
