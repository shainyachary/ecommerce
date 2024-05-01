import "./Collection.css";
import { collections } from "../../utils";

const Collection = () => {
  return (
    <section className="collection_container">
      {collections.map((collection) => {
        return (
          <div key={collection?.id}>
            <img src={collection?.image} alt={collection?.image} />
          </div>
        );
      })}
    </section>
  );
};

export default Collection;
