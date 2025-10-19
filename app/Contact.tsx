export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen">
        Ponte en Contacto
      </h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="bg-cardBg p-3 rounded-md text-white outline-none"
        />
        <input
          type="email"
          placeholder="Correo"
          className="bg-cardBg p-3 rounded-md text-white outline-none"
        />
        <textarea
          placeholder="Mensaje"
          className="bg-cardBg p-3 rounded-md text-white outline-none h-32"
        />
        <button className="bg-neonGreen text-black font-semibold py-3 rounded-md hover:bg-lime-400">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
