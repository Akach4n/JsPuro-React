import './App.css'
import { useState, useEffect } from 'react';

function App() {
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

export default App;


// import { useEffect, useState } from "react";
// import './app.css'
// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
// //const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWord}'


// export function App() {
//   const [fact, setFact] = useState();
//   const [imageUrl,setImageUrl] = useState();

//   useEffect(() => {
//     fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then(res => res.json())
//     .then(data => {
//         const { fact } = data
//         setFact(fact)

//         const threeFirstWord = fact.split(' ',3).join(' ')
//         console.log(threeFirstWord)

//         fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=black&json=true`)
//           .then(res => res.json())
//           .then(response =>{
//             console.log(response)
//           const { url } = response
//           setImageUrl(`https://cataas.com/cat/says/${threeFirstWord}?size=50&fontColor=red`)
//           })

//     })    
//   },[]);

//   return (
//     <main>
//     <h1>App de gatitos</h1>
//     <section>
//       {fact && <p>{fact}</p>}
//       {imageUrl && <img src={imageUrl} alt={`Imagen sacada de ${fact}`}/>}
//     </section>
      
//     </main>
//   );
// }



// export default App;



//Hacer lo mismo que el JS puro pero en React, las dos primeras APIs, las del perro y el gato