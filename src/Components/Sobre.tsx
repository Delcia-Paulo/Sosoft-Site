import icontop from "../imagens/icontop.png";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
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

  <section className="min-h-screen bg-white text-gray-800 mt-32 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Sobre a Sosoft</h1>
        <p className="text-lg mb-6">
          A <strong>Sosoft</strong> é uma empresa angolana especializada em soluções digitais para gestão institucional.
          Nosso foco é modernizar instituições públicas e privadas com sistemas personalizados, seguros e escaláveis.
        </p>
        <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
          <li>Transformação digital na educação e administração pública</li>
          <li>Criação de plataformas inteligentes e inovadoras</li>
          <li>Promoção da cultura digital e inclusão tecnológica</li>
        </ul>
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
  );
}
