const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-cardBg">
      <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen">
        Habilidades
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 bg-black rounded-xl border border-neonGreen text-white font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
