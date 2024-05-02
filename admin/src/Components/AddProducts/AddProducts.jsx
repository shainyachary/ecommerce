import { useState } from "react";
import "./AddProducts.css";

const AddProducts = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    image: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responsedata;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:9998/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responsedata = data;
      });
    if (responsedata.success) {
      product.image = responsedata.image_url;
      console.log(product);
      await fetch("http://localhost:9998/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Upload failed");
        });
    }
  };
  return (
    <section className="addproduct mt-5">
      <div className="wrapper">
        <div className="input_box">
          <h1>Products Name :</h1>
          <input
            name="name"
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            id="title"
            placeholder="Type here..."
          />
        </div>
        <div className="input_box">
          <h1>Products Price :</h1>
          <input
            name="price"
            value={productDetails.price}
            onChange={changeHandler}
            type="text"
            id="title"
            placeholder="Type here..."
          />
        </div>
        <div className="input_box">
          <label htmlFor="file_input">
            <img
              src={image ? URL.createObjectURL(image) : ""}
              width={80}
              alt=""
            />
          </label>
          <input
            name="image"
            value={productDetails.image}
            type="file"
            id="file_input"
            onChange={imageHandler}
          />
        </div>
        <button onClick={() => Add_Product()}>Add Product</button>
      </div>
    </section>
  );
};

export default AddProducts;
