import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { EstbTypeCode } from "../../../constants/actionTypes";
import { fetchEstablishments } from "../../../actionMethods/estbActionMethods";
import Loading from "../../commons/Loading";
import PersonImage from "../../commons/PersonImage";

import Tabs from "../../commons/Tabs";
import "./Publications.css";
import PDFImage from "../../../assets/images/pdf_16x16.gif";
import PcitureImage from "../../../assets/images/img_64x64.png";
import WordDocImage from "../../../assets/images/word-icon.gif";
import { isAnImage, isPDF, isDocument } from "../../commons/CommonFunctions";
import { CORS_URL, WEB_URL } from "../../../config";
import DateAuthorSignature from "../../commons/DateAuthorSignature";

const Publications = () => {
  const estb = useSelector((state) => state.estb);
  const dispatch = useDispatch();

  useEffect(() => {
    if (estb.establishments.length === 0) dispatch(fetchEstablishments());
  }, []);

  const showImageIcon = (filename) => {
    var url = "";
    if (filename.length > 0) {
      if (isAnImage(filename) === true) {
        return (
          <a href={`${WEB_URL}/Documents/${filename}`} target="_blank">
            <img
              src={PcitureImage}
              alt={filename}
              style={{ height: "16px", float: "right" }}
            />
          </a>
        );
      } else if (isPDF(filename) === true) {
        return (
          <a href={`${WEB_URL}/Documents/${filename}`} target="_blank">
            <img
              src={PDFImage}
              alt={filename}
              style={{ height: "16px", float: "right" }}
            />
          </a>
        );
      } else if (isDocument(filename) === true) {
        return (
          <a href={`${WEB_URL}/Documents/${filename}`} target="_blank">
            <img
              src={WordDocImage}
              alt={filename}
              style={{ height: "16px", float: "right" }}
            />
          </a>
        );
      }
    }
    return url;
  };

  const showPublication = (typecode) => {
    return estb.loading ? (
      <Loading />
    ) : (
      <ul className="publications-heading">
        {estb.establishments
          .filter(
            (e) => e.EstbTypeCode === typecode && e.EstbStatusFlag === "A"
          )
          .map((estb) => {
            return (
              <li key={estb.EstbID}>
                <ul className="publications">
                  <li className="list-item w-100 d-block">
                    <Link
                      to={{
                        pathname: "/publicationdetails",
                        state: {
                          establishment: estb,
                        },
                      }}
                    >
                      {estb.EstbTitleZone}
                    </Link>
                    {estb.FileNameWithPath.length > 0 &&
                      showImageIcon(estb.FileNameWithPath)}
                    <DateAuthorSignature
                      date={estb.EstbDate}
                      addedBy={estb.AddedBy}
                      author={estb.AuthorOrContributorName}
                    />
                    {/* <small>
                      Published Date: {moment(estb.EstbDate).format("LLLL")} (
                      {moment(estb.EstbDate).fromNow()}) &nbsp;
                      <i className="fas fa-circle fa-xs"></i> &nbsp; Added By:
                      &nbsp;
                      <PersonImage
                        usertype="employee"
                        id={estb.AddedBy}
                        height="20px"
                        width="20px"
                      />
                      <Link to={`/staffdetails/${estb.AddedBy}`}>
                        {estb.AuthorOrContributorName}
                      </Link>
                    </small> */}
                  </li>
                </ul>
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <Fragment>
      <div className="row mt-2 mb-2 pb-2">
        <div className="col-lg-1">&nbsp;</div>
        <div className="col-10">
          <p>The aims of College Publications are:</p>
          <ul>
            <li>
              To provide a forum for students and faculty to express their views
              and insights on subject-related and general topics.
            </li>
            <li>
              To publish books that can be purchased at reasonable prices,
              making information accessible to all.
            </li>
            <li>
              To show that academics no longer need to be controlled by
              commercial interests!
            </li>
          </ul>
          <p>
            The college has a publication cell headed by the chief Editor. The
            Editorial board has an Editor and a team of Associate Editors. Due
            representation is given to student Editors in the Board. Main
            Publications of the College are:
          </p>
        </div>
        <div className="col-lg-1">&nbsp;</div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-sm-12 col-xs-12">&nbsp;</div>
        <div className="col-lg-10  col-sm-12 col-xs-12">
          <Tabs initActiveTabIndex="0">
            <div label="Articles">
              {showPublication(EstbTypeCode.PUBLICATION_ARTICLE_COLUMN)}
            </div>
            <div label="Projects">
              {showPublication(EstbTypeCode.PUBLICATION_PROJECT_PAPER)}
            </div>
            <div label="Seminars">
              {showPublication(EstbTypeCode.PUBLICATION_SEMINAR_PAPER)}
            </div>
            <div label="Books">
              {showPublication(EstbTypeCode.PUBLICATION_BOOK_PROCEEDINGS)}
            </div>

            {/* <div label="Study Materials">
              {showPublication(EstbTypeCode.PUBLICATION_STUDY_MATERIAL)}
            </div> */}
          </Tabs>
        </div>
        <div className="col-lg-1 col-xs-12">&nbsp;</div>
      </div>
    </Fragment>
  );
};

export default Publications;
