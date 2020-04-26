import React from "react";
import moment from "moment";
import { WEB_URL } from "../../../config";

export default function Download(props) {
  const {
    EstbTypeCode,
    EstbDate,
    EstbTitle,
    EstbDescription,
    FileNameWithPath,
  } = props.data;

  const displayUploadLabel = (typeCode) => {
    let retValue;
    switch (props.data.EstbTypeCode) {
      case "MoM":
        retValue = `Meeting Date: ${new Date(
          EstbDate
        ).toShortFormat()} (${moment(EstbDate).fromNow()})`;
        break;
      default:
        retValue = `Upload Date: ${new Date(
          EstbDate
        ).toShortFormat()} (${moment(EstbDate).fromNow()})`;
        break;
    }
    return retValue;
  };

  return (
    <>
      <div className="col-12 m-0 p-0">
        <b>{EstbTitle}</b>
        <br />
        <em>
          <small>{displayUploadLabel()} </small>
        </em>
        {/* {EstbDescription} */}
        <span style={{ float: "right" }}>
          <a href={`${WEB_URL}/Documents/${FileNameWithPath}`} target="_blank">
            <i className="fa fa-file-pdf-o"></i> Download
          </a>
        </span>

        <hr />
      </div>
    </>
  );
}
