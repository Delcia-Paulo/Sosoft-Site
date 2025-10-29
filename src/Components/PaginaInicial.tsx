import { Link } from "react-router-dom";
import video from "../assets/videos/video3.mp4";
import videogif from "../assets/videos/codeGif.mp4";
import arrow from "../imagens/right-arrow.png";
import Foother from "./Footer/Foother";
import Nav from "./Nav/Nav";
import Serviços from "./Serviços";

export default function PaginaInicial() {
  return (
    /**Cabeçalho */
    <div className="overflow-y-auto scroll-smooth ">
      <Nav></Nav>
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className="relative z-10 flex flex-col  items-center justify-center h-full text-center text-white  px-4">
            <h1 className="  text-4xl font-extrabold drop-shadow-lg text-container  ">
              Tecnologia que Conecta Você ao{" "}
              <span className="text-[#F19209]">Futuro</span>
            </h1>
            <div className="drop-shadow-lg mb-10  text-white font-semibold text-xl mt-6">
              {" "}
              <p>
                {" "}
                Sua satisfação é o nosso padrão, então vamos juntos automatizar,
                crescer e evoluir
              </p>
            </div>
            <Link to="/Serviços">
              <button className="bg-[#F19209] hover:hover:bg-orange-500/90 hover:text-white text-xl hover:font-semibold rounded-xl drop-shadow-lg text-white p-3">
                Explore Nossos Serviços
                <img
                  src={arrow}
                  alt="Seta"
                  className="inline-block ml-2 animate-moveArrow "
                />{" "}
              </button>
            </Link>
          </div>
        </div>

        <h1 id="Serviços" className="text-black font-bold items-center justify-center flex mt-10 text-4xl ">
          Nossos Serviços
        </h1>
        <p className=" text-gray-500 text-center  mt-5 ">
          Soluções inovadoras que facilitam e contribuem para o nosso cotidiano
        </p>
       <div className="mb-10">
        <Serviços></Serviços>
       </div>
        <div className="justify-center flex items-center flex-col">
          <h1 className="font-bold text-4xl">Pronto para viver o resultado?</h1>
          <p className="text-gray-400 text-lg ">
            Entre em contacto connosco e descubra como impulsionamos seu negócio
            com os nossos serviços.
          </p>
        </div>
        <div className="flex  items-center  px-20">
          <video
            autoPlay
            muted
            loop
            className=" w-[64%] h-96 mt-20 mb-20 bg-cover bg-center mx-auto object-cover rounded-xl"
          >
            <source src={videogif} type="video/mp4" />
          </video>

          {/* Texto */}
        </div>
        <h1 className="font-bold items-center justify-center mb-12 flex text-4xl animate-bounce text-[#F19209] hover:text-[#04639b]">
          Contacte-nos!
        </h1>

        <div className="items-center justify-center flex  mb-10">
         
            <button className="bg-[#F19209] p-4 shadow-lg rounded-xl text-lg hover:bg-yellow-400 hover:font-semibold text-white ">
              Peça um orçamento
              <img
                src={arrow}
                alt="Seta"
                className="inline-block ml-2 animate-bounce "
              />
            </button>
       
        </div>
      </div>
      <Foother></Foother>
    </div>
  );
}
