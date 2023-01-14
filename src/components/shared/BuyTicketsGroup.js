import Image from "../Image";
import Calle from "../../assets/calle.jpg";
import Retrato1 from "../../assets/retrato1.jpg";
import Noche from "../../assets/noche.jpg";
import Cerezo from "../../assets/cerezo.jpg";
import vicente1 from "../../assets/vicente.jpg";
import Link from "../common/Link";

const BuyTicketsGroup = (props) => {
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
          <div>
            <button className="buy-tickets-button" as={Link}>
              Buy Ticket
            </button>
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
          backgroundImage: `url(${vicente1})`,
          backgroundSize: `100%`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `50% 50%`,
          
        }}
      ></div>
    </div>
  );
};
export default BuyTicketsGroup;
