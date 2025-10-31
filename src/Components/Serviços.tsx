import { Code, IdCard, Cpu, Cloud, Laptop, Wallpaper } from "lucide-react";



export default function Serviços() {
  return (
    <div className="overflow-y-auto sm:ovverflow-none">
     

      <div className="flex   justify-center items-center space-y-8 space-x-10 mt-10 mb-20 flex-col animate-fade-in   ">
        <div className=" flex flex-col sm:flex-row  gap-4 ">
          <div className="group bg-white rounded-xl  p-8 shadow-xl  h-auto w-64  items-center  justify-center flex-col flex transition-transform duration-300 hover:scale-105 ">
            <h3 className=" flex flex-col font-bold items-center  justify-center pb-5">
                <Code size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></Code>
                
              Desenvolvimento e Programação
            </h3>
            <p className="text-sm text-gray-500  ">
              Criação e manutenção de soluções digitais.
            </p>
          </div>
          <div className="group bg-white  p-8 rounded-xl shadow-xl w-64 items-center justify-center flex-col flex  transition-transform duration-300 hover:scale-105">
            <h3 className=" flex items-center flex-col  font-bold pb-5 justify-center">
              <IdCard size={48}  className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></IdCard>
               
              
              Criação de cartões
            </h3>
            <p className="text-sm text-gray-500  ">
              Criação de cartões de identificação altamente modernos com códigos
              QR que se auto identificam.
            </p>
          </div>
          <div className="group bg-white  p-4 rounded-xl shadow-xl w-64 items-center justify-center flex-col h-auto   flex transition-transform duration-300 hover:scale-105 ">
            <h3 className=" flex items-center flex-col font-bold pb-5 justify-center">
              <Cpu size={45} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6 "></Cpu>
                
            
              Infraestrutura e Redes
            </h3>
            <p className="text-sm text-gray-500   ">
              Parte técnica e física da tecnologia.
            </p>
          </div>
          <div className="group bg-white  p-4 rounded-xl shadow-xl w-64 items-center justify-center flex-col h-auto   flex transition-transform duration-300 hover:scale-105 ">
            <h3 className=" flex items-center flex-col font-bold pb-5 justify-center">
              <Cloud size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform group-hover:rotate-6 "></Cloud>
              Serviços em nuvem
            </h3>
            <p className="text-sm text-gray-500  ">
              Tecnologias modernas de armazenamento e gestão online.
            </p>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row  gap-4">
          <div className="group bg-white rounded-xl  p-8 shadow-xl  h-auto w-64 items-center justify-center flex-col flex transition-transform duration-300 hover:scale-105 ">
            <h3 className=" flex flex-col font-bold items-center  justify-center pb-5">
             <Laptop size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></Laptop>
              Consultoria e Suporte Técnico
            </h3>
            <p className="text-sm text-gray-500  ">
              Ajudar empresas e pessoas a resolver problemas de TI.
            </p>
          </div>
          <div className="group bg-white  p-4 rounded-xl shadow-xl w-64 items-center justify-center flex-col h-auto   flex transition-transform duration-300 hover:scale-105">
            <h3 className=" flex items-center flex-col  font-bold pb-5 justify-center">
             <Wallpaper size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></Wallpaper>
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
