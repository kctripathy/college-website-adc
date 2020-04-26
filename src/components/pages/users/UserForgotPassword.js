import React, { useState } from "react";
import { forgotPassword } from "../../../api/user";
import Layout from "../Layout";
import Loading from "../../commons/Loading";

export default function UserForgotPassword() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [values, setValues] = useState({
    username: "",
    phoneno: "",
    dateofbirth: "",
  });
  const { username, phoneno, dateofbirth } = values;

  const validateFormFields = () => {
    let isSuccess = true;
    let message = "";
    setSuccess("");
    setError("");

    if (phoneno.length < 10) {
      setError("Please enter a valid phone number!");
      isSuccess = false;
    }
    return isSuccess;
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (validateFormFields()) {
      setIsProcessing(true);
      forgotPassword({
        UserName: username,
        PhoneNo: phoneno,
        DateOfBirth: dateofbirth,
      })
        .then((data) => {
          //debugger;
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
            username: "",
            phoneno: "",
            dateofbirth: "",
          });
        })
        .catch((err) => {
          //console.log("forgot password error=", err);
          setError(
            "Error while processing! please contact Administrator ",
            err
          );
          setIsProcessing(false);
        });
    }
  };

  const handleTextBoxChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const showForgotPasswordForm = () => {
    return (
      <form
        onSubmit={submitFormHandler}
        className="shadow-sm p-3 mt-3 mb-3 bg-white rounded"
      >
        <div className="form-group">
          <label htmlFor="username" className="required">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            placeholder="Enter your user name (Student's Roll No. and Staff's Code is the user name or login id)"
            onChange={handleTextBoxChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneno" className="required">
            Phone Number:{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneno"
            value={phoneno}
            placeholder="Enter your phone number (It must be 10 digits and registred with College)"
            onChange={handleTextBoxChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateofbirth" className="required">
            Date of Birth:{" "}
          </label>
          <input
            type="date"
            className="form-control"
            id="dateofbirth"
            value={dateofbirth}
            placeholder="Enter your date of birth as per the college record."
            onChange={handleTextBoxChange}
            required
          />
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary pl-2 pr-2">
            RETRIVE MY PASSWORD
          </button>
          <button
            type="button"
            className="btn btn-primary ml-2 pl-2 pr-2"
            onClick={resetFormFields}
          >
            CLEAR
          </button>
        </div>
      </form>
    );
  };

  const showErrorMessage = () => {
    return error.length === 0 ? (
      ""
    ) : (
      <div className="alert alert-danger m-0 p-2 text-center w-60">{error}</div>
    );
  };

  const showSuccessMessage = () => {
    return success.length === 0 ? (
      ""
    ) : (
      <div className="alert alert-success m-0 p-2 text-center w-60">
        {success}
      </div>
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

  const resetFormFields = (e) => {
    e.preventDefault();
    setValues({
      username: "",
      phoneno: "",
      dateofbirth: "",
    });
  };

  return (
    <Layout title="FORGOT YOUR PASSWORD?">
      {/* <form onSubmit={submitFormHandler}> */}
      <div className="row d-flex text-left pl-4">
        {/* <div className="col-12 p-1 m-0 mb-2 w-50 bg-page-title">
                    <b>FORGOT PASSWORD</b>
                </div> */}
        <div className="col-12 p-0 m-0 w-100">
          <div className="row m-0 p-0">
            <div className="col-lg-3 col-xs-12">&nbsp;</div>
            <div className="col-lg-6 col-xs-12">
              {showForgotPasswordForm()}
              {showErrorMessage()}
              {showSuccessMessage()}
              {showProcessingMessage()}
            </div>
            <div className="col-lg-3 col-xs-12">&nbsp;</div>
          </div>
        </div>
        {/* <pre>
                        {JSON.stringify(values, null, 5)}
                    </pre> */}
      </div>
      {/* </form> */}
    </Layout>
  );
}
