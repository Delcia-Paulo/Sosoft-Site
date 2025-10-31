
import MissaoVisaoValores from "./Missao"
import Nav from "./Nav/Nav"
import SobreP from "./SobreP"
import Projectos from "./Projectos"
import Footer from "./Footer/Foother"
import ServicosESolucoes  from "./ServiP"
export default function Portifolio() {
    return (
      <div className="overflow-y-auto">
        <Nav></Nav>  
        <main className="flex-grow">  
          <SobreP></SobreP>
          <ServicosESolucoes></ServicosESolucoes>
          <Projectos></Projectos>
          <MissaoVisaoValores></MissaoVisaoValores>
        </main>
        <Footer></Footer>
      </div>  
      
    )
}


