import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../../actionMethods/studentActionMethods";
import { fetchStaffs } from "../../../../actionMethods/staffActionMethods";
import { fetchBooks } from "../../../../actionMethods/bookActionMethods";
import { fetchEstablishments } from "../../../../actionMethods/estbActionMethods";

import Spinner from "../../../commons/Spinner";

import "./CollegeSummary.css";

const CollegeSummary = () => {
  const students = useSelector((state) => state.student);
  const staffs = useSelector((state) => state.staff);
  const estb = useSelector((state) => state.estb);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchStaffs());
    //dispatch(fetchBooks());
    dispatch(fetchEstablishments());
  }, []);
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-12 col-sm-12 m-0 mt-2 p-2 border-dark">
        <Link to="/staffs" className="text-info">
          <i className="fa fa-chalkboard-teacher fa-2x  mr-2  p-2"></i>
          <strong className="text-large">
            STAFFS:
            <span
              className="badge badge-info m-2 p-2 total"
              style={{ float: "right" }}
            >
              {staffs && staffs.count === 0 ? <Spinner /> : staffs.count}
            </span>
          </strong>
          <span className="badge badge-info total w-100">
            Teaching Staffs : {staffs.total_teaching_staffs}
            <hr style={{ height: "1px", margin: "3px", padding: "0px" }} />
            Non Teaching Staffs: {staffs.total_non_teaching_staffs}
          </span>
        </Link>
      </div>

      <div className="col-lg-12 col-sm-12 total m-0 p-2">
        <Link to="/students" className="text-success">
          <i className="fa fa-user-graduate fa-2x mr-2 p-2"></i>
          <strong className="text-large">
            STUDENTS:
            <span className="total badge badge-success">
              {students && students.count.total === 0 ? (
                <Spinner />
              ) : (
                students.count.total
              )}
            </span>
          </strong>
          <div className=" w-100 m-0 p-0 text-center text-dark-green">
            <span className="d-block f-left">
              Boys : <strong>{students.count.total_male}</strong>
            </span>
            <span className="d-block f-right">
              Girls : <strong>{students.count.total_female}</strong>
            </span>
          </div>
          <hr style={{ height: "1px", margin: "2px", padding: "0px" }} />
          <div className="w-100 m-1 p-1 mt-2 d-grid text-dark-green">
            <div className="sub-total-left">+3 Arts 1st Year</div>
            <div className="sub-total-right badge badge-success">
              {students.count.total_students_first_year}
            </div>
            <div className="sub-total-left">+3 Arts 2nd Year</div>
            <div className="sub-total-right  badge badge-success">
              {students.count.total_students_second_year}
            </div>
            <div className="sub-total-left">+3 Arts 3rd Year</div>
            <div className="sub-total-right  badge badge-success">
              {students.count.total_students_third_year}
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-12 col-sm-12 total category m-0 p-0 mr-2 text-success">
        <div className="category-label">General</div>
        <div className="category-value">
          <span className="badge badge-success p-2">
            {students.count.total_category_general}
          </span>
        </div>
        <div className="category-label">OBC</div>
        <div className="category-value">
          <span className="badge badge-success p-2">
            {students.count.total_category_OBC}
          </span>
        </div>
        <div className="category-label">SC</div>
        <div className="category-value">
          <span className="badge badge-success p-2">
            {students.count.total_category_SC}
          </span>
        </div>
        <div className="category-label">ST</div>
        <div className="category-value">
          <span className="badge badge-success p-2">
            {students.count.total_category_ST}
          </span>
        </div>
        <div className="category-label">Other</div>
        <div className="category-value">
          <span className="badge badge-success p-2">
            {students.count.total_category_others}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollegeSummary;
