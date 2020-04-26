import React from "react";

function UserProfileRow(props) {
  return (
    <>
      <div className="col-3  p-1 text-right pt-2">{props.rowTitle} :</div>
      <div className="col-5  p-1">
        <input
          type={props.rowType}
          id={props.rowID}
          name={props.rowName}
          value={props.rowValue}
          readOnly={props.isReadOnly}
          disabled={props.isDisabled}
          onChange={(e) => props.onUserProfileRowTextChanged(e)}
          className="form-control"
        />
      </div>
      <div className="col-3">&nbsp;</div>
    </>
  );
}

export default UserProfileRow;
