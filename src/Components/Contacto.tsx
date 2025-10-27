import icontop from "../imagens/icontop.png"
import { Link } from "react-router-dom";

export default function Contacto () {
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
     <div
        className="  relative w-full p-4 absolute h-80 bg-blue-900/70  animate-slow-zoom  "
        
      >
        
        <div className="realtive z-10 flex flex-col  items-center justify-center h-full text-center text-white mt-10 px-4">
          <h1 className=" text-5xl font-semibold drop-shadow-lg animate-pulse animate-bounce ">Contacte-nos</h1>
    <div className="drop-shadow-lg mb-10 text-gray-300 text-lg"> <p>Sinta-se a vontade, estamos a sua disposição </p></div>
            
        </div>
      </div>

 
     <div className="mx-auto h-auto ">
         <form action="get" className="mx-auto h-auto mt-[10%] border-2 mb-40 w-[30%] space-y-5 p-4 flex flex-col shadow-md rounded-xl">
        <label htmlFor="name">Nome</label>
        <input type="text" name="" id=""  className="border border-gray-200 p-2 rounded-lg"/>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="" className="border border-gray-200 p-2 rounded-lg"/>
        <label htmlFor="summer">Assunto</label>
        <input type="text" name="" id=""className="border border-gray-200 p-2 rounded-lg" />
        <label htmlFor="messge">Messagem</label>
        <textarea name="" id="" className="border border-gray-200 p-2 rounded-lg "></textarea>
        <button  className="bg-yellow-500 p-2 rounded-lg">Enviar Messagem </button>
      </form>
     
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
        </div>
    )
}