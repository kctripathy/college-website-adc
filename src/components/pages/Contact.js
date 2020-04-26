import React, { useState } from "react";
import sendEmail from "../commons/SendEmail";
import Layout from "./Layout";

function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setSuccess("");
    setError("");

    const templateId = "quiz_contact_from";
    sendEmail(templateId, {
      mail_message: Message,
      mail_subject: Subject,
      mail_from: Name,
      mail_reply_to: Email,
    })
      .then((res) => {
        //debugger;
        if (res.status === 200) {
          setSuccess("Successfully sent the mail");
          setError("");
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
        } else {
          setSuccess("");
          setError(`Failed to send email! ${res.text}`);
        }
        setIsProcessing(false);
      })
      .catch((err) => {
        //debugger;
        setIsProcessing(false);
        setSuccess("");
        setError(`Failed to send email because: ${err}`);
      });
  };

  const contactForm = () => {
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="card rounded-0 mb-4">
            <div className="card-header p-0">
              <div className="bg-light text-dark py-2">
                <h5>
                  <i className="fa fa-envelope ml-3 pt-2"></i> Contact
                </h5>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-user text-warning"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    name="user_name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-envelope text-warning"></i>
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="user_email"
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-user text-warning"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="mail_subject"
                    name="mail_subject"
                    value={Subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter mail subject"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-comment text-warning"></i>
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    id="mail_message"
                    name="mail_message"
                    rows="4"
                    placeholder="Please enter your message here"
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Send Email"
                  className="btn btn-primary rounded-0 py-2"
                />
              </div>
              <br />
              <br />
            </div>
          </div>
        </form>

        {/* <div className="text-center">
                    <input type="submit" value="Send Password Reset Link" onClick={sendPasswordResestLink} className="btn btn-warning rounded-0 py-2" />
                </div> */}
      </div>
    );
  };

  const address = () => {
    return (
      <div className="card bg-light mb-3">
        <div className="card-header bg-light text-dark text-uppercase">
          <i className="fa fa-home mr-2"></i>POSTAL ADDRESS:
        </div>
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <span>
            At/Po: Jagannath Prasad, <br />
            Dist: Ganjam (Odisha) <br />
            PIN: 761121
          </span>
          <p className="address-text">Phone: 06818 - 262087</p>
          <p className="address-text">
            Email:{" "}
            <a href="mailto:adc.jnprasad@gmail.com">adc.jnprasad@gmail.com</a>
          </p>
        </div>
      </div>
    );
  };

  const address_principal = () => {
    return (
      <div className="card bg-light mb-3">
        <div className="card-header bg-light text-dark text-uppercase">
          <i className="fa fa-id-card mr-2"></i> <b>Prof. Sanatan Sahu </b>,
          Principal
        </div>
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <p className="address-text">Phone (Mobile): +91 - 94375 14174</p>
          <p className="address-text">
            Email:{" "}
            <a href="mailto:sahusanatana@yahoo.com">sahusanatana@yahoo.com</a>
          </p>
        </div>
      </div>
    );
  };

  const address_deo = () => {
    return (
      <div className="card bg-light mb-3">
        <div className="card-header bg-light text-dark text-uppercase">
          <i className="fa fa-id-card mr-2"></i> <b>Mr. Saroj Kumar Nayak </b>,
          D.E.O.
        </div>
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <p className="address-text">Phone: +91 80938 53112</p>
          <p className="address-text">
            Email:{" "}
            <a href="mailto:nayaksarojkumar08@gmail.com">
              nayaksarojkumar08@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger text-center"
      style={{ display: error.length > 0 ? "" : "none" }}
    >
      <b>{error}</b>
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success text-center"
      style={{ display: success.length > 0 ? "" : "none" }}
    >
      <b>{success}</b>
    </div>
  );

  const showProcessing = () => (
    <div
      className="alert alert-warning text-center"
      style={{ display: isProcessing ? "" : "none" }}
    >
      <b>Processing.... please wait a while!</b>
    </div>
  );

  return (
    <Layout>
      <div className="row" style={{ padding: "20px 0px" }}>
        <div className="col-lg-6 col-sm-12 ">
          {contactForm()}
          {showSuccess()}
          {showError()}
          {showProcessing()}
        </div>
        <div className="col-lg-6 co-sm-12 user-contact-image">
          {address()}
          {address_principal()}
          {address_deo()}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
