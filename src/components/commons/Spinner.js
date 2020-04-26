import React from "react";

export default function Spinner() {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        style={{ width: "15px", height: "15px" }}
        role="status"
        aria-hidden="true"
      ></span>
    </>
  );
}
