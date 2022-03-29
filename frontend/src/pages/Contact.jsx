import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="pt-5">
        <div className="contact">
          <h3>Liên hệ với chúng tôi</h3>
          <form className="contact__form">
            <input type="text" placeholder="Tên" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Lời nhắn"></textarea>
            <Button size="sm" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="contact-support">
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
    </>
  );
};

export default Contact;
