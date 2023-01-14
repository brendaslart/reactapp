import Image from "../Image";
import Venus from "../../assets/venus.jpg";
import Starry from "../../assets/starry.jpg";
import Link from "../common/Link";


const Title = (props) => {
  return (
    
    <div className="title" >
      
      <div className="explore-block">
        <h1>Explore</h1>
        <Image className="venus" src={Venus} />
      </div>
      <div className="treasures-block">
        <Image className="starry" src={Starry} />
        <h1>the treasures</h1>
      </div>
      <h1>of the ART MUSEUM</h1>
    </div>
  );
};
export default Title;
