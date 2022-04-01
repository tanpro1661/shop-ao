import React, { useContext } from "react";
import {
  SearchOutlined,
  GlobalOutlined,
  FullscreenOutlined,
  BellOutlined,
  MessageOutlined,
  BarsOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper__search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="navbar__wrapper__items">
          <div className="navbar__wrapper__items__item">
            <GlobalOutlined className="icon" />
            <p>English</p>
          </div>
          <div
            className="navbar__wrapper__items__item"
            onClick={() => dispatch({ type: "TOGGLE" })}
          >
            <BulbOutlined className="icon" />
          </div>
          <div className="navbar__wrapper__items__item">
            <FullscreenOutlined className="icon" />
          </div>
          <div className="navbar__wrapper__items__item">
            <BellOutlined className="icon" />
            <div className="counter">4</div>
          </div>
          <div className="navbar__wrapper__items__item">
            <MessageOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="navbar__wrapper__items__item">
            <BarsOutlined className="icon" />
          </div>
          <div className="navbar__wrapper__items__item">
            <img
              src="https://mondaycareer.com/wp-content/uploads/2020/11/%E1%BA%A3nh-avatar-%C4%91%E1%BA%B9p-c%C3%B4-g%C3%A1i-%C4%91eo-k%C3%ADnh.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
