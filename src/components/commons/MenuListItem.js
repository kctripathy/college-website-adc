import React from 'react';
import { Link, withRouter } from 'react-router-dom';



function MenuListItem({ history, destination, title, showBadge }) {

    const isActive = (path) => {
        if (history.location.pathname === path) {
            return ("active-left-menu")
        }
        else {
            return ("inactive-left-menu")
        }
    };

    return <li className={`list-group-item d-flex justify-content-between align-items-center  ${isActive(destination)}`}>
        <Link to={`${destination}`}>{title}</Link>
        {
            showBadge && showBadge === true ? <span className="badge badge-warning badge-pill">14</span> : ''
        }
    </li>

};

export default withRouter(MenuListItem)