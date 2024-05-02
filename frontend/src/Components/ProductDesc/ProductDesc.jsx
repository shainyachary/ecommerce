import { useParams } from "react-router-dom";
import { useContext } from "react";
import "./ProductDesc.css";
import { ProductContext } from "../ProductContext/ProductContext";

const ProductDesc = () => {
  const { products, addToCart } = useContext(ProductContext);
  const { id } = useParams();
  const productdesc = products.data.find((p) => p.id === Number(id));

  if (!productdesc) {
    return (
      <section>
        <div>No such Products</div>
      </section>
    );
  }

  return (
    <section className="product_desc_container">
      <div className="product_box">
        <img src={productdesc.image} alt="product" />
      </div>
      <div className="product_description">
        <h1 className="product_head">{productdesc.name}</h1>
        <p className="product_cost">{productdesc.price + ".00"}</p>
        <p className="product_info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          assumenda iusto esse quis? Deserunt, repellat quisquam obcaecati nemo
          doloribus, debitis reiciendis vitae consequuntur iste iusto nihil,
          saepe officiis repellendus facere recusandae error maxime soluta earum
          voluptatum excepturi non veritatis sit dolorem harum? Ex cum nesciunt
          autem exercitationem harum animi? Ipsum consequuntur voluptas dolorem
          atque voluptate temporibus aspernatur dolor ex exercitationem!
        </p>
        <div className="product_btns">
          <button
            onClick={() => addToCart(productdesc.id)}
            className="product_add_tocart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
