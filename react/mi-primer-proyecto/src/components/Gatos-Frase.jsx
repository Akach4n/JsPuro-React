import { useEffect, useState } from "react";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_ENDPOINT_IMAGE_URL = (words) =>
	`https://cataas.com/cat/says/${words}?fontColor=red&type=square&fontSize=20`;

export default function GatosFrase() {
	const [frase, setFrase] = useState(null);
	const [foto, setFoto] = useState(null);
	const [error, setError] = useState(null);

	const obtenerDatos = async () => {
		try {
			const respuesta = await fetch(CAT_ENDPOINT_RANDOM_FACT);
			const datos = await respuesta.json();

			const { fact: nuevaFact } = datos;
			setFrase(nuevaFact);

			const primeras_tres_palabras = nuevaFact.split(' ', 3).join(' ');

			setFoto(CAT_ENDPOINT_IMAGE_URL(primeras_tres_palabras));
		} catch (error) {
			console.error(error.message);
			setError("¡Vaya! No hemos podido cargar el gatito con su frase 😭");
		}
	};

	useEffect(() => {
		obtenerDatos();
	}, []);


	return (
		<div className="cat-fact-component">
			<h1>
				A continuación verá una frase y una imagen de un gatito con las 3
				primeras palabras de la frase
			</h1>
			{error && <p>{error}</p>}

			{frase && <p>{frase}</p>}
			{foto && <img src={foto} width={400} alt="Foto de un gato" />}
		</div>
	);
}
