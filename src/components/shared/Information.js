import Link from "../common/Link";

const Information = (props) => {
  return (
    <div className="information-block">
      <div className="info-seccion">
        <h1 className="title-info-seccion">Museum</h1>
        <div className="link-museum-seccion">
          <Link isActive={false} text={"History"} />
          <Link isActive={false} text={"Education"} />
          <Link isActive={false} text={"Cultural Programs"} />
          <Link isActive={false} text={"Archive & Documentation"} />
        </div>
        <div>
          <h1 className="title-info-seccion">Exhibitions</h1>
          <div className="link-museum-seccion">
            <Link isActive={false} text={"News"} />
            <Link isActive={false} text={"Interactions"} />
            <Link isActive={false} text={"Video"} />
            <Link isActive={false} text={"Audio"} />
          </div>
        </div>
      </div>
      <div className="info-seccion">
        <div>
          <h1 className="title-info-seccion">Collection</h1>
          <div className="link-museum-seccion">
            <Link isActive={false} text={"19th-Centure Painting"} />
            <Link isActive={false} text={"Sculpture & Decorative Arts"} />
            <Link
              isActive={false}
              text={"Italian and French Painting Up To 1800 "}
            />
            <Link
              isActive={false}
              text={"Flemish Painting And Northem Schools"}
            />
          </div>
        </div>
        <div>
          <h1 className="title-info-seccion">Contacts</h1>
          <div className="link-museum-seccion">
            <Link isActive={false} text={"Rue De Rivail 7500 Paris France"} />
            <Link isActive={false} text={"+331 40 20 50 50"} />
          </div>
        </div>
      </div>
      <div className="info-seccion">
        <div>
          <h1 className="title-info-seccion">Tickets</h1>
          <div className="link-museum-seccion">
            <Link isActive={false} text={"Buy Tickets"} />
            <Link isActive={false} text={"Visiting Rules"} />
          </div>
        </div>
        <div>
          <h1 className="title-info-seccion">Opening Hours</h1>
          <div className="link-museum-seccion">
            <Link
              isActive={false}
              text={"Monday to Saturday From 10a.m to 8p.m"}
            />
            <Link
              isActive={false}
              text={"Sundays and Holidays From 10a.m to 7p.m"}
            />
          </div>
        </div>
        <div>
          <h1 className="title-info-seccion">Closed</h1>
          <div className="link-museum-seccion">
            <Link isActive={false} text={"January 1sr"} />
            <Link isActive={false} text={"May 1st"} />
            <Link isActive={false} text={"December 25th"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
