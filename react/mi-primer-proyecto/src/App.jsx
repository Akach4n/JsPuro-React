import { useState } from 'react';
// import './styles/App.css';
import Pokemons from './components/Pokemons';
import Gatos from './components/Gatos';
import GatosFrase from './components/Gatos-Frase';
import Productos from './components/Productos';
function App() {
  const [seccion, setSeccion] = useState('home');

  return (

    <Productos />


    //     <div className="layout-container">

    //       <header>
    //         <nav className="menu">
    //           <button className={seccion === 'gatos' ? 'active' : ''} onClick={() => setSeccion('gatos')}>Ver Gatitos</button>
    //           <button className={seccion === 'frases' ? 'active' : ''} onClick={() => setSeccion('frases')}>Gatos con Frases</button>
    //           <button className={seccion === 'pokemons' ? 'active' : ''} onClick={() => setSeccion('pokemons')}>Pokémons</button>
    //           <button className={seccion === 'productos' ? 'active' : ''} onClick={() => setSeccion('productos')}>Productos</button>
    //         </nav>
    //       </header>
    //       <main>
    //         <section className="contenido">
    //           {/* Aquí ocurre la magia del menú */}
    //           {seccion === 'gatos' && <Gatos />}
    //           {seccion === 'frases' && <GatosFrase />}
    //           {seccion === 'pokemons' && <Pokemons />}
    //           {seccion === 'productos' && <Productos />}
    //         </section>
    //       </main>
    //     </div>
  );
}

export default App;






//Hacer lo mismo que el JS puro pero en React, las dos primeras APIs, las del perro y el gato
