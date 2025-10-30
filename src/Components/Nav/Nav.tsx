import { Link } from "react-router-dom";
import iconNav from "./IconNav.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Nav() {
  const [menuOpen, setMenuOpen] =useState(false);
  function OpenMenu (){
    setMenuOpen(true)
  }
  function CloseMenu (){
    setMenuOpen(false)
  }
  return (
    /**Menu */
    <header className="fixed w-full scroll-smooth  transparent-bg z-[50]  ">
      <nav className="flex  items-center justify-between px-6      ">
        <Link to="/PaginaInicial">
          <img
            src={iconNav}
            alt="Sosoft Logo"
            className="h-20 object-contain"
          />
        </Link>
        <div className="hidden  md:flex gap-4">
          <Link
            to="/PaginaInicial"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Início
          </Link>

          <a
            href="#Serviços"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Serviços
          </a>
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
          <a
            href="#Contacto"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Contacto
          </a>
          <button className=" hover:bg-orange-500/90 px-3 py-1 rounded-md bg-[#F19209] text-white hover:font-medium">
            Fale conosco
          </button>
        </div>
          <button
          className="md:hidden "
          onClick={OpenMenu} 
        >
           <Menu size={28} className="text-[#F19209]" />
        </button>
      </nav>
     {menuOpen && (
      
      <div className="md:hidden bg-[#2B8CAE] p-12 w-64 justify-center items-center top-0 right-0 h-screen shadow-lg z-50 transition-transform duration-300 flex backdrop-blur-lg">

<div className="flex   flex-col justify-items-end items-center space-y-6 gap-6 text-lg">
  <div className="flex  top-0 "><X className="text-[#F19209] " onClick={CloseMenu}></X></div>

   <Link
            to="/PaginaInicial"
            onClick={CloseMenu}
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Início
          </Link>

          <a
            href="#Serviços"
            onClick={CloseMenu}
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Serviços
          </a>
          <Link
            to="/Sobre"
            onClick={CloseMenu}
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Sobre Nós
          </Link>
          <Link
            to="/Portifolio"
            onClick={CloseMenu}
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Portfólio
          </Link>
          <a
            href="#Contacto"
            onClick={CloseMenu}
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Contacto
          </a>
</div>
      </div>
    )}
    </header>
  );
}
