import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import Registro from "../views/Registro";


const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        />
        <Route
          exact
          path="/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/registro"
          element={
            <Registro ></Registro>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
