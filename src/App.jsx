import { BrowserRouter, Routes, Route } from "react-router";

import Nav from "./assets/componentes/navbar";
import Contact from "./assets/pages/CONTACT";
import Home from "./assets/pages/Home";
import MaterialDetail from "./assets/componentes/Details";
import ProductoList from "./assets/pages/Productos";
import ServisDetail from "./assets/componentes/DetailsServis";
import Footer from "./assets/componentes/footer";
import Servicio from "./assets/pages/SERVICIOS";
import About from "./assets/pages/About";
export default function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="flex font-sans relative">
          <div className="w-full">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Productos" element={<ProductoList />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/Servicios" element={<Servicio />} />
              <Route path="/materiales/:id" element={<MaterialDetail />} />
              <Route path="/Servicios/:id" element={<ServisDetail />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
}
