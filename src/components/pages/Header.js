import React, { useState } from 'react';
import CollegeLogo from '../../assets/images/logo-75.png';
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <div className="row bg-light m-0 p-1 header">
            <div className="col-1 text-right">
                <Link to="/">
                    <img className="web-logo" src={CollegeLogo} />
                </Link>
            </div>
            <div className="col-10 text-center">
                <h3 className="web-title">ANCHALIKA DEGREE COLLEGE</h3>
                <h5 className="web-sub-title">Jagannath Prasad</h5>
            </div>
            <div className="col-1 text-right">
                <a className="btn btn-info mt-4" href="https://www.facebook.com/adc.jagannathprasad" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </div>
        </div>
    );
}

export default React.memo(Header);