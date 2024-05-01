import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";
import Cards from "../../Components/Cards/Cards";
import Collection from "../../Components/Collection/Collection";

const Home = () => {
  return (
    <div className="home_container">
      <Carousel />
      <Cards />
      <Collection />
    </div>
  );
};

export default Home;
