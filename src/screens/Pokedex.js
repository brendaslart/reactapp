import MainCard from "../components/shared/MainCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
      .then((response) => {
       setPokemons(response.data.results);
      });
  }, []);
 
return <MainCard data={pokemons} />
};

export default Pokedex;
