import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Helmet from "../../components/Helmet/Helmet";

const Contact = () => {
  const [send, setSend] = useState(false);
  useEffect((e) => {
    window.scrollTo(0, 0);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setSend(!send);
    setTimeout(() => {
      window.location.href = '/'
    }, 3000)
  };

  return (
    <Helmet title="Liên Hệ">
      <Header />
      <div className="wrapper">
        <div className="contact">
          <div className="contact__form">
            <h3 className="contact__f">Liên hệ với chúng tôi</h3>
            <form className="contact__form__item">
              <input type="text" placeholder="Tên" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Lời nhắn"></textarea>

              <button onClick={handleSend} className="btn">Submit</button>
              {send && <p className="success">Thành công, cảm ơn bạn đã ủng hộ Shop!</p>}
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
      </div>
    </Helmet>
  );
};

export default Contact;
