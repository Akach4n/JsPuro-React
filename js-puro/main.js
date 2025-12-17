// function miFuncion (parametro){
//     return "Esto es una función " + parametro;
// }


// class MiClase{
//     constructor(nombre,apellidos){
//         this.nombre = nombre;
//         this.apellidos = apellidos;
//     }


//     //Método
//     concatenarNombreApellidoTexto(texto) {
//         return `Hola ${this.nombre} ${this.apellidos} ${texto}`;
//     }
//     //Getter
//     get nombreApellidos(){
//         return `Hola ${this.nombre} ${this.apellidos}`;
//     }


// }

// console.log(miFuncion("prueba"));
// const usuario = new MiClase("Juan", "Pérez");
// console.log(usuario.concatenarNombreApellidoTexto("sisoy"));
// console.log(usuario.nombreApellidos);

// const usuario = { nombre: 'Elena', edad: 28, ciudad: 'Madrid' };

// // Declaras las variables usando las llaves {} y deben coincidir con
// // las claves del objeto.
// const { nombre, edad } = usuario;

// console.log(nombre); // 'Elena'
// console.log(edad);   // 28




// class Time {
//     constructor(year, month, day, hour, minute) {
//         this.year = year;
//         this.month = month;
//         this.day = day;
//         this.hour = hour;
//         this.minute = minute;
//     }

//     // En lugar de una propiedad fija, calculamos el día de la semana
//     get dayOfWeek() {
//         const date = new Date(this.year, this.month - 1, this.day);
//         const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         return days[date.getDay()];
//     }

//     // Calculamos el progreso del día dinámicamente
//     get dayProgress() {
//         const totalMinutesInDay = 24 * 60;
//         const currentMinutes = (this.hour * 60) + this.minute;
//         return (currentMinutes / totalMinutesInDay) * 100;
//     }
// }

// const miHora = new Time(2025, 12, 17, 15, 27);
// console.log(miHora.dayOfWeek); // "Wednesday" (calculado al momento)
// console.log(miHora.dayProgress); // 64.375
// console.log(typeof(Date)); // 64.375



// 1. Llamamos a la URL
fetch('https://api.thecatapi.com/v1/images/search')
    .then(respuesta => {
        // 2. Convertimos la respuesta a un objeto JS (JSON)
        return respuesta.json(); 
    })
    .then(datos => {
        // 3. Aquí ya tenemos el objeto para usarlo
        console.log("Url api de gatos:",datos[0].url);

    })
    .catch(error => {
        // 4. Por si internet falla o la URL no existe
        console.error("¡Algo salió mal!", error);
    });

 async function ponerGato() {
    const respuesta =  await fetch('https://api.thecatapi.com/v1/images/search');
    const datos =  await respuesta.json();

    // 1. Buscamos el lugar donde poner la imagen
    const contenedor = document.querySelector(".texto");

    // 2. Metemos la imagen usando la URL del primer gato [0]
    // Nota: <img> es una etiqueta que no necesita cierre </img>
    contenedor.innerHTML = `<img src="${datos[0].url}" width="300" />`;
}

ponerGato();




async function ponerPerro(){
    
    try {
        
        const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");

        if(!respuesta.ok){
            throw new Error("No se pudo comunicar con la API");
        }
        const datos = await respuesta.json();
    
    
        const contenedor = document.querySelector(".texto2")
    
    
        contenedor.innerHTML = `<img src="${datos.message}" width="300" />`;
    
    } catch (error) {
        console.error("Error:", error.message)
        contenedor.innerHTML = `<p>Error: No pudimos cargar al perrito. 🐶🚫</p>`;
    }
}


ponerPerro();


async function obtenerTareas() {
    const docu = document.querySelector(".ul-padre");

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
        
        if (!respuesta.ok) throw new Error("Error al obtener los datos");

        const datos = await respuesta.json();

        datos.forEach(tarea => {
            const li = document.createElement("li");
            li.textContent = tarea.title;
            li.style.color = tarea.completed ? "green" : "red";
            docu.appendChild(li);
        });

    } catch (error) {
        docu.innerHTML = `<li>Error: No se pudo cargar la lista ❌</li>`;
        console.error(error);
    }
}

obtenerTareas();


// async function buscarPokemon() {

//     try{
        
//         const docu = document.querySelector("#resultado");

//         const nombrePokemon = document.querySelector("#pokemon-input").value;
//         const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
//         if (!respuesta.ok){
//             docu.innerHTML = "No se ha podido encontrar ese Pokémon";
//         }

//         const datos = await respuesta.json();
        
//         docu.innerHTML = `<img src="${datos.sprites.front_default}" width="200px"/>`; 
//     }catch(error){
//         console.error(error.message);
//         docu.innerHTML = "Error garrafal";
//     }
// }

// document.querySelector("#btn-buscar").addEventListener("click", buscarPokemon);



// async function mostrarPokemons(){
    
//     const docu_lista = document.querySelector(".ul-pokemons");
//     try{
//         const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

//         if (!respuesta.ok) throw new Error("Error al obtener los datos");
//         const datos = await respuesta.json();

//         datos.results.forEach(poke =>{
//             const li = document.createElement("li");
//             li.textContent = poke.name;
//             docu_lista.appendChild(li);
//         });


//     }catch(error){
//         console.error(error.message)
//         docu_lista.innerHTML = `<li>Error: No se pudo cargar la lista ❌</li>`;
//     }
// }
//mostrarPokemons();








