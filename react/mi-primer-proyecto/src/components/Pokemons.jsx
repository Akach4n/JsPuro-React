import "../styles/Pokemon.css";
import { useState, useEffect } from 'react';

export default function Pokemons() {
  const [pokemon, setPokemon] = useState(null);
  const [lista, setLista] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cargarIniciales = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const datos = await resp.json();
      setLista(datos.results);
    };
    cargarIniciales();
  }, []);

  const buscarPokemon = async (nombre) => {
    try {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase().trim()}`);
      if (!resp.ok) throw new Error("No encontrado");
      const datos = await resp.json();
      setPokemon(datos);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    /* 1. Añadimos la clase app-container */
    <div className="app-container">
      <h1>PokeBuscador React</h1>
      
      {/* 2. Envolvemos input y botón en el div .buscador */}
      <div className="buscador">
        <input 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          placeholder="Nombre del pokemon"
        />
        <button onClick={() => buscarPokemon(busqueda)}>Buscar</button>
      </div>

      {pokemon && (
        <div id="resultado">
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt="pokemon" width="150" />
        </div>
      )}

      <hr />

      <h3>Sugerencias:</h3>
      {/* 3. Añadimos la clase .ul-pokemons y quitamos los estilos en línea del li */}
      <ul className="ul-pokemons">
          {lista.map((poki) =>(
           <li
              key={poki.name}
              onClick={() => buscarPokemon(poki.name)}
              >
                {poki.name}
              </li>
            ))}
      </ul>
    </div>
  );
}
