import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    image01: {
      type: String,
      required: true,
    },
    image02: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
    },
    color: {
      type: Array,
    },
    slug: {
      type: String,
    },
    size: {
      type: Array,
    },
    path: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product };
