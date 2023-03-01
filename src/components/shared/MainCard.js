import PokeCard from "./PokeCard";

const MainCard = (data) => {
  if (data != null) {
    console.log();
  }
  return (
    <div className="MainCard" >
      <h1>POKEDEX</h1>
      <div className="wrapper">
        {data?.data?.map((item) => (
          <PokeCard types="grass" name={item.name} />
        ))}
      </div>
    </div>
  );
};
export default MainCard;
