import React from 'react';

const Loading = ({ text }) => {
    return (
        <>
            <span className="loading">{(text && text.length > 0) ? (text) : ("Loading")}...</span>
        </>
    );
};

export default Loading;
