import { useNavigate } from "react-router-dom";

const PokeCardButton = ({ type }) => {
  const location = useNavigate();

  const LABELS_AND_COLORS = {
    fire: { label: "FIRE", colorClass: "pokered" },
    water: { label: "WATER", colorClass: "pokeblue" },
    grass: { label: "GRASS", colorClass: "pokegreen" },
    poison: { label: "POISON", colorClass: "pokepurple" },
    flying: { label: "FLYING", colorClass: "pokegray" },
    normal: { label: "NORMAL", colorClass: "pokeNormal" },
    electric: { label: "ELECTRIC", colorClass: "pokeElectric" },
    fairy: { label: "FAIRY", colorClass: "pokeFairy" },
    ground: { label: "GROUND", colorClass: "pokeground" },
    
  };

  function handleClick() {
    location("/Pokedex");
    console.log("entrando");
  }

  return (
    <button
      className={`${LABELS_AND_COLORS[type]?.colorClass}`}
      onClick={() => handleClick()}
    >
      {LABELS_AND_COLORS[type]?.label}
    </button>
  );
};

export default PokeCardButton;
