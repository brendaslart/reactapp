import Image from "../Image";
import Calle from "../../assets/calle.jpg";
import Retrato1 from "../../assets/retrato1.jpg";
import Noche from "../../assets/noche.jpg";
import Cerezo from "../../assets/cerezo.jpg";
import Retrato2 from "../../assets/retrato2.jpg";

const BuyTicketsGroup = (pops) => {
  return (
    <div className="buy-tickets-group">
      <div className="tickets-first-block">
        <h2>Exhibition</h2>
        <h1>VINCENT VAN GOGH</h1>
        <div className="tickets-date-group">
          <div className="date-wrapper">
            <div className="date-seccion">
              <label className="first-number-date">7</label>
              <span className="month-seccion">Dec 2022</span>
            </div>
            <span className="line">----</span>
            <div className="date-seccion">
              <label className="second-number-date">31</label>
              <span className="month-seccion">Dec 2022</span>
            </div>
          </div>
          <div className="images-seccion">
            <Image className="tickets-images" src={Calle} />
            <Image className="tickets-images" src={Retrato1} />
            <Image className="tickets-images" src={Noche} />
            <Image className="tickets-images" src={Cerezo} />
          </div>
        </div>
      </div>
      <div
        className="tickets-second-block"
        style={{
          backgroundImage: `url(${Retrato2})`,
          backgroundSize: `100%`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `50% 50%`
        }}
      ></div>
    </div>
  );
};
export default BuyTicketsGroup;
