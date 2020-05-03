import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

function MenuListItem({
  history,
  destination,
  viewDestination,
  title,
  showBadge,
  addview,
}) {
  const isActive = (path) => {
    if (history.location.pathname === path) {
      return "active-left-menu";
    } else {
      return "inactive-left-menu";
    }
  };

  const showAddViewLinks = () => {
    return (
      <div className="row m-0 p-0">
        <div className="col-6 text-left m-0 p-0">{title}</div>
        <div className="col-6 text-right m-0 p-0" style={{ fontSize: ".8em" }}>
          <Link to={`${destination}`}>
            <i className="fa fa-plus mr-1"></i>Add New
          </Link>
          {/* <Link to={`/administration/establishments/manage/${title.toLowerCase()}`}>Manage</Link> */}
          {viewDestination ? (
            <Fragment>
              &nbsp; | &nbsp;<Link to={`${viewDestination}`}>View</Link>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  return (
    <li
      className={`list-group-item list-group-item-action ${isActive(
        destination
      )}`}
      style={{ height: "40px" }}
    >
      {addview && addview === true ? (
        showAddViewLinks()
      ) : (
        <Link to={`${destination}`}>{title}</Link>
      )}

      {showBadge && showBadge === true ? (
        <span className="badge badge-warning badge-pill">14</span>
      ) : (
        ""
      )}
    </li>
  );
}

export default withRouter(MenuListItem);
