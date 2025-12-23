import "../styles/Productos.css"
import { useState, useEffect } from "react";

const PRODUCTO_URL = "http://localhost:8080/api/v1/productos";

export default function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {

        const respuesta = await fetch(PRODUCTO_URL);
        if (!respuesta.ok) throw new Error("No encontrado");
        const datos = await respuesta.json();
        setProductos(datos);


    }
    return (
        <main className="contenedor-productos">
            <h2>Inventario de Productos</h2>
            <ul className="lista-productos">
                {productos.map((producto) => (
                    <li key={producto.id || producto.nombre} className="producto-item">
                        <span className="nombre">{producto.nombre}</span>
                        <span className="precio">{producto.precio}€</span>
                    </li>
                ))}
            </ul>
        </main>
    );

}