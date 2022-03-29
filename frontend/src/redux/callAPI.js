import axios from "axios";
import { message } from "antd";

import { getAll } from "./productSlice";
import { loading } from "./alertSlice";
import { publicRequest, userRequest } from "../request";

export const getAllProducts = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await publicRequest.get("/products/getallproducts");
    dispatch(getAll(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/products/addproduct", reqObj);
    message.success("Add Product Success");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const editProduct = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/products/editproduct", reqObj);
    message.success("Edit Product Success");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const deleteProduct = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/products/deleteproduct", reqObj);
    message.success("Delete Product Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await publicRequest.post("/users/register", reqObj);
    message.success("Register Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await publicRequest.post("/users/login", reqObj);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("token", res.data.token);
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const checkOut = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.post("http://localhost:5000/api/checkout/payment", reqObj);
    message.success("Checkout Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
