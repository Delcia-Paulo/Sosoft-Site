import { Link } from "react-router-dom";
import iconNav from "./IconNav.png";
export default function Nav() {
  return (
    <div className="fixed w-full transparent-bg z-[50]  ">
      <nav className="flex  sm:items-center sm:justify-between  px-6  top-0  ">
       <Link to="/PaginaInicial">
        <img
          src={iconNav}
          alt="Sosoft Logo"
          className="h-24 w-32 object-contain"
        />
       </Link>
        <div className="flex  gap-4">
          <Link
            to="/PaginaInicial"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Início
          </Link>

          <Link
            to="/Serviços"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Serviços
          </Link>
          <Link
            to="/Sobre"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Sobre Nós
          </Link>
          <Link
            to="/Portifolio"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Portfólio
          </Link>
          <Link
            to="/Contacto"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Contacto
          </Link>
          <button className=" hover:bg-orange-500/90 px-3 py-1 rounded-md bg-[#F19209] text-white hover:font-medium">
            Fale conosco
          </button>
        </div>
      </nav>
    </div>
  );
}
