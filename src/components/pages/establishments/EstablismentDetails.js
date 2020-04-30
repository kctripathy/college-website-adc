import React, { useState } from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import WordDocImage from "../../../assets/images/word-icon.gif";
import PersonImage from "../../commons/PersonImage";

import moment from "moment";
import Layout from "../Layout";
import { WEB_URL } from "../../../config";
import { isAnImage, isPDF, isDocument } from "../../commons/CommonFunctions";

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
              <h6>{establishment.EstbTitle}</h6>
              <small className="mr-4">
                <PersonImage
                  usertype="employee"
                  id={establishment.AddedBy}
                  height="20px"
                  width="20px"
                />
                <Link to={`/staffdetails/${establishment.AddedBy}`}>
                  {establishment.AuthorOrContributorName}
                </Link>
                &nbsp; : &nbsp;
                {moment(establishment.EstbDate).format("LLLL")} (
                {moment(establishment.EstbDate).fromNow()})
              </small>

              {/* <small className="mr-4">
                <b>Added By:</b>&nbsp; {establishment.AuthorOrContributorName}                
              </small> */}
              <hr />
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
