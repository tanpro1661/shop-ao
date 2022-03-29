import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import { Row, Col } from "antd";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/callAPI";
import { useParams } from "react-router-dom";
import { addItemToCart } from "../redux/cartSlice";
import number from "../utils/number";

const Product = () => {
  const { productid } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState([]);
  const [product, setProduct] = useState({});

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    if (quantity < 1) {
      alert("Số lượng phải lớn hơn 0!");
    }
    return true;
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    } else {
      setProduct(products.find((item) => item._id === productid));
      setTotalProducts(products);
    }
  }, [products, dispatch, productid]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = () => {
    if (check()) {
      dispatch(addItemToCart({ ...product, quantity, size, color }));
    }
  };

  return (
    <div>
      <Header />
      <Helmet title="Product">
        {totalProducts.length > 0 && (
          <Row className="d-flex align-items-center">
            <Col lg={12} sm={24}>
              <div className="products__image p-5">
                <img src={product.image01} alt="" />
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className="products p-5">
                <h1 className="products__title text-center">{product.title}</h1>
                <div className="products__item">
                  <div className="products__item__title">Màu Sắc:</div>
                  <div className="products__item__list">
                    {product.colors.map((item) => (
                      <div
                        key={item}
                        className={`bg-${item} products__item__list__item ${
                          color === item ? "active" : ""
                        }
                  }`}
                        onClick={() => setColor(item)}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="products__item">
                  <div className="products__item__title">Cỡ Size :</div>
                  <div className="products__item__list">
                    {product.sizes.map((item) => (
                      <div
                        key={item}
                        className={`products__item__list__item ${
                          size === item ? "active" : ""
                        }`}
                        onClick={() => setSize(item)}
                      >
                        <span className="products__item__list__item__size">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" products__item">
                  <div className="products__item__title">Đơn giá:</div>
                  <p className="products__item__price">
                    {number(product.price)} VNĐ
                  </p>
                </div>
                <div className=" products__item">
                  <div className="products__item__title">Số lượng:</div>
                  <input
                    type="number"
                    min={1}
                    className="products__item__input"
                    onChange={(e) => setQuantity(e.target.value)}
                    defaultValue={1}
                  />
                </div>
                <div className="products__item">
                  <button
                    className="p-3 border-0 bg-blue color-white w-100"
                    onClick={handleClick}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Helmet>
    </div>
  );
};

export default Product;
