import React, { useState } from "react";
import Iframe from "react-iframe";
import WordDocImage from "../../../assets/images/word-icon.gif";
//import { Document, Page, pdfjs } from "react-pdf";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from "moment";
import Layout from "../Layout";
import { CORS_URL, WEB_URL } from "../../../config";
import titleCase, {
  isAnImage,
  isPDF,
  isDocument,
} from "../../commons/CommonFunctions";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const EstablishmentDetails = (props) => {
  const { establishment } = props.location.state;

  const loadDocument = (type) => {
    switch (type) {
      case "img":
        return (
          <img
            src={`${WEB_URL}/Documents/${establishment.FileNameWithPath}`}
            alt={establishment.FileNameWithPath}
            className="img img-responsive img-fluid w-auto"
            style={{ maxHeight: "500px" }}
          />
        );
        break;
      case "pdf":
        return (
          <Iframe
            url={`${WEB_URL}/Documents/${establishment.FileNameWithPath}`}
            width="100%"
            height="450px"
            id="myId"
            frameBorder="0"
            className="myClassname"
            display="initial"
            position="relative"
          />
        );

      case "doc":
        return (
          <a
            href={`${WEB_URL}/Documents/${establishment.FileNameWithPath}`}
            target="_blank"
          >
            <img
              src={WordDocImage}
              style={{ height: "20px", marginRight: "5px" }}
              alt="View Documnent"
            ></img>
            View Document
          </a>
        );

      default:
        return "";
    }
  };

  const showEstablishment = () => {
    return (
      establishment && (
        <div className="col-12 text-center">
          <div className="row mt-2 ml-2">
            <div className="col-lg-6 col-xs-12 col-sm-12 text-justify">
              {/* <h5>{titleCase(establishment.EstbTypeCodeDesc)}</h5> */}
              <small className="mr-4">
                <b> Date:</b>&nbsp;{" "}
                {moment(establishment.EstbDate).format("LLLL")} (
                {moment(establishment.EstbDate).fromNow()})
              </small>
              <br />
              <small className="mr-4">
                <b>Added By:</b>&nbsp; {establishment.AuthorOrContributorName}
              </small>
              <hr />
              <h6>{establishment.EstbTitle}</h6>
              <p className="line-break">
                {establishment.EstbTitle === establishment.EstbDescription
                  ? ""
                  : establishment.EstbDescription}
              </p>
              {/* <h4>{establishment.EstbTypeCodeDesc}</h4>
                        <strong>{new Date(establishment.EstbDate).toShortFormat()}</strong>
                        <hr />
                        <h6>{establishment.EstbTitle}</h6>
                        <p>{establishment.EstbTitle === establishment.EstbDescription ? '' : printDescription(establishment.EstbDescription)}</p> */}
            </div>
            <div className="col-lg-6 col-xs-12 col-sm-12 text-center">
              {isAnImage(establishment.FileNameWithPath)
                ? loadDocument("img")
                : isPDF(establishment.FileNameWithPath)
                ? loadDocument("pdf")
                : isDocument(establishment.FileNameWithPath)
                ? loadDocument("doc")
                : ""}
            </div>
          </div>
        </div>
      )
    );
  };
  return (
    <Layout title={`${establishment.EstbTypeCodeDesc}`}>
      <div className="row">{showEstablishment()}</div>
    </Layout>
  );
};

export default EstablishmentDetails;
