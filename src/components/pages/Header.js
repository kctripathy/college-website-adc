import React, { useState } from "react";
import CollegeLogo from "../../assets/images/logo-75.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="row bg-light m-0 p-1">
      <div className="col-lg-1 col-sm-12 text-center">
        <Link to="/">
          <img className="web-logo" src={CollegeLogo} />
        </Link>
      </div>
      <div className="col-lg-10 col-sm-12 text-center">
        <h3 className="web-title">Anchalika Degree College</h3>
        <h5 className="web-sub-title">Jagannath Prasad, Ganjam (Odisha)</h5>
      </div>
      <div className="col-lg-1 col-sm-2 text-right fb-icon">
        <a
          className="btn btn-info mt-4"
          href="https://www.facebook.com/adc.jagannathprasad"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
}

export default React.memo(Header);
