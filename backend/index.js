const port = 9998;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://shainyachary:admin123@cluster0.xmqwdso.mongodb.net/ecommerce_web?retryWrites=true&w=majority&appName=Cluster0"
);

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id = 1;
    if (products.length > 0) {
      let last_product = products[products.length - 1];
      id = last_product.id + 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
    });
    await product.save();
    console.log("Product saved");
    res.json({
      success: 1,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: 0, error: "Internal server error" });
  }
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.send({
    success: 1,
    name: "removed successfully",
  });
});

app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  res.json({
    data: products,
  });
});

const fetchUser = async (req, res, next) => {
  const token = req.headers("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please enter Valid login Credentials" });
  } else {
    try {
      const data = jwt.verify(token, "secret_key");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "Please enter Valid login Credentials" });
    }
  }
};

app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate(
    { _id: req.body.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});

app.post("/removefromcart", fetchUser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] -= 1;
  await User.findOneAndUpdate(
    { _id: req.body.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "Existing User",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_key");
  res.json({
    success: true,
    token,
  });
});

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passMatch = req.body.password === user.password;
    if (passMatch) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_key");
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        errors: "Wrong password",
      });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email" });
  }
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening on port ${port}`);
  } else {
    console.error("Error starting server:", err);
  }
});
