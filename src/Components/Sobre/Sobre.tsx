import Nav from "../Nav/Nav";
import Foother from "../Footer/Foother";
import foto1 from "./foto_sobre1.svg";
import foto2 from "./foto_sobre2.svg";
import foto3 from "./foto_sobre3.svg";
import foto4 from "./foto_sobre4.svg";
import sosoft_sobre from "./sosoft_sobre.jpeg";

export default function Sobre() {
  return (
    <div className="overflow-y-auto">
      <Nav></Nav>

      <section className="min-h-screen bg-white text-gray-800 mt-32 p-8">
        <h1 className="text-4xl font-bold flex justify-center text-[#F19209] mb-12">
          Sobre Nós
        </h1>
        <video
          className="flex mx-auto w-[50%] h-[50vh] mb-20 shadow-xl border-t-2 border-l-2 border-r-2"
          loop
          muted
          autoPlay
          controls
          poster={sosoft_sobre}
          src=""
        ></video>

        <div className="max-w-4xl justify-between flex gap-10 mx-auto text-center">
          <div className="w-[200%] mb-28 h-64 bg-cover bg-center">
            {" "}
            <img src={foto1} alt="" />
          </div>
          <div>
            <p className="text-lg font-medium">
              {" "}
              <span className="text-[#F19209] font-bold ">A SOSOFT</span> –
              Comércio e Prestação de Serviços, Lda é uma empresa tecnológica
              angolana especializada no desenvolvimento de soluções digitais de
              gestão institucional, com foco na modernização de instituições. A
              SOSOFT actua como parceira estratégica na transformação digital de
              organizações, oferecendo sistemas personalizados, seguros e
              escaláveis, capazes de automatizar processos, reduzir burocracias
              e melhorar a eficiência operacional.
            </p>
          </div>
        </div>
        <div className="max-w-4xl justify-between flex gap-10 mx-auto text-center ">
          <div>
            <p className="text-lg font-medium">
              {" "}
              O principal objetivo da{" "}
              <span className="text-[#F19209] font-bold  ">SOSOFT</span> é
              impulsionar a transformação digital no sector da educação e da
              administração pública, criando soluções tecnológicas adaptadas à
              realidade nacional. A empresa busca simplificar processos,
              melhorar a gestão institucional e aumentar a produtividade através
              da tecnologia.
            </p>
            <div className="flex flex-col text-start font-medium mt-12">
              <p>
                {" "}
                ✔️ Modernizar instituições através de plataformas digitais;
              </p>
              <p>
                ✔️ Promover a eficiência e a transparência nos serviços públicos
                e privados;
              </p>
              <p>
                ✔️ Contribuir para o desenvolvimento tecnológico de Angola,
                formando profissionais competentes e comprometidos com a
                inovação.
              </p>
            </div>
            
          </div>

          <div className="w-[200%] h-64 bg-cover mb-20 bg-center">
            {" "}
            <img src={foto2} alt="" />
          </div>
        </div>
      </section>

      <Foother></Foother>
    </div>
  );
}
