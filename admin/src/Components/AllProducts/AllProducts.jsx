import { useState } from "react";
import "./AllProducts.css";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const AllProducts = () => {
  const [listProducts, setListProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:9998/allproducts")
      .then((res) => res.json())
      .then((data) => setListProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const remove_Products = async (id) => {
    await fetch("http://localhost:9998/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    fetchProducts();
  };

  return (
    <section className="allproducts">
      <h4>Product List</h4>
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {listProducts?.data?.map((prod) => (
            <tr key={prod.id}>
              <td>
                <img src={prod.image} alt="product" />
              </td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>
                <FaTrashAlt onClick={() => remove_Products(prod?.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllProducts;
