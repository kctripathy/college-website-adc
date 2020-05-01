import React, { useState } from "react";
import { isAuthenticated, submitFeedback } from "../../../api/user";
import DashboardLayout from "../LayoutDashboard";
import Loading from "../../commons/Loading";

export default function UserSubmitFeedback() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [values, setValues] = useState({
    type: "SUGGESTION",
    subject: "",
    message: "",
  });

  const { UserID } = isAuthenticated();
  const { type, subject, message } = values;

  const validateFormFields = () => {
    let isSuccess = true;
    let message = "";
    setSuccess("");
    setError("");

    return isSuccess;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (validateFormFields()) {
      submitFeedback({
        UserID,
        UserFeedbackType: type,
        UserFeedbackSubject: subject,
        UserFeedbackMessage: message,
      })
        .then((data) => {
          debugger;
          //console.log("change password data", data);
          if (Number(data.status.code) > 0) {
            setSuccess(data.result);
            setError("");
          } else {
            setSuccess("");
            setError(data.result);
          }
          setIsProcessing(false);
          setValues({
            ...values,
            type: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          //console.log("occured while submitting feedback=", err);
          setError("Some error occured while submitting feedback: ", err);
        });
    }
  };

  const showSubmitFeedbackForm = () => {
    return (
      <form onSubmit={submitFormHandler} className="mt-4 w-70 ml-5">
        <div className="form-group">
          <label htmlFor="subject" className="required">
            Feedback Type:
          </label>
          <select
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
            required
          >
            <option value="">-- SELECT TYPE OF FEEDBACK --</option>
            <option value="SUGGESTION">SUGGESTION</option>
            <option value="COMPLAIN">COMPLAIN</option>
            <option value="ISSUE/RISK">ISSUE</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="required">
            Feedback Subject:
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            placeholder="Enter the subject of feedback message"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="required">
            Feedback Message:{" "}
          </label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            rows="5"
            value={message}
            placeholder="Enter the message"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Submit Feedback
          </button>
        </div>
      </form>
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
    <DashboardLayout title="Change your password">
      {/* <form onSubmit={submitFormHandler}> */}
      <div className="row d-flex text-left pl-4">
        <div
          className="col-12 p-1 m-0 mb-2 w-50 bg-page-title"
          style={{ marginLeft: "-20px !important", textTransform: "uppercase" }}
        >
          <b>SUBMIT FEEDBACK</b>
        </div>
        <div
          className="col-11 p-0 m-0"
          style={{ marginLeft: "-20px !important" }}
        >
          {showSubmitFeedbackForm()}
          {showErrorMessage()}
          {showSuccessMessage()}
          {showProcessingMessage()}
        </div>

        {/* <pre>
                    {JSON.stringify(values, null, 5)}
                </pre> */}
      </div>
      {/* </form> */}
    </DashboardLayout>
  );
}
