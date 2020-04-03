import React, { Fragment } from 'react';

function Layout(props) {
    return (
        <div className="container-fluid layout">
            <div className="row m-0 p-0">
                <div className="col-lg-6 col-sm-6 m-0 p-0">
                    <h2 className="page-title ml-10">{props.title ? props.title : ''}</h2>
                </div>
                <div className="col-lg-6 col-sm-6 text-right m-0 p-0 pt-2 pr-3">
                    {props.handleView ? (
                        <Fragment>
                            <button type="button" className="btn btn-outline-primary btn-sm mr-1" onClick={() => props.handleView('list')}>List View</button>
                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => props.handleView('grid')}>Grid View</button>
                        </Fragment>
                    ) : ('')}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;