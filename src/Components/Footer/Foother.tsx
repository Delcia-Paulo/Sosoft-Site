export default function Foother() {
  return (
    <div>
      <footer className="bg-[#2B8CAE] text-white  w-full ">
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
            <ol className="space-y-2 ">
              <li className="hover:text-[#F19209]">Início</li>
              <li className="hover:text-[#F19209]">Serviços</li>
              <li className="hover:text-[#F19209]">Sobre</li>
              <li className="hover:text-[#F19209]">Portfólio</li>
              <li className="hover:text-[#F19209]">Contacto</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ol className="space-y-2">
              <li className="hover:text-[#F19209]">Desenvolvimento</li>

              <li className="hover:text-[#F19209]">Criação de cartões de identificação </li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ol className="space-y-2">
              <li className="hover:text-[#F19209]">Tel.: +244 942 031 240</li>

              <li className="hover:text-[#F19209]">
                Bairro Vila Alice No Instituto Politécnico Industrial de
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
