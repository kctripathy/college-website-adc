import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../commons/Loading";
import { fetchEstablishments } from "../../../actionMethods/estbActionMethods";
import { EstbTypeCode } from "../../../constants/actionTypes";
import Download from "./Download";
import Layout from "../Layout";

function Downloads() {
  const state = useSelector((state) => state.estb);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.establishments.length === 0) {
      dispatch(fetchEstablishments());
    }
  }, []);

  const showDownload = (estbTypeCode, estbTypeCodeDesc) => {
    return (
      <div className="card bg-light col-12 m-0 p-0 mb-2">
        <div className="card-header bg-section text-dark text-uppercase">
          <b>{estbTypeCodeDesc}</b>
        </div>
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <div className="row m-0 p-0">
            {state.establishments
              .filter((f) => f.EstbTypeCode === estbTypeCode)
              .map((e) => (
                <Download key={e.EstbID} data={e} />
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Downloads">
      {state.loading ? (
        <Loading text="Retriving downloads..." />
      ) : (
        <div className="row m-0 p-0">
          {showDownload(EstbTypeCode.Syllabus, "Syllabus")}
          {showDownload(EstbTypeCode.MinutesOfMeeting, "Minutes Of Meetings")}
          {showDownload(
            EstbTypeCode.PUBLICATION_ARTICLE_COLUMN,
            "Aricles or Columns"
          )}
          {showDownload(
            EstbTypeCode.PUBLICATION_PROJECT_PAPER,
            "Project Papers"
          )}
          {showDownload(
            EstbTypeCode.PUBLICATION_SEMINAR_PAPER,
            "Seminar Papers"
          )}
          {showDownload(
            EstbTypeCode.PUBLICATION_BOOK_PROCEEDINGS,
            "Book / Proceedings"
          )}
          {showDownload(
            EstbTypeCode.PUBLICATION_STUDY_MATERIAL,
            "Study Materials"
          )}
          {showDownload(EstbTypeCode.AwardAchievment, "Award / Achievments")}
          {showDownload(EstbTypeCode.Downloadable, "Downloadables")}
        </div>
      )}
    </Layout>
  );
}

export default Downloads;
