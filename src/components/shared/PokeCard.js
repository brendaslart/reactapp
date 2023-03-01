import PokeCardButton from "./PokeButton";
import { useEffect, useState } from "react";
import axios from "axios"; //para hacer las peticiones a la API

const PokeCard = ({ types, name, apiURL }) => {
  const LABELS_AND_TYPE = {
    water: { background: "card-blue" },
    fire: { background: "card-red" },
    grass: { background: "card-green" },
    flying: { background: "card-gray" },
    poison: { background: "card-purple" },
    normal: { background: "card-normal" },
    electric: { background: "card-electric" },
    fairy: { background: "card-fairy" },
    ground: { background: "card-ground" },
  };
  const [pokemonById, setPokemonById] = useState(null); // variable/constante de estado, detalle del tipo y imagenes(sprites) del pokemon

  useEffect(() => {
    // es hook de react que nos permite ejecutar codigo en algun momento del ciclo de vida de nuestro componente
    axios.get(apiURL).then((response) => {
      //extraemos la informacion de un pokemon en especifico, dependiendo de ID
      const pokemonInfo = {
        sprites: response?.data?.sprites,
        types: response?.data?.types,
        id: response?.data?.id,
      };
      setPokemonById(pokemonInfo); //funcion que guarda nuesto objeto con la informacion necesaria en nuestra variable de estado principal.
    });
  }, [apiURL]);
  console.log("pokemonById", pokemonById?.types[0]?.type?.name); //a las propiedades de objetos se acceden mediante un punto por ejemplo pokemonById?.sprites
  return (
    <div className={`${LABELS_AND_TYPE[types]?.background} pokeCard `}>
      {/* esta imagen recibe la imagen frontal del pokemon */}
      <img alt={name} src={pokemonById?.sprites?.front_default} />
      <label className="pokeId">#{pokemonById?.id}</label>
      <label className="pokeId">{name}</label>
      <PokeCardButton type={pokemonById?.types[0]?.type?.name} />
    </div>
  );
};

export default PokeCard;
