import Nav from "./Nav/Nav";
import Foother from "./Footer/Foother";

export default function Portfolio() {
  const projetos = [
    {
      nome: "EduGest",
      descricao:
        "Sistema de gestão escolar para instituições públicas e privadas.",
    },
    {
      nome: "AdminSoft",
      descricao:
        "Plataforma de gestão administrativa para municípios angolanos.",
    },
    {
      nome: "SmartCity Angola",
      descricao:
        "Projeto piloto para cidades inteligentes com foco em mobilidade e serviços digitais.",
    },
  ];
  return (
    <div className="overflow-y-auto">
      <Nav></Nav>

      <section className="p-8 max-w-4xl mt-32 mb-32 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Portfólio
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{projeto.nome}</h2>
              <p className="text-gray-600">{projeto.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <Foother></Foother>
    </div>
  );
}
