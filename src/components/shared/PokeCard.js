import PokeCardButton from "./PokeButton";

const PokeCard = ({ types }) => {
    const LABELS_AND_TYPE = {
        water: {background: "card-blue"},
        fire: {background: "card-red"},
        grass: {background: "card-green"},
        flying: {background: "card-gray"},
        poison: {background: "card-purple"}
         
      };

      return(
        <div className={`${LABELS_AND_TYPE[types]?.background} pokeCard `} >
            <image>imagen</image>
            <label className="pokeId">#001</label>
            <label className="pokeId">Bulbasaur</label>
            <PokeCardButton type={types}/>
        </div>
        
      );
      
};

export default PokeCard;