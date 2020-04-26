import React, { Fragment } from "react";

const Loading = ({ text }) => {
  return (
    <Fragment>
      <div
        className="d-float mt-5"
        style={{
          width: "50%",
          margin: "0px auto",
        }}
      >
        <div
          className="loader"
          style={{
            margin: "0px auto",
          }}
        >
          ...
        </div>
        <hr />
        <div className="loading-text ">
          {text && text.length > 0 ? text : "Loading"}...
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
