import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/PaginaInicial">Início</Link>
      <Link to="/Portifolio">Portfólio</Link>
      <Link to="/Contato">Contato</Link>
      <Link to="/Sobre">Sobre</Link>
    </nav>
  );
}