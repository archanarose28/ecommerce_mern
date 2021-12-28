const express = require("express");
const Product = require("./src/product");

const connectDB = async () => {
  try {
    const mongoose = require("mongoose");
    const URL = "mongodb://localhost:27017/Ecommerse"; //local url

    mongoose
      .connect(URL, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connection open");
      })
      .catch((err) => {
        console.log("Oh no error");
        console.log(err);
      });
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/product/id", async (req, res) => {
  console.error("error"+req.params);

  try {
    const product = await Product.findById(req.params.id);
    res.json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("product/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    const data = await product.save();
    console.log("data", data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

const PORT = 4010;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
