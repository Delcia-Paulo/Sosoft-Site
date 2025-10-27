import fundo from "../imagens/fundo3.png"
import { Link } from "react-router-dom";
import icontop from "../imagens/icontop.png";

export default function PaginaInicial () {
    
    return(
      
    
        /**Cabeçalho */
    <div className="overflow-y-auto ">
      <div className="fixed w-full bg-[blue-950/80] z-[50]  ">
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

      <div
        className="  relative w-full p-4 bg-cover h-[100vh] bg-center animate-slow-zoom  "
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70 "></div>
        <div className="realtive z-10 flex flex-col  items-start justify-center h-full text-center text-white  px-4">
          <h1 className=" text-5xl font-semibold drop-shadow-lg animate-pulse animate-bounce ">Inovação digital ao  alcance
             da sua empresa</h1>
            <div className="drop-shadow-lg mb-10 text-gray-300 text-lg"> <p> Sua satisfação é o nosso padrão, então vamos juntos automatizar, crescer e evoluir</p></div>
             <button className="bg-yellow-500 hover:bg-yellow-400 hover:text-white hover:font-semibold rounded-xl drop-shadow-lg text-black p-3">Explore nossos Serviços</button>
        </div>
      </div>

      <h1 className="text-black font-bold items-center justify-center flex mt-10 text-4xl ">
        Nossos Serviços
      </h1>
      <p className=" text-gray-500 text-center  mt-5 ">
        Soluções inovadoras que facilitam e contribuem para o nosso cotidiano
      </p>
      <div className="flex justify-center space-x-2 mt-10 mb-20">
        <div className="bg-white  border-blue-900 border p-4 shadow-xl  h-auto w-64 h-28 items-center justify-center flex-col flex ">
         
            <h3 className=" flex font-bold items-center justify-center pb-5">
              Desenvolvimento
            </h3>
            <p  className="text-sm text-gray-500 ">Criamos sites e plataformas para impulsionar o seu futuro</p>
            <button className="bg-yellow-500 text-white p-2 rounded-lg mt-6  ">Explore os serviços</button>
        </div>
        <div className="bg-white  border-blue-900 p-4 border shadow-xl w-64 h-28 items-center justify-center flex-col h-auto   flex " >
          
            <h3 className=" flex items-center  font-bold pb-5 justify-center">
              Criação de cartões
            </h3>
              <p  className="text-sm text-gray-500 ">Criamos sites e plataformas para impulsionar o seu futuro</p>
            <button className="bg-yellow-500 text-white p-2 rounded-lg mt-6  ">Explore os serviços</button>
         
        </div>
      </div>
      <div className="items-center justify-center flex mt-10 mb-10">
        <button className="bg-yellow-500 p-4  rounded-xl hover:bg-yellow-400 hover:font-semibold text-white ">
          Peça um orçamento
        </button>
      </div>

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
        </div >
       
    )
}