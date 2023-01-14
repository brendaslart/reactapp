const PokeCardButton = ({ type }) => {
  const LABELS_AND_COLORS = {
    fire: { label: "FIRE", colorClass: "pokered" },
    water: { label: "WATER", colorClass: "pokeblue" },
    grass: { label: "GRASS", colorClass: "pokegreen" },
    poison: { label: "POISON", colorClass: "pokepurple" },
    flying: { label: "FLYING", colorClass: "pokegray" },
  };
  return (
    <button className={`${LABELS_AND_COLORS[type]?.colorClass}`}>
      {LABELS_AND_COLORS[type]?.label}
    </button>
  );
};

export default PokeCardButton;
