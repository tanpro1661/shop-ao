import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import number from "../../utils/number";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItemFromCart());
  };

  return (
    <div className="cartItem d-flex flex-column p-5">
      <table className="cartItem__table">
        <thead className="cartItem__table__head">
          <tr className="cartItem__table__head__item">
            <th>Hình Ảnh</th>
            <th>Tên Sản Phẩm</th>
            <th>Đơn Giá</th>
            <th>Số Lượng</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody className="cartItem__table__body">
          {cart.products.map((product, index) => (
            <>
              <tr key={index}>
                <td className="cartItem__table__body__img">
                  <img
                    src={product.image01}
                    alt=""
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      marginBottom: "50px",
                      marginTop: "50px",
                    }}
                  />
                </td>
                <td className="cartItem__table__body__title">
                  {product.title}
                </td>
                <td className="cartItem__table__body__price">
                  {number(product.price)}
                </td>
                <td className="cartItem__table__body__quantity">
                  {product.quantity}
                </td>
                <td>
                  <i
                    className="bx bx-trash"
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                  ></i>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
