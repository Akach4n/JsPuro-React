import { useEffect, useState } from "react";
const API_CAT = 'https://api.thecatapi.com/v1/images/search?size=square';
export default function Gatos() {
    const [imagen,setImagen] = useState(null);
    const [error,setError]= useState(null);

const obtenerGato = async () =>{

    try {
        const respuesta = await fetch(API_CAT);
        if (!respuesta.ok) throw new Error("No encontrado");
        const datos = await respuesta.json();
        setImagen(datos[0].url);
        
    } catch (error) {
        console.error(error.message);
        setError("¡Vaya! No hemos podido cargar el gatito 😭")
    }


}
useEffect (() =>{
    obtenerGato();
},[]);

return (
    <div className="cat-component">
        <h1>Gatito 🐱</h1>
        {error &&
            <p>{error}</p>
        }
        {imagen && 
            <img src={imagen} alt="Una imagen de un gatito random" />
        }
    </div>
)



}