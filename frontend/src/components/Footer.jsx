import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/about",
  },
  {
    display: "Liên Hệ",
    path: "/about",
  },
  {
    display: "Tuyển Dụng",
    path: "/about",
  },
  {
    display: "Tin Tức",
    path: "/about",
  },
  {
    display: "Hệ Thống Cửa Hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black color-white">
      <div className="container p-5 ">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0964903991</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0964903991</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0964903991</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Về FLASH</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>{item.display}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>{item.display}</p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "tomato",
                  }}
                >
                  FLASH
                </span>
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
              triệu người tiêu dùng Việt. Hãy cùng Flash hướng đến một cuộc sống
              năng động, tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
