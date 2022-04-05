import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import { useSelector } from "react-redux";

const mainNav = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  { display: "Sản Phẩm", path: "/catalog" },
  { display: "Phụ Kiện", path: "/accessories" },
  { display: "Liên Hệ", path: "/contact" },
];

const menu = (
  <Menu>
    <Menu.Item >
      <a href="/">Trang chủ</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/catalog">Sản phẩm</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/admin">Admin</a>
    </Menu.Item>
    <Menu.Item
      onClick={() => {
        localStorage.clear();
        window.location.href = "/login";
      }}
    >
      <li>Đăng xuất</li>
    </Menu.Item>
  </Menu>
);

const Header = ({ admin }) => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef("");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;
  const { quantity } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            {admin ? (
              <h1 style={{ color: "tomato", fontWeight: "bold" }}>
                FLASH admin
              </h1>
            ) : (
              <h1 style={{ color: "tomato", fontWeight: "bold" }}>FLASH</h1>
            )}
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu color-white"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-window-close"></i>
            </div>

            {mainNav.map((item, index) => (
              <div
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                key={index}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              {admin ? (
                <Link to="/add">
                  <span>+Add</span>
                </Link>
              ) : (
                ""
              )}
            </div>
            <div
              className="header__menu__item header__menu__right__item"
              style={{ position: "relative" }}
            >
              <Link to="/cart">
                <i className="bx bx-shopping-bag" style={{ fontSize: "25px" }}>
                  <span
                    style={{
                      fontSize: "15px",
                      position: "absolute",
                      top: "0px",
                      left: "20px",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#1890ff",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {quantity}
                  </span>
                </i>
              </Link>
            </div>

            <div className="header__menu__item header__menu__right__item">
              <Dropdown
                overlay={menu}
                className="header__menu__item header__menu__right__item__dropdown"
              >
                {user && isAdmin ? (
                  <Button>{user?.name} (admin)</Button>
                ) : (
                  <Button>{user?.name}</Button>
                )}
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
