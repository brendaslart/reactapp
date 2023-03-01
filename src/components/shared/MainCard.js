import PokeCard from "./PokeCard";

const MainCard = (data) => {
  if (data != null) {
    console.log();
  }
  console.log(data);
  return (
    <div className="MainCard">
      <h1>POKEDEX</h1>
      <div className="wrapper">
        {data?.data?.map((item) => (
          <PokeCard types="grass" name={item.name} apiURL={item.url} />
        ))}
      </div>
    </div>
  );
};
export default MainCard;
