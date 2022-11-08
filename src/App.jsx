import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio'
import Administrador from './components/views/Administrador'
import Error404 from './components/views/Error404'
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import { useState } from 'react';

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);


  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>} />
          {/* <Route exact path='/footer' element={<Footer></Footer>} /> */}
          <Route
          exact
          path="/administrar/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/detalle-producto/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route
          exact
          path="/registro"
          element={<Registro setUsuarioLogueado={setUsuarioLogueado}></Registro>}
        ></Route>
          <Route path='*' element={<Error404></Error404>} />
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
