import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Helmet from "../components/Helmet";

const Contact = () => {
  return (
    <Helmet title="Liên Hệ">
      <Header />
      <div className="contact">
        <div className="contact__form">
          <h3 className="contact__f">Liên hệ với chúng tôi</h3>
          <form className="contact__form__item">
            <input type="text" placeholder="Tên" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Lời nhắn"></textarea>
            <Button size="sm" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="contact__support">
          <h3>Gọi ngay</h3>
          <span>+84 9649038991</span>
          <h3>Khu vực</h3>
          <span>Bình Hưng, Bình Chánh, TP.HCM</span>
          <h3>Thời gian làm việc</h3>
          <p>
            <b>Mon-Fri</b>: 10am-8pm
          </p>
          <p>
            <b>Sat, Sun</b>: CLosed
          </p>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
