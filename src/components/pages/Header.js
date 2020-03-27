import React, { useState } from 'react';
import CollegeLogo from '../../assets/images/logo-75.png';
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <div className="row bg-light m-0 p-0 header">
            <div className="col-1 text-right m-1 p-1">
                <Link to="/">
                    <img className="web-logo" src={CollegeLogo} />
                </Link>
            </div>
            <div className="col-10 text-center m-1 pt-3">
                <h3 className="web-title">ANCHALIKA DEGREE COLLEGE</h3>
                <h5 className="web-sub-title">Jagannath Prasad</h5>
            </div>
            <div className="col-1 pt-1 text-right">
            </div>
        </div>
    );
}

export default React.memo(Header);