import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/callAPI";
import Loading from "../../components/Loading/Loading";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alert);

  const onFinish = (values) => {
    dispatch(userLogin(values));
  };
  return (
    <div className="login">
      {loading && <Loading />}
      <div className="d-flex align-items-center justify-content-center">
        <Form
          layout="vertical"
          className="login-form p-5 ml-5"
          onFinish={onFinish}
        >
          <h1 className="text-center font-weight-bold fo">Login</h1>
          <hr />
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input type="password" className="input" />
          </Form.Item>
          <button className="w-100 p-2 border-0 bg-blue color-white">
            Login
          </button>
          <Link to="/register">
            <p className="mt-2">Register Now</p>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
