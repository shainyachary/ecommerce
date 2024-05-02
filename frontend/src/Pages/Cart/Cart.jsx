import "./Cart.css";
import { CiTrash } from "react-icons/ci";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext/ProductContext";

const Cart = () => {
  const { products, cartItems, removeFromCart, getTotalAmount } =
    useContext(ProductContext);

  return (
    <section className="cart_container">
      <h1 className="title">Cart</h1>
      <div className="cart_wrapper">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products?.data.map((p) => {
              if (cartItems[p.id] > 0) {
                return (
                  <tr key={p.id}>
                    <td>
                      <img src={p.image} alt="1" width={80} height={60} />
                    </td>
                    <td>{p.price}</td>
                    <td>{cartItems[p.id]}</td>
                    <td>{p.price * cartItems[p.id]}</td>
                    <td>
                      <CiTrash
                        className="trash"
                        onClick={() => removeFromCart(p.id)}
                      />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className="cartSummary ms-auto">
        <h1>Summary</h1>
        <div className="summary">
          <div className="summary_price">
            <p>SubTotal :</p>
            <p>{getTotalAmount()}</p>
          </div>
          <div className="summary_ship">
            <p>Shipping :</p>
            <p>Free</p>
          </div>
          <div className="summary_total">
            <p>Total :</p>
            <p>{getTotalAmount()}</p>
          </div>
        </div>
        <button className="check_btn">CheckOut To Proceed</button>
      </div>
    </section>
  );
};

export default Cart;
