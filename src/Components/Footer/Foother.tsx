export default function Foother() {
  return (
    <div>
      <footer className="bg-[#2B8CAE] text-white  w-full ">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-white cursor-default">Sosoft</h2>
            <p className="text-white text-sm mt-4 leading-relaxed cursor-default">
              Soluções inovadoras que facilitam e contribuem para o nosso
              cotidiano
            </p>
            <div></div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 cursor-default">Navegação</h3>
            <ol className="space-y-2 ">
              <li className="hover:text-[#F19209] transition-colors duration-700 cursor-pointer">
                Início
              </li>
              <li className="hover:text-[#F19209] transition-colors duration-700 cursor-pointer">
                Serviços
              </li>
              <li className="hover:text-[#F19209] transition-colors duration-700 cursor-pointer">
                Sobre
              </li>
              <li className="hover:text-[#F19209] transition-colors duration-700 cursor-pointer">
                Portfólio
              </li>
              <li className="hover:text-[#F19209] transition-colors duration-700 cursor-pointer">
                Contacto
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 cursor-default">Serviços</h3>
            <ol className="space-y-2">
              <li className="hover:text-[#F19209] transition-colors  duraction-700 cursor-pointer">
                Desenvolvimento
              </li>

              <li className="hover:text-[#F19209] transition-colors duraction-700 cursor-pointer">
                Criação de cartões de identificação{" "}
              </li>
            </ol>
          </div>
          <div>
            <h3
              id="Contacto"
              className=" text-lg font-semibold text-white mb-4 cursor-default"
            >
              Contacto
            </h3>
            <ol className="space-y-2">
              <li className="hover:text-[#F19209] transition-colors duraction-700 cursor-pointer">
                Tel.: +244 942 031 240
              </li>
              <li className="hover:text-[#F19209] transition-colors duraction-700 cursor-pointer">
                Email: geral@sosoft.ao
              </li>
            </ol>
          </div>
        </div>

        <p className="text-sm items-center flex justify-center pb-10 cursor-default ">
          © 2025 Sosoft. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
