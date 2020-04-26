import React, { useState, Fragment, useEffect } from "react";
import { isAuthenticated, addEstablishment } from "../../api/user";
import Loading from "./Loading";
import EstablishmentTypeCodes from "./EstablishmentTypeCodes";
import UploadFile from "./UploadFile";
import titleCase, { getCurrentDate_YYYY_MM_DD } from "./CommonFunctions";
import "./Establishments.css";

export default function EstablishmentsAdd({ title, code, description }) {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [newID, setNewID] = useState(0);
  const [values, setValues] = useState({
    EstbID: 0,
    EstbTypeCode: code,
    EstbTypeCodeDescription: description,
    EstbDate: getCurrentDate_YYYY_MM_DD(), //'2020-04-11', //getCurrentDate_MMDDYYYY(),
    EstbTitle: "",
    EstbDescription: "",
    EstbFile: "",
    EstbShouldUpload: true,
  });

  const { UserID } = isAuthenticated();
  const {
    EstbID,
    EstbTypeCode,
    EstbTypeCodeDescription,
    EstbDate,
    EstbTitle,
    EstbDescription,
    EstbShouldUpload,
  } = values;

  useEffect(() => {
    console.log("code=", code);
    setValues({
      ...values,
      EstbTypeCode: code,
      EstbTitle: "",
      EstbDescription: "",
      EstbTypeCodeDescription: titleCase(description),
    });
  }, [code]);

  const validateFormFields = () => {
    let isSuccess = true;
    let message = "";
    setSuccess("");
    setError("");

    return isSuccess;
  };

  const handleChangeFormField = (e) => {
    let formValue = e.target.value;
    if (e.target.id === "EstbTypeCode" && formValue === "") {
      formValue = EstbTypeCode.substring(0, 1);
    }

    setValues({
      ...values,
      [e.target.id]:
        e.target.id === "EstbShouldUpload" ? e.target.checked : formValue,
    });
  };

  const resetFormFileds = () => {
    setValues({
      EstbID: 0,
      EstbTypeCode: code,
      EstbTypeCodeDescription: description,
      EstbDate: getCurrentDate_YYYY_MM_DD(), //'2020-04-11', //getCurrentDate_MMDDYYYY(),
      EstbTitle: "",
      EstbDescription: "",
      EstbFile: "",
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (validateFormFields()) {
      addEstablishment(UserID, {
        EstbID,
        EstbTypeCode,
        EstbDate,
        EstbTitle,
        EstbDescription,
        EstbStatusFlag: "P",
      }).then((data) => {
        if (Number(data.status.code) > 0) {
          setSuccess(data.result);
          setError("");

          if (EstbShouldUpload === true) {
            setNewID(Number(data.status.code));
            setShowUpload(true);
          }
        } else {
          setShowUpload(false);
          setSuccess("");
          setError(data.result);
        }
      });
    }
  };

  const onUploadSuccessOrFailure = (fileName, successMessage, errorMessage) => {
    //console.log('Establishment Add > onUploadSuccess', fileName);
    setError(errorMessage);
    setSuccess(successMessage);
    setShowUpload(false);
  };

  const ShowAddFormControls = () => (
    <Fragment>
      <form
        onSubmit={submitFormHandler}
        className="col-lg-12 col-sm-12 m-0 p-0 mt-4 w-100 text-left"
      >
        <div className="form-group">
          <label htmlFor="EstbDate" className="pt-2 mr-2 required ">
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
        {code === "R" || code === "P" ? (
          <EstablishmentTypeCodes
            code={EstbTypeCode}
            description={description}
            handleChangeFormField={(e) => handleChangeFormField(e)}
          />
        ) : (
          ""
        )}
        <div className="form-group mt-2">
          {/* <label htmlFor="EstbTitle" className="required">{EstbTypeCodeDescription === 'Video' ? 'Youtube / Facebook Link' : 'Title'} for {EstbTypeCodeDescription}:</label> */}
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
          {/* <label htmlFor="EstbDescription" className="required">Description for {EstbTypeCodeDescription}: </label> */}
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
        <div className="form-group mt-2">
          <input
            type="checkbox"
            className="form-control-1 mr-2"
            id="EstbShouldUpload"
            //value={EstbShouldUpload}
            checked={values.EstbShouldUpload}
            onChange={handleChangeFormField}
          />
          <label htmlFor="EstbShouldUpload">
            {`I want to upload a file for this ${EstbTypeCodeDescription}`}{" "}
          </label>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary button-width">
            <i className="fas fa-save mr-2"></i> SUBMIT
          </button>
          {/* <button
            type="button"
            className="btn btn-primary ml-4 button-width"
            onClick={resetFormFileds}
          >
            <i className="fas fa-backspace mr-2"></i> RESET
          </button> */}

          <div className="alert alert-warning mt-2 text-left">
            Note:
            <ul>
              <li>
                <em>
                  The items marked as <span style={{ color: "red" }}>*</span>{" "}
                  are required fields. You can't leave it blank
                </em>
              </li>
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
          <div className="col-lg-2 col-sm-12 col-xs-12">&nbsp;</div>
          <div className="col-lg-8 col-sm-12 col-xs-12">
            {showUpload === false ? (
              ShowAddFormControls()
            ) : (
              <UploadFile
                title={`Upload File for ${EstbTypeCodeDescription}`}
                EstbID={newID}
                onUploadSuccessOrFailure={(fileName, success, failure) =>
                  onUploadSuccessOrFailure(fileName, success, failure)
                }
              />
            )}
          </div>
          <div className="col-lg-2 col-sm-12 col-xs-12">&nbsp;</div>
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
    <div className="row m-0 p-0 ml-3">
      <div className="col-lg-12 col-sm-12 p-0 ml-4 mr-2 bg-page-title">
        <b>{title}</b>
        {/* code={JSON.stringify(code, null, 5)} , EstbTypeCode={JSON.stringify(values.EstbTypeCode, null, 5)} */}
      </div>
      <div className="col-12 p-0 m-0 mb-2">
        {showErrorMessage()}
        {showSuccessMessage()}
        {showForm()}
        {showProcessingMessage()}
      </div>
      {/* <pre>
                {JSON.stringify(values, null, 5)}
            </pre> */}
    </div>
  );
}
