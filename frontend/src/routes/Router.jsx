import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Accessories from "../pages/Accessories";
import Contact from "../pages/Contact";
import ProductView from "../pages/ProductView";

const Router = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
      {user && isAdmin ? (
        <Route path="/admin" element={<Admin />} />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      {user && isAdmin ? (
        <Route path="/add" element={<AddProduct />} />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      {user && isAdmin ? (
        <Route path="/editproduct/:productid" element={<EditProduct />} />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      <Route path="/catalog/" element={<Catalog />} />
      <Route path="/catalog/:slug" element={<ProductView />} />
      <Route path="/:slug" element={<ProductView />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productid" element={<Products />} />
      {!user ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
