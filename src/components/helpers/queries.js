//archivo que nos siver para hacer las consultas a la api (json-server)

const URL ='http://localhost:3004/productos';

// tipos de peticiones
// peticion GET que trae todos los productos o un producto
// peticion POST, crear un producto, login
// peticion DELETE, peticion para borrar
// peticion PUT, peticion que pide modificar un producto


export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaProdutos = await respuesta.json()
        // console.log(listaProdutos)
        return listaProdutos;
    }catch(error){
        console.log(error);
    }
}