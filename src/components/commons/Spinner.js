import React from 'react';

export default function Spinner() {
    return (
        <>
            <span
                className="spinner-border spinner-border-sm"
                style={{ width: "25px", height: "25px" }}
                role="status"
                aria-hidden="true"></span>
        </>
    );
}
