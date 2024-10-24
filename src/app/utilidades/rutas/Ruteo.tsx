import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuCrear } from "../../componentes/contenedor/menu/MenuCrear";
import { MenuListar } from "../../componentes/contenedor/menu/MenuListar";
import { MenuAdmin } from "../../componentes/contenedor/menu/MenuAdmin";
import { MenuActualizar } from "../../componentes/contenedor/menu/MenuActualizar";
import { Acerca } from "../../componentes/contenedor/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/mencre" element={<MenuCrear />} />
      <Route path="/menlis" element={<MenuListar />} />
      <Route path="/menadmin" element={<MenuAdmin />} />
      <Route path="/menactu/:codigo" element={<MenuActualizar />} />

      <Route path="/menuacer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
};
