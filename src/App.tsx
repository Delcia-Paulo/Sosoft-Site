import PaginaInicial from "./Components/PaginaInicial";
import Contacto from "./Components/Contacto"
import Sobre from "./Components/Sobre";
import Portfolio from "./Components/Portifolio";

import {  Routes, Route, Navigate } from 'react-router-dom'
import Serviços from "./Components/Serviços";

export default function App() {
  return (
    

<Routes>
  
<Route path="/" element={<Navigate to="/PaginaInicial"/>}></Route>
<Route path="/PaginaInicial" element={<PaginaInicial></PaginaInicial>}></Route>
<Route path="/Portifolio" element={<Portfolio></Portfolio>}></Route>
<Route path="/Contacto" element={<Contacto></Contacto>}></Route>
<Route path="/Sobre" element={<Sobre></Sobre>}></Route>
<Route path="/Serviços" element={<Serviços></Serviços>}></Route>
</Routes>

  );
}
