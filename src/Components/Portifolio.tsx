import icontop from "../imagens/icontop.png";
import { Link } from "react-router-dom";


export default function Portfolio (){
    const projetos = [
    {
      nome: "EduGest",
      descricao: "Sistema de gestão escolar para instituições públicas e privadas.",
    },
    {
      nome: "AdminSoft",
      descricao: "Plataforma de gestão administrativa para municípios angolanos.",
    },
    {
      nome: "SmartCity Angola",
      descricao: "Projeto piloto para cidades inteligentes com foco em mobilidade e serviços digitais.",
    },
  ];
    return(
        <div className="overflow-y-auto">
            <div className="fixed w-full bg-blue-950/80 z-[50]  ">
        <nav className="flex  items-center justify-between  px-6 py-3 top-0  ">
            <img src={icontop} alt="Sosoft Logo" className="h-12 w-auto object-contain" />
          <div className="flex  gap-4">
            <Link
              to="/PaginaInicial"
              className="hover:text-yellow-400 font-semibold text-white"
            >
              Início
            </Link>

            <Link
              to="/Serviços"
              className="hover:text-yellow-400 font-semibold text-white"
            >
              Serviços
            </Link>
            <Link
              to="/Sobre"
              className="hover:text-yellow-400 font-semibold text-white"
            >
              Sobre
            </Link>
            <Link
             to="/Portifolio"
              className="hover:text-yellow-400 font-semibold text-white"
            >
              Portfólio
            </Link>
            <Link
              to="/Contacto"
              className="hover:text-yellow-400 font-semibold text-white"
            >
              Contacto
            </Link>

            <button className=" hover:bg-yellow-400 px-3 py-1 rounded-lg bg-yellow-500 hover:text-amber-100">
              Fale conosco
            </button>
          </div>
        </nav>
      </div>
 <section className="p-8 max-w-4xl mt-32 mb-32 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Portfólio</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{projeto.nome}</h2>
            <p className="text-gray-600">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>

      <footer className="bg-blue-950 text-white  w-full ">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Sosoft</h2>
            <p className="text-white text-sm mt-4 leading-relaxed">
              Soluções inovadoras que facilitam e contribuem para o nosso
              cotidiano
            </p>
            <div></div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ol className="space-y-2">
              <li className="">Início</li>
              <li>Serviços</li>
              <li>Sobre</li>
              <li>Portfólio</li>
              <li>Contacto</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ol className="space-y-2">
              <li className="">Desenvolvimento</li>

              <li>Criação de cartões de identificação </li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ol className="space-y-2">
              <li className="">Tel.: +244 9xx xxx xxx</li>

              <li>
                {" "}
                Bairro Vila Alice Junto ao Instituto Politécnico Industrial de
                Luanda – IPIL
              </li>
            </ol>
          </div>
        </div>

        <p className="text-sm items-center flex justify-center pb-10 ">
          © 2025 Sosoft. Todos os direitos reservados.
        </p>
      </footer>
        </div>
    )
}