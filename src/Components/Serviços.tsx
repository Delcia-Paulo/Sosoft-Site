import card from "../imagens/id-card.png";
import dev from "../imagens/code.png";
import cloud from "../imagens/cloud.png";
import circuit from "../imagens/circuit.png";
import design from "../imagens/design.png";
import support from "../imagens/support.png";


import Nav from "./Nav/Nav";
export default function Serviços() {
  return (
    <div className="overflow-y-auto">
      <Nav></Nav>

      <div className="flex justify-center items-center space-y-8 space-x-10 mt-10 mb-20 flex-col  ">
        <div className=" flex  gap-4">
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
          </div>
        </div>
        <div className=" flex  gap-4">
          <div className="bg-white rounded-xl  p-8 shadow-xl  h-auto w-64 h-28 items-center justify-center flex-col flex ">
            <h3 className=" flex flex-col font-bold items-center  justify-center pb-5">
              <img
                src={support}
                alt="Seta"
                className="inline-block mb-4 h-10 animate-bounce "
              />{" "}
              Consultoria e Suporte Técnico
            </h3>
            <p className="text-sm text-gray-500  ">
              Ajudar empresas e pessoas a resolver problemas de TI.
            </p>
          </div>
          <div className="bg-white  p-4 rounded-xl shadow-xl w-64 h-28 items-center justify-center flex-col h-auto   flex ">
            <h3 className=" flex items-center flex-col  font-bold pb-5 justify-center">
              <img
                src={design}
                alt="Seta"
                className="inline-block mb-4 h-10 animate-bounce "
              />{" "}
              Design e Identidade Visual
            </h3>
            <p className="text-sm text-gray-500  ">
              Parte criativa e visual dos serviços.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
