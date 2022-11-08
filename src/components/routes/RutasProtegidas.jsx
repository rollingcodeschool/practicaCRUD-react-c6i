import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
  const token = JSON.parse(localStorage.getItem('tokenUsuario')) || null;
//  esta vacio el token
if(!token){
    // si esta vacio
    return <Navigate to={'/login'}></Navigate>
}else{
    // si estamos logueados
    return children;
}
};

export default RutasProtegidas;