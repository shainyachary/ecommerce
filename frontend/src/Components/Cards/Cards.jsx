import { cards } from "../../utils";
import "./Cards.css";

const Cards = () => {
  return (
    <section className="card_container">
      <h2 className="title">Latest Arrivals</h2>
      <div className="card_img_conatiner">
        {cards.map((card) => {
          return <img key={card?.id} src={card?.image} alt={card?.image} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
