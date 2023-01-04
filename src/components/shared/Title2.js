import Image from "../Image";
import Mujer from "../../assets/mujer.jpg";
import Hercules from "../../assets/hercules.jpg";
import Girasoles from "../../assets/girasoles.jpg";
import Monalisa from "../../assets/monalisa.jpg";
import Beso from "../../assets/beso.jpg";

const Title2 = (props) => {
  return (
    //div padre
    <div className="title">
      <div className="the-museum-block">
        <h1>
          {" "}
          THE MUSEUM <br /> COLLECTIONS{" "}
        </h1>
      </div>

      <div className="imagenes-grupo">
        <div className="first-block">
          <div className="year-block">
            <h2>1855</h2>
          </div>
          <Image className="mujer" src={Mujer} />
          <Image className="hercules" src={Hercules} />
        </div>
        <div className="second-block">
          <div className="second-year-block">
            <h2>1503</h2>
          </div>
          <Image className="girasoles" src={Girasoles} />
          <Image className="monalisa" src={Monalisa} />
          <Image className="beso" src={Beso} />
        </div>
      </div>
    </div>
  );
};
export default Title2;
