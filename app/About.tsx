export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-cardBg flex flex-col md:flex-row items-center gap-10"
    >
      <div className="w-48 h-48 bg-gray-800 rounded-full" />
      <div>
        <h2 className="text-3xl font-bold mb-4 text-neonGreen">Sobre Mí</h2>
        <p className="text-white/80 max-w-2xl">
          Soy una desarrolladora apasionada por crear interfaces atractivas y
          funcionales...
        </p>
      </div>
    </section>
  );
}
