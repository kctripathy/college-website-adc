import React, { useState, Fragment } from "react";
import { isAuthenticated } from "../../api/user";
import Loading from "./Loading";
import EstablishmentTypeCodes from "./EstablishmentTypeCodes";
import UploadFile from "./UploadFile";
import { getCurrentDate_YYYY_MM_DD } from "./CommonFunctions";

export default function EstablishmentsEdit({ title, code, description }) {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [values, setValues] = useState({
    EstbID: 0,
    EstbTypeCode: code,
    EstbTypeCodeDescription: description,
    EstbDate: getCurrentDate_YYYY_MM_DD(), //'2020-04-11', //getCurrentDate_MMDDYYYY(),
    EstbTitle: "",
    EstbDescription: "",
    EstbFile: "",
  });

  const {
    UserID,
    UserName,
    UserType,
    UserFirstName,
    UserReferenceID,
    UserReferenceName,
    RoleID,
    RoleDescription,
  } = isAuthenticated();
  const {
    EstbID,
    EstbTypeCode,
    EstbTypeCodeDescription,
    EstbDate,
    EstbTitle,
    EstbDescription,
  } = values;

  const validateFormFields = () => {
    let isSuccess = true;
    let message = "";
    setSuccess("");
    setError("");

    return isSuccess;
  };

  const handleChangeFormField = (e) => {
    e.preventDefault();
    console.log("handleChangeFormField > Add > ", e.target.value);
    console.log("handleChangeFormField > Add > ", e.target.id);

    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (validateFormFields()) {
      setShowUpload(true);
    }
  };

  const onUploadSuccessOrFailure = (fileName, successMessage, errorMessage) => {
    console.log("Establishment Add > onUploadSuccess", fileName);
    setError(errorMessage);
    setSuccess(successMessage);
    setShowUpload(false);
  };

  const ShowAddFormControls = () => (
    <Fragment>
      <form
        onSubmit={submitFormHandler}
        className="col-lg-12 col-sm-12 m-0 p-0 mt-4 w-100 "
      >
        <EstablishmentTypeCodes
          code={EstbTypeCode}
          description={description}
          handleChangeFormField={(e) => handleChangeFormField(e)}
        />

        <div className="form-group">
          <label htmlFor="EstbDate" className="pt-2 mr-2">
            {EstbTypeCodeDescription} Date (mm/dd/yyyy):
          </label>
          <input
            type="date"
            className="form-control"
            id="EstbDate"
            value={EstbDate}
            onChange={handleChangeFormField}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="EstbTitle">
            Title for {EstbTypeCodeDescription}:
          </label>
          <input
            type="text"
            className="form-control"
            id="EstbTitle"
            value={EstbTitle}
            placeholder={`Enter the title for new ${EstbTypeCodeDescription}`}
            onChange={handleChangeFormField}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="EstbDescription">
            Description for {EstbTypeCodeDescription}:{" "}
          </label>
          <textarea
            type="text"
            className="form-control"
            id="EstbDescription"
            value={EstbDescription}
            rows="4"
            placeholder={`Enter the description for new ${EstbTypeCodeDescription}`}
            onChange={handleChangeFormField}
            required
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Submit {EstbTypeCodeDescription}
          </button>
          <button type="button" className="btn btn-primary ml-4">
            View My {EstbTypeCodeDescription}
          </button>
          <div className="alert alert-warning mt-2 text-left">
            Note:
            <ul>
              <li>
                <em>
                  The <b>{EstbTypeCodeDescription}</b> will be displayed in
                  website after approval by the Admin
                </em>
              </li>
              <li>
                <em>
                  You can only view the items (<b>{EstbTypeCodeDescription}</b>)
                  added by you
                </em>
              </li>
              <li>
                <em>
                  Pending items (<b>{EstbTypeCodeDescription}</b>) are only
                  editable. Approved items are not.
                </em>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </Fragment>
  );

  const showForm = () => {
    return (
      <Fragment>
        <div className="row m-0 p-0">
          <div className="col-2">&nbsp;</div>
          <div className="col-8">
            {showUpload === false ? (
              ShowAddFormControls()
            ) : (
              <UploadFile
                title="Upload File"
                EstbID={EstbID}
                onUploadSuccessOrFailure={(fileName, success, failure) =>
                  onUploadSuccessOrFailure(fileName, success, failure)
                }
              />
            )}
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
      </Fragment>
    );
  };

  const showProcessingMessage = () => {
    return isProcessing === false ? (
      ""
    ) : (
      <div className="alert alert-info m-0 p-2 text-center w-60">
        <Loading text="Processing ....." />
      </div>
    );
  };

  const showErrorMessage = () => {
    return error.length === 0 ? (
      ""
    ) : (
      <div className="alert alert-danger m-0 p-2 text-center w-70">{error}</div>
    );
  };

  const showSuccessMessage = () => {
    return success.length === 0 ? (
      ""
    ) : (
      <div className="alert alert-success m-0 p-2 text-center w-70">
        {success}
      </div>
    );
  };

  return (
    <div className="row d-flex text-left pl-4">
      <div
        className="col-12 p-0 m-0 bg-page-title"
        style={{ marginLeft: "-20px !important", textTransform: "uppercase" }}
      >
        <b>{title}</b>
      </div>
      <div className="col-12 p-0 m-0">
        {showErrorMessage()}
        {showSuccessMessage()}
        {showForm()}
        {showProcessingMessage()}
      </div>
      {/* 
            <pre>
                {JSON.stringify(values, null, 5)}
            </pre> */}
    </div>
  );
}
