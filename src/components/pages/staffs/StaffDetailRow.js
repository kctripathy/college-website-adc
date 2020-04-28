import React from "react";

export default function StaffDetailRow({ label, value, classStyle }) {
  {
    const x =
      value && value.length > 0 ? (
        <div className="row">
          <div className="col-6 p-0 text-right">{label} &nbsp; : &nbsp;</div>
          <div
            className={`col-6 p-0 text-left ${classStyle ? classStyle : ""}`}
          >
            {value}
          </div>
        </div>
      ) : (
        ""
      );

    return x;
  }
  //   return (
  //   <div className="row m-0 p-0">
  //     <div className="col-lg-6 col-sm-12 text-right">{label}:</div>
  //     <div className="col-lg-4 col-sm-12 text-left">{value}</div>
  //   </div>
  //   );
}
