import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../../routes/Router";

const Layout = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="main">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
