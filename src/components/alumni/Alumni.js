import React from "react";
import AlumniAssociation from "./AlumniAssociation";
import AlumniEvents from "./AlumniEvents";

export default function Alumni() {
  return (
    <div className="row">
      <div className="col-lg-12 col-sm-12">
        <p>
          The Alumni meets regularly during the academic year and joins hands to
          celebrate important festivals in the institution. A forum for
          discussion and interaction on areas of interest has also been formed,
          which serves as a platform for speakers from a wide range of fields.
        </p>
        <h4>Aim and Objectives:</h4>
        <ul className="list-group-x">
          <li>
            To share information with the former students about the developments
            in the college
          </li>
          <li>
            To receive feedback to tune the college to the needs of the society.
          </li>
          <li>
            To support for ventures in the college especially for scholarships,
            sponsorships, medals.
          </li>
          <li>
            To collaborate with the college in organizing academic and cultural
            festivals, seminars, workshops etc.{" "}
          </li>
          <li>
            To link the college with industries, centers of consultancy,
            research and placement and thus develop a brand for the college.{" "}
          </li>
        </ul>
      </div>
      <div className="col-lg-12 col-sm-12">
        <AlumniAssociation />
      </div>
      <div className="col-lg-12 col-sm-12 bg-light m-0 p-1 bg-border-dark">
        <AlumniEvents />
      </div>
    </div>
  );
}
