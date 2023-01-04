import Image from "../Image";
import estrella from "../../assets/estrella.png";


const Title3 = (pops) => {
  return (
    <div className="title3">
      <div className="tickets-block">
        <h1>TICKETS</h1>
        <Image className="star" src={estrella} />
      </div>
    </div>
  );
};
export default Title3;
