import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { isAuthenticated, logout } from '../../api/user';

// import { getAllMenuItems } from '../api';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return ("nav-link active")
    }
    else {
        return ("nav-link inactive")
    }
}

function NavBar({ history }) {

    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();
    //console.log("---------------------> RoleID", RoleID);

    const showLinks = () => {
        if (RoleID === undefined || RoleID === null) {
            return showLinksBeforeLogin()
        }
        else {
            return showLinksAfterLogin()
        }
    };

    const showLinksBeforeLogin = () => (
        <Fragment>
            <li>
                <Link className={isActive(history, "/login")} to="/login"><i className="fa fa-sign-in-alt"></i> Login </Link>
            </li>
            <li>
                <Link className={isActive(history, "/register")} to="/register"><i className="fa fa-user-plus"></i> Register </Link>
            </li>
        </Fragment>
    );

    const showLinksAfterLogin = () => (
        <Fragment>
            <li className="nav-item ml-2 dropdown">
                <Link className="nav-link nav-link-topmenu dropdown-toggle text-right active"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <b>Welcome {UserFirstName}</b>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        {
                            RoleID === 1 ? (<Link className="dropdown-item" to="/admin/dashboard">Dashboard</Link>) : (
                                (RoleID === 2 || RoleID === 3) ? (<Link className="dropdown-item" to="/staff/dashboard">Dashboard</Link>) :
                                    (<Link className="dropdown-item" to="/student/dashboard">Dashboard</Link>)
                            )

                        }
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="dropdown-item" to="#" onClick={() => logout(() => { history.push("/login") })}>Logout</Link>
                    </li>
                </ul>
            </li>
        </Fragment>
    );


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-adc">
            <Link className="navbar-brand" to="/">&nbsp;</Link>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto col-10">
                    <li className="nav-item">
                        <Link to="/"><span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/home")} to="/home"><i className="fa fa-home"></i> Home</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/about")} to="/about"><i className="fa fa-info-circle"></i> About</Link>
                    </li>
                    <li className="nav-item ml-2 dropdown">
                        <Link className="nav-link nav-link-topmenu dropdown-toggle text-left"
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-university"></i> Academic
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/publications">Publications</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/courses">Courses</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/students")} to="/students"><i className="fa fa-user-graduate"></i> Students</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/staffs")} to="/staffs"><i className="fa fa-chalkboard-teacher"></i> Staffs</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/library")} to="/library"><i className="fa fa-book"></i> Library</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/admin")} to="/admin"><i className="fa fa-user-cog"></i> Admin</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/downloads")} to="/downloads"><i className="fa fa-download"></i> Downloads</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/gallery")} to="/gallery"><i className="fa fa-images"></i> Gallery</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/rti")} to="/rti"><i className="fa fa-question-circle"></i> RTI</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/media-release")} to="/media-release"><i className="fa fa-newspaper"></i> Media</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/conact")} to="/contact"><i className="fa fa-id-card"></i> Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto navbar-right">
                    {/* {showLinks()} */}
                    {(!isAuthenticated()) && (
                        <Fragment>
                            <li className="nav-item  m-0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className={isActive(history, "/login")} to="/login"><i className="fa fa-sign-in-alt mr-2"></i>Login</Link>
                            </li>
                            <li className="nav-item  m-0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className={isActive(history, "/register")} to="/register"><i className="fa fa-user-plus mr-2"></i>Register</Link>
                            </li>
                        </Fragment>
                    )}
                    {(isAuthenticated()) && (

                        <li className="nav-item ml-2 dropdown">
                            <Link className="nav-link nav-link-topmenu dropdown-toggle text-right active"
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <b>Welcome {UserName}</b>
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">

                                <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    {
                                        RoleID === 1 ? (<Link className="dropdown-item" to="/admin/dashboard">Dashboard</Link>) : (
                                            (RoleID === 2 || RoleID === 3) ? (<Link className="dropdown-item" to="/staff/dashboard">Dashboard</Link>) :
                                                (
                                                    <Fragment>
                                                        <Link className="dropdown-item" to="/student/dashboard">Dashboard</Link>
                                                        <Link className="dropdown-item" to="/student/feedback">Feedback</Link>
                                                    </Fragment>
                                                )
                                        )

                                    }
                                </li>
                                <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <Link className="dropdown-item" to="#" onClick={() => logout(() => { history.push("/login") })}>Logout</Link>
                                </li>
                            </ul>
                        </li>
                        // <li className="nav-item">
                        //     <Link className={isActive(history, "/logout")} to="#"
                        //         onClick={() => logout(() => {
                        //             history.push("/")
                        //         })}><i className="fa fa-sign-out-alt"></i>Logout</Link>
                        // </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}





export default withRouter(NavBar);