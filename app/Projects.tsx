const projects = [
  { title: "Título del Proyecto 1", img: "/p1.jpg" },
  { title: "Título del Proyecto 2", img: "/p2.jpg" },
  { title: "Título del Proyecto 3", img: "/p3.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen">
        Proyectos Destacados
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-cardBg p-4 rounded-xl shadow-lg">
            <div className="h-40 bg-gray-700 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <button className="px-4 py-2 bg-neonGreen text-black rounded-md font-semibold hover:bg-lime-400">
              Ver Proyecto
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
