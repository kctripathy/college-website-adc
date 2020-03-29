import React, { useState } from 'react';

function LayoutDashboard(props) {
    return (
        <div className="container-fluid layout">
            <h2 className="page-title ml-10">{props.title ? props.title : ''}</h2>
            <div className="row">
                <div className="col-lg-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default LayoutDashboard;