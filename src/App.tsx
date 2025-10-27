import PaginaInicial from "./Components/PaginaInicial";
import Contacto from "./Components/Contacto"
import Sobre from "./Components/Sobre";
import Portfolio from "./Components/Portifolio";
import React from 'react'
import {  Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    

<Routes>
  
<Route path="/PaginaInicial" element={<PaginaInicial></PaginaInicial>}></Route>
<Route path="/Portifolio" element={<Portfolio></Portfolio>}></Route>
<Route path="/Contacto" element={<Contacto></Contacto>}></Route>
<Route path="/Sobre" element={<Sobre></Sobre>}></Route>
</Routes>

  );
}
