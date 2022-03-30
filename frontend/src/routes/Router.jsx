import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Product/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Admin from "../pages/Admin/Admin";
import AddProduct from "../pages/Add/AddProduct";
import EditProduct from "../pages/Edit/EditProduct";
import Accessories from "../pages/Accessory/Accessories";
import Contact from "../pages/Contact/Contact";
import ProductView from "../pages/Product/ProductView";
import Accessory from "../components/Accessory/Accessory";
import AccessoryView from "../pages/Accessory/AccessoryView";

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
      <Route path="/accessory/:slug" element={<AccessoryView />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productid" element={<Products />} />
      
      {!user ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/accessory" element={<Accessories />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
