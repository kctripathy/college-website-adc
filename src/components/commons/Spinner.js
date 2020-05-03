import React from "react";

export default function Spinner() {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        style={{ width: "35px", height: "35px" }}
        role="status"
        aria-hidden="true"
      ></span>
    </>
  );
}
