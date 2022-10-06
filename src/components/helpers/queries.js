//archivo que nos siver para hacer las consultas a la api (json-server)

const URL ='http://localhost:3004/productos';

// peticion GET que trae todos los productos
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