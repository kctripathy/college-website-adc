import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../actionMethods/studentActionMethods";
import Layout from "../Layout";
import Student from "./Student";
import Loading from "../../commons/Loading";
import SelectClasses from "../../commons/SelectClasses";

function Students({ match }) {
  const state = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [view, setView] = useState("list");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (state.students.length === 0) {
      //console.log("dispatch(fetchStudents())")
      dispatch(fetchStudents());
    }
  }, []);

  const handleView = (currentViewMode) => setView(currentViewMode);

  const showCollegeStudentsListView = () => {
    return (
      <Fragment>
        {state.loading ? (
          <Loading text="Retriving students..." />
        ) : (
          state.students &&
          state.students.length > 0 &&
          state.students.map((s) => <Student key={s.StudentID} student={s} />)
        )}
      </Fragment>
    );
  };

  const showCollegeStudentsGridView = () => {
    return (
      <Fragment>
        {state.loading ? (
          <Loading text="Retriving students..." />
        ) : (
          //state.students && state.students.length > 0 &&
          //state.students.map(s => <Student key={s.StudentID} student={s} />)
          <h3>Grid View</h3>
        )}
      </Fragment>
    );
  };

  const searchStudent = (e) => {
    e.preventDefault();
    //dispatch(fetchStudentSearch(Name));
    const newArray = state.students.filter((s) => s.StudentName.includes(Name));
    setSearchResult(newArray);
  };

  const showSearchResult = () => {
    return (
      <Fragment>
        {searchResult === null || searchResult.length === 0
          ? ""
          : searchResult &&
            searchResult.length > 0 &&
            searchResult.map((s) => <Student key={s.StudentID} student={s} />)}
      </Fragment>
    );
  };
  const showSearchResultHeader = () => {
    return (
      <Fragment>
        {searchResult === null || searchResult.length === 0 ? (
          ""
        ) : (
          <h6>
            Search Result: {searchResult.length} record
            {searchResult.length > 1 ? "s" : ""} found.
          </h6>
        )}
      </Fragment>
    );
  };

  const clearSearchResult = () => {
    setName("");
    setSearchResult([]);
  };

  const showSearchForm = () => {
    return (
      <form onSubmit={searchStudent}>
        <div className="col-lg-12">
          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Search</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                minLength="4"
                placeholder="Enter name of the student to search (at least four alphabets)"
                required
              />
              <button type="submit" className="btn btn-outline-primary ml-1">
                <i className="fa fa-search"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary ml-1"
                onClick={clearSearchResult}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const handleClassesOnChange = (selectedOptions) => {
    if (selectedOptions == null) {
      setSearchResult([]);
      return;
    }
    //console.log("selected depts ", selectedOptions);
    setName("");
    const filteredArray = state.students.filter((array) =>
      selectedOptions.some((filter) => filter.value === array.ClassID)
    );

    setSearchResult(filteredArray);
  };

  // const redirectStudentToCorrectPage = () => {
  //     //debugger;
  //     if (match.params.page) {
  //         if (match.params.page==='association') //admin
  //             return <Redirect to="/admin/dashboard" />
  //         else if (user && (user.RoleID === 2 || user.RoleID === 3)) //staffs
  //             return <Redirect to="/staff/dashboard" />
  //         else if (user && user.RoleID === 4)
  //             return <Redirect to="/student/dashboard" />
  //         else
  //             return <Redirect to="/" />
  //     }
  // }

  return (
    <Layout title="Students" handleView={(mode) => handleView(mode)}>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-xs-12 p-0 m-0">
          <SelectClasses
            onChange={(v) => handleClassesOnChange(v)}
            students={state.students}
          />
        </div>
        <div className="col-lg-6 col-sm-12 col-xs-12 m-0 p-0">
          {showSearchForm()}
        </div>
      </div>
      <div
        className="row m-1 p-1 bg-adc"
        style={{
          display:
            searchResult !== null && searchResult.length > 0 ? "" : "none",
        }}
      >
        {showSearchResultHeader()}
      </div>
      <div
        className="row m-1 p-1 bg-adc"
        style={{
          display:
            searchResult !== null && searchResult.length > 0 ? "" : "none",
        }}
      >
        {showSearchResult()}
      </div>
      <div className="row m-1 p-1">
        {view === "list"
          ? showCollegeStudentsListView()
          : showCollegeStudentsGridView()}
      </div>
    </Layout>
  );
}

export default Students;
