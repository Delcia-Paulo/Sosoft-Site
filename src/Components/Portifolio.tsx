
import Foother from "./Footer/Foother";
import Nav from "./Nav/Nav";
import Projetos from "./Projectos";
export default function Portifolio() {
  return(
    <div className="flex flex-col min-h-screen">
      <Nav/>
      <main className="flex-grow">
      <Projetos/>        </main>

<Foother/> 
      </div>
  )
}
