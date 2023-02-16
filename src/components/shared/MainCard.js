import PokeCard from "./PokeCard";

const MainCard  = () => {

return (
    <div className="MainCard" >
        <h1>POKEDEX</h1>
        <div>
            <PokeCard types="grass" />
        </div>
    </div>
)

}
export default MainCard;