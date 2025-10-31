    import SobrePort from '../imagens/SobrePort.png'
    export default function SobreP() {
  return (
    <section className="py-20 px-6 bg-white" id="sobre">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-[#2B8CAE]">
          <h2 className="text-4xl font-bold mb-6">Sobre a Sosoft</h2>
          <p className="text-lg text-gray-800 mb-4">
            A <strong>Sosoft</strong> é uma empresa angolana com profundo conhecimento do mundo tecnológico e do mercado local.
            Atuamos com transparência, rigor e ética, desenvolvendo soluções sob medida para empresas que buscam inovação e crescimento.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>5 anos de experiência</li>
            <li>20 colaboradores</li>
            <li>10projetos realizados</li>
            <li>Atuação em múltiplos setores: financeiro, público, energia, telecom</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src={SobrePort}
            alt="Ilustração tecnológica Sosoft"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}