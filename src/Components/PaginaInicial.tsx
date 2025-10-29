import { Link } from "react-router-dom";
import video from "../assets/videos/video3.mp4";
import videogif from "../assets/videos/codeGif.mp4";
import arrow from "../imagens/right-arrow.png";
import card from "../imagens/id-card.png";
import dev from "../imagens/code.png";
import cloud from "../imagens/cloud.png";
import circuit from "../imagens/circuit.png";
import Foother from "./Footer/Foother";
import Nav from "./Nav/Nav";

export default function PaginaInicial() {
  return (
    /**Cabeçalho */
    <div className="overflow-y-auto ">
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
            <h1 className=" text-4xl font-extrabold drop-shadow-lg text-container  ">
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

        <h1 className="text-black font-bold items-center justify-center flex mt-10 text-4xl ">
          Nossos Serviços
        </h1>
        <p className=" text-gray-500 text-center  mt-5 ">
          Soluções inovadoras que facilitam e contribuem para o nosso cotidiano
        </p>
        <div className="flex justify-center space-x-10 mt-10 mb-20">
          <div className="bg-white rounded-xl  p-8 shadow-xl  h-auto w-64 h-28 items-center justify-center flex-col flex ">
            <h3 className=" flex flex-col font-bold items-center  justify-center pb-5">
              <img
                src={dev}
                alt="Seta"
                className="inline-block mb-4 h-10 animate-bounce "
              />{" "}
              Desenvolvimento e Programação
            </h3>
            <p className="text-sm text-gray-500  ">
              Criação e manutenção de soluções digitais.
            </p>
            <button className=" border-[#04639b] border-2 hover:bg-[#F19209] hover:text-white hover:border-none p-2 rounded-lg mt-6  ">
              Explore{" "}
            </button>
          </div>
          <div className="bg-white  p-4 rounded-xl shadow-xl w-64 h-28 items-center justify-center flex-col h-auto   flex ">
            <h3 className=" flex items-center flex-col  font-bold pb-5 justify-center">
              <img
                src={card}
                alt="Seta"
                className="inline-block mb-4 h-10 animate-bounce "
              />{" "}
              Criação de cartões
            </h3>
            <p className="text-sm text-gray-500  ">
              Criação de cartões de identificação altamente modernos com códigos
              QR que se auto identificam.
            </p>
            <button className="border-[#04639b] border-2 hover:bg-[#F19209] hover:text-white hover:border-none p-2 rounded-lg mt-6  ">
              Explore
            </button>
          </div>
          <div className="bg-white  p-4 rounded-xl shadow-xl w-64 h-28 items-center justify-center flex-col h-auto   flex ">
            <h3 className=" flex items-center flex-col font-bold pb-5 justify-center">
              <img
                src={circuit}
                alt="Seta"
                className="inline-block mb-4 h-10 animate-bounce "
              />{" "}
              Infraestrutura e Redes
            </h3>
            <p className="text-sm text-gray-500   ">
              Parte técnica e física da tecnologia.
            </p>
            <button className="border-[#04639b] border-2 hover:bg-[#F19209] hover:text-white hover:border-none justify-end flex items-end p-2 rounded-lg mt-6  ">
              Explore
            </button>
          </div>
          <div className="bg-white  p-4 rounded-xl shadow-xl w-64 h-28 items-center justify-center flex-col h-auto   flex ">
            <h3 className=" flex items-center flex-col font-bold pb-5 justify-center">
              <img
                src={cloud}
                alt="Seta"
                className="inline-block mb-4 h-10 animate-bounce "
              />{" "}
              Serviços em nuvem
            </h3>
            <p className="text-sm text-gray-500  ">
              Tecnologias modernas de armazenamento e gestão online.
            </p>
            <button className="border-[#04639b] border-2 hover:bg-[#F19209] hover:text-white hover:border-none p-2 rounded-lg mt-6  ">
              Explore
            </button>
          </div>
        </div>
        <div className="items-center justify-center flex mt-10 mb-40">
          <Link to="/Serviços">
            <button className="bg-[#F19209] p-4 shadow-lg rounded-xl hover:bg-yellow-400 hover:font-semibold text-white ">
              Ver mais
            </button>
          </Link>
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
          <Link to="/Contacto">
            <button className="bg-[#F19209] p-4 shadow-lg rounded-xl text-lg hover:bg-yellow-400 hover:font-semibold text-white ">
              Peça um orçamento
              <img
                src={arrow}
                alt="Seta"
                className="inline-block ml-2 animate-bounce "
              />
            </button>
          </Link>
        </div>
      </div>
      <Foother></Foother>
    </div>
  );
}
