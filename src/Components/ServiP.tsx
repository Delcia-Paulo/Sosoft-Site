import { FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function ServicosESolucoes() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="servicos">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Serviços e Soluções</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Desenvolvimento Web */}
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
            <p className="text-gray-700">
              Criação de sites e sistemas personalizados com foco em desempenho, segurança e experiência do usuário.
            </p>
          </div>

          {/* Aplicações Mobile */}
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaMobileAlt className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Aplicações Mobile</h3>
            <p className="text-gray-700">
              Soluções móveis para Android e iOS que conectam empresas aos seus clientes de forma prática e moderna.
            </p>
          </div>

          {/* Computação em Nuvem */}
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaCloud className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Computação em Nuvem</h3>
            <p className="text-gray-700">
              Infraestrutura escalável e segura para armazenar, processar e acessar dados de qualquer lugar.
            </p>
          </div>

          {/* Segurança Digital */}
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Segurança Digital</h3>
            <p className="text-gray-700">
              Proteção contra ameaças cibernéticas com soluções de firewall, criptografia e monitoramento.
            </p>
          </div>

          {/* Consultoria e Suporte */}
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaUsers className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Consultoria e Suporte</h3>
            <p className="text-gray-700">
              Acompanhamento técnico e estratégico para garantir o sucesso dos seus projetos digitais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}