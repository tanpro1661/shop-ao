import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import number from "../../utils/number";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/callAPI";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to={`/slug/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
      </Link>
      <h3 className="product-card__name">{props.name}</h3>
      <div className="product-card__price">{number(props.price)}</div>
      <div className="product-card__btn">
        {!props.admin ? (
          <Link to={`/product/${props.id}`}>
            <Button size="sm" icon="bx bx-cart" animate={true}>
              Mua
            </Button>
          </Link>
        ) : (
          <Link to={`/editproduct/${props.id}`}>
            <Button size="sm">
              <div className="d-flex align-items-center">
                <EditOutlined className="mr-2" />
                Sửa
              </div>
            </Button>
          </Link>
        )}
        <span> </span>
        <Popconfirm
          title="Are you want to delete this product?"
          onConfirm={() => {
            dispatch(deleteProduct({ productId: props.id }));
          }}
          okText="Yes"
          cancelText="No"
        >
          {props.admin ? (
            <Button size="sm" backgroundColor="red">
              <div className="d-flex align-items-center">
                <DeleteOutlined className="mr-2" />
                Xóa
              </div>
            </Button>
          ) : (
            ""
          )}
        </Popconfirm>
      </div>
    </div>
  );
};

Product.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Product;
