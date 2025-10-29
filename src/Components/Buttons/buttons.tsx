import { useState } from "react";
import img from "./img2.png"
import { Link } from "react-router-dom";
import close from "./close.png"
export default function Buttons() {
  const [showModal, setShowModal] = useState(false);

  function OpenModal() {
    setShowModal(true);
  }
  function CloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      <button
        onClick={OpenModal}
        className=" border-[#04639b] border-2 hover:bg-[#F19209] hover:text-white hover:border-none p-2 rounded-lg mt-6  "
      >
        Detalhes
      </button>

      {showModal && (

        <div className="transparent-bg-services fixed w-full h-full top-0 left-0 flex items-center justify-start z-50 ">
          <div className=" flex  relative border-[#2B8CAE] border  p-8 overflow-scroll rounded-xl flex-col items-center justify-normal bg-white w-auto h-[60%] mx-auto">
          <div className="absolute top-5 right-4" onClick={CloseModal}><img src={close} alt="Fechar"  /></div>
           <img src={img} className="w-[96%] h-96  mt-10 mb-10 rounded-2xl h-64" alt="" />
            <h1 className="font-bold text-3xl mb-2 ">Desenvolvimento e Programação</h1>
            <p className="text-gray-500 mb-10">Desenvolvemos sites rápidos, responsivos e profissionais que fortalecem a presença digital da sua empresa.</p>
            <ol className="flex text-lg font-semibold p-4 border-t border-gray-400 flex-col">
              <li>- Desenvolvimento de sites institucionais;</li>
              <li>- Criação de sistemas web personalizados; </li>
              <li>- Aplicativos móveis (Android/iOS); </li>
              <li>- Landing pages para campanhas e negócios; </li>
              <li>- Integrações de APIs e automações;</li>
              <li>
                - Lojas virtuais (e-commerce) Manutenção e atualização de
                plataforma
              </li>
              <li></li>
            </ol>
          <Link to="/contacto">
            <button className=" border-[#04639b] border-2 hover:bg-[#F19209] hover:text-white hover:border-none p-2 rounded-lg mt-6  ">
              Contactar
            </button>
          </Link>

          </div>
        </div>
      )}
    </div>
  );
} /*top-0 left-0 w-full h-full flex items-center justify-center z-50*/
