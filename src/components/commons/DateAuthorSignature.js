import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import PersonImage from "./PersonImage";

export default function DateAuthorSignature({ date, addedBy, author }) {
  return (
    <div className="row m-0 p-0 small">
      <div className="col-lg-12 col-sm-12 m-0 p-0 small">
        {moment(date).format("LLLL")} ({moment(date).fromNow()})
        <i className="fas fa-circle fa-xs ml-2 mr-2"></i>
        <Link to={`/staffdetails/${addedBy}`}>
          <PersonImage
            usertype="employee"
            id={addedBy}
            height="20px"
            width="20px"
          />
          {author}
        </Link>
      </div>
    </div>
  );
}
