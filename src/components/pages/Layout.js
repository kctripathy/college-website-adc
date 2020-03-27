import React, { useState } from 'react';

function Layout(props) {

    return (
        <div className="container-fluid layout">
            <h2 className="page-title ml-10">
                {props.title ? props.title : ''}
                {/* {props.showCount && <span className="badge badge-primary m-2"> {props.showCount}</span>} */}
            </h2>

            {props.children}
        </div>
    );
}

export default Layout;