export default function Projetos() {
  const projetos = [
    { nome: "Portal IPIL", descricao: "O Portal do IPIL é uma plataforma digital que facilita a gestão da vida académica no Instituto Politécnico Industrial de Luanda (IPIL).." },
  ]

  return (
    <section className="py-20 px-6 text-white animate-fade-in" id="projetos">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#101010]">Projetos Realizados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((p, i) => (
            <div key={i} className="bg-[#2B8CAE] p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{p.nome}</h3>
              <p className="text-sm">{p.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}