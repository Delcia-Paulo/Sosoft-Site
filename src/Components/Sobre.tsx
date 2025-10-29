import Nav from "./Nav/Nav";
import Foother from "./Footer/Foother";

export default function Sobre() {
  return (
    <div className="overflow-y-auto">
      <Nav></Nav>

      <section className="min-h-screen bg-white text-gray-800 mt-32 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Sobre a Sosoft
          </h1>
          <p className="text-lg mb-6">
            A <strong>Sosoft</strong> é uma empresa angolana especializada em
            soluções digitais para gestão institucional. Nosso foco é modernizar
            instituições públicas e privadas com sistemas personalizados,
            seguros e escaláveis.
          </p>
          <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
            <li>Transformação digital na educação e administração pública</li>
            <li>Criação de plataformas inteligentes e inovadoras</li>
            <li>Promoção da cultura digital e inclusão tecnológica</li>
          </ul>
        </div>
      </section>

      <Foother></Foother>
    </div>
  );
}
