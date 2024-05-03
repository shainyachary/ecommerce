import { useContext } from "react";
import "./Shop.css";
import { ProductContext } from "../../ProductContext/ProductContext";
import Product from "../../Components/Product/Product";
import { data } from "../../utils";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <section className="shop_container">
      <h1 className="title mt-5">Latest Collections</h1>
      <div className="product_wrapper mt-4">
        <Product
          id={data.id}
          name={data.name}
          image={data.image}
          price={data.price}
        />
        <Product
          id={data.id}
          name={data.name}
          image={data.image}
          price={data.price}
        />
        <Product
          id={data.id}
          name={data.name}
          image={data.image}
          price={data.price}
        />
        {products?.data?.data?.map((prod) => {
          return <Product key={prod.id} {...prod} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
