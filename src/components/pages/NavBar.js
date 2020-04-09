import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../../api/user';
import { WEB_URL } from '../../config';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return ("nav-link active")
    }
    else {
        return ("nav-link inactive")
    }
}

const isActiveDropdownItem = (history, path) => {
    // debugger;
    if (history.location.pathname === path) {
        return ("active")
    }
    else {
        if (history.location.pathname && history.location.pathname.includes(path)) {
            return ("active")
        }
        else {

            return ("inactive")
        }
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

                    {/* <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/about")} to="/about"><i className="fa fa-info-circle"></i> About</Link>
                    </li> */}
                    <li className="nav-item ml-2 dropdown">
                        <Link className={`nav-link nav-link-topmenu dropdown-toggle text-left ${isActiveDropdownItem(history, "/about")}`}
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-info-circle"></i> About
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/about">About College</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/about/profile">College Profile</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/about/principal-message">Principal's Message</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item ml-2 dropdown">
                        <Link className={`nav-link nav-link-topmenu dropdown-toggle text-left ${isActiveDropdownItem(history, "/academic")}`}
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-university"></i> Academic
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/academic/publications">Research Publications</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/academic/internal-quality-assurance-cell">Quality Assurance Cell (IQAC)</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/academic/carrer-counselling">Carrer Counselling Cell</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item ml-2 dropdown">
                        <Link className={`nav-link nav-link-topmenu dropdown-toggle text-left ${isActiveDropdownItem(history, "/activities")}`}
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-tasks"></i> Activity
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/activities/academics-activities">Academic Activities</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/activities/curricular-activities">Curricular Activities</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/activities/>Co_Curricular-activities">Co-Curricular Activities</Link>
                            </li>

                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/activities/college-associations">College Associations</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/activities/college-cells">College Cells</Link>
                            </li>
                        </ul>
                    </li>


                    {/* ================================= STUDENTS ===============================================
                    
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/students")} to="/students"><i className="fa fa-user-graduate"></i> Students</Link>
                    </li> */}
                    <li className="nav-item ml-2 dropdown">
                        <Link className={`nav-link nav-link-topmenu dropdown-toggle text-left ${isActiveDropdownItem(history, "/students")}`}
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-graduate"></i> Students
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/students">Current Students</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/students/alumni">Forment Students (Alumni)</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/students/union">Students Union</Link>
                            </li>
                            {/* <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/students/registration">Students Registration</Link>
                            </li> */}
                        </ul>
                    </li>

                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/staffs")} to="/staffs"><i className="fa fa-chalkboard-teacher"></i> Staffs</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/library")} to="/library"><i className="fa fa-book"></i> Library</Link>
                    </li>

                    {/* <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/admin")} to="/admin"><i className="fa fa-user-cog"></i> Admin</Link>
                    </li> */}
                    <li className="nav-item ml-2 dropdown">
                        <Link className={`nav-link nav-link-topmenu dropdown-toggle text-left ${isActiveDropdownItem(history, "/admin")}`}
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-cog"></i> Admin
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item m-1" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/admin/governing-body"><i className="fa fa-user-tie"></i> Governing Body</Link>
                            </li>
                            <li className="nav-item m-1" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/admin/holiday-list"><i className="fa fa-list-alt"></i> Holiday List</Link>
                            </li>
                            <li className="nav-item m-1" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/media-release"><i className="fa fa-newspaper"></i> Media Release</Link>
                            </li>
                            <li className="nav-item ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/rti"><i className="fa fa-question-circle"></i> RTI</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/downloads")} to="/downloads"><i className="fa fa-download"></i> Downloads</Link>
                    </li>

                    {/* <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/gallery")} to="/gallery"><i className="fa fa-images"></i> Gallery</Link>
                    </li> */}
                    <li className="nav-item ml-2 dropdown">
                        <Link className={`nav-link nav-link-topmenu dropdown-toggle text-left ${isActiveDropdownItem(history, "/gallery")}`}
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-images"></i> Gallery
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-target=".navbar-collapse.show">
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/gallery/photo"><i className="fa fa-images" aria-hidden="true"></i> Photo Gallery</Link>
                            </li>
                            <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="dropdown-item" to="/gallery/video"><i className="fas fa-film"></i> Video Gallery</Link>
                            </li>

                        </ul>
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
                                <a className={isActive(history, "/register")}
                                    href={`${WEB_URL}/register`}
                                    target="_blank"><i className="fa fa-user-plus mr-2"></i>Register</a>
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