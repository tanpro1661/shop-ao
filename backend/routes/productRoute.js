import express from "express";
const productRouter = express.Router();
import { Product } from "../models/productModel.js";
import { verifyToken, verifyTokenAdmin } from "./verifyToken.js";

productRouter.get("/getallproducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

productRouter.post("/addproduct", verifyTokenAdmin, async (req, res) => {
  try {
    const addNewProduct = new Product(req.body);
    await addNewProduct.save();
    res.send("Add Product Success");
  } catch (err) {
    return res.status(500).json(err);
  }
});

productRouter.post("/editproduct", verifyTokenAdmin, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.body._id });
    product.title = req.body.title;
    product.price = req.body.price;
    product.image01 = req.body.image01;
    product.image02 = req.body.image02;
    product.categorySlug = req.body.categorySlug;
    product.colors = req.body.colors;
    product.slug = req.body.slug;
    product.sizes = req.body.sizes;

    await product.save();
    res.send("Edit Product Successful");
  } catch (err) {
    return res.status(500).json(err);
  }
});

productRouter.post("/deleteproduct", verifyTokenAdmin, async (req, res) => {
  await Product.findOneAndDelete({ _id: req.body.productId });
  try {
    res.send("Delete Product Successful");
  } catch (err) {
    return res.status(400).json(err);
  }
});

productRouter.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { productRouter };
