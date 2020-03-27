import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { isAuthenticated, logout, isSuperAdmin } from '../auth';

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
    const [menuitems, setMenuItems] = useState([]);

    useEffect(() => {
        // getAllMenuItems()
        //     .then(data => console.log('data', data))
        //     .catch(err => console.log('err', err));
    }, []);

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
                        <Link className="nav-link nav-link-topmenu dropdown-toggle text-center"
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-university"></i> Academic
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/publications">Publications</Link>
                            <Link className="dropdown-item" to="/courses">Courses</Link>
                            <Link className="dropdown-item" to="/career-counselling">Career Counselling</Link>
                        </div>
                    </li>
                    {/* <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/academic")} to="/academic"><i className="fa fa-university"></i> Academics</Link>
                    </li> */}
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
                        <Link className={isActive(history, "/gallery")} to="/gallery"><i className="fa fa-images"></i> Photo Gallery</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/rti")} to="/rti"><i className="fa fa-question-circle"></i> RTI</Link>
                    </li>
                    <li className="nav-item  ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className={isActive(history, "/links")} to="/links"><i className="fa fa-question-circle"></i> Links</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto navbar-right">
                    <Link className={isActive(history, "/login")} to="/login">
                        <i className="fa fa-sign-in-alt"></i> Login
                    </Link>
                    <Link className={isActive(history, "/register")} to="/register">
                        <i className="fa fa-user-plus"></i> Register
                    </Link>
                </ul>
            </div>
        </nav>
    );
}





export default withRouter(NavBar);