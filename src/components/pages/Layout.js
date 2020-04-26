import React, { Fragment } from "react";

function Layout(props) {
  return (
    <div className="container-fluid layout">
      <div className="row m-0 p-0">
        <div
          className="col-lg-12 col-sm-12 m-0 p-0 bg-page-title text-center m-0 p-0"
          style={{
            display: props.title && props.title.length > 0 ? "" : "none",
          }}
        >
          <h5 className="m-0 p-1">{props.title}</h5>
        </div>
        {/* <div className="col-lg-6 col-sm-6 text-right m-0 p-0 pt-2 pr-3" style={{ display: "none" }}>
                    {props.handleView ? (
                        <Fragment>
                            <button type="button" className="btn btn-outline-primary btn-sm mr-1" onClick={() => props.handleView('list')}>List View</button>
                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => props.handleView('grid')}>Grid View</button>
                        </Fragment>
                    ) : ('')}
                </div> */}
      </div>
      <div className="row m-0 p-0">
        <div className="col-lg-12 col-sm-12 m-0 p-0">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
